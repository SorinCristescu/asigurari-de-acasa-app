const handler = async (req, res) => {
  const method = req.method;
  if (method === 'POST') {
    const { name, email, message, phone } = req.body;

    const API_KEY = process.env.MAILCHIMP_API_KEY;
    const LIST_ID = process.env.MAILCHIMP_LIST_ID;
    const DATACENTER = process.env.MAILCHIMP_API_KEY.split('-')[1];
    const url = `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${LIST_ID}/members`;

    // Api key need to be encoded in base 64 format before
    const base64ApiKey = Buffer.from(`anystring: ${API_KEY}`).toString(
      'base64'
    );

    if (!name || !name.length) {
      return res.status(400).json({ message: 'Forgot to add your name!' });
    }
    if (!email || !email.length) {
      return res.status(400).json({ message: 'Forgot to add your email!' });
    }

    if (!message || !message.length) {
      return res.status(400).json({ message: 'Forgot to add your message!' });
    }
    const data = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        NAME: name,
        PHONE: phone,
        MESSAGE: message,
        email_address: email,
        status: 'subscribed',
      }),
      headers: {
        'Content-Type': 'application/',
        Authorization: `apikey ${base64ApiKey}`,
        'Access-Control-Allow-Origin': '*',
      },
    });
    console.log('data', data);

    return res.status(201).json({ message: 'Sucess' });
  }
};

export default handler;
