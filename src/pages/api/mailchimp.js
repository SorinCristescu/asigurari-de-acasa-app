const handler = async (req, res) => {
  const method = req.method;
  if (method === 'POST') {
    const { name, email } = req.body;

    const API_KEY = process.env.MAILCHIMP_API_KEY;
    const LIST_ID = process.env.MAILCHIMP_LIST_ID;
    const DATACENTER = process.env.MAILCHIMP_API_KEY.split('-')[1];
    const url = `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${LIST_ID}/members`;

    if (!name || !name.length) {
      return res.status(400).json({ message: 'Forgot to add your name!' });
    }
    if (!email || !email.length) {
      return res.status(400).json({ message: 'Forgot to add your email!' });
    }

    const dataForm = {
      email_address: email,
      status: 'subscribed',
      merge_fields: {
        NAME: name,
      },
    };
    const data = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(dataForm),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `anystring: ${API_KEY}`,
      },
    });
    const response = await data.json();

    return res.status(201).json({ message: 'Sucess', sender: response });
  }
};

export default handler;
