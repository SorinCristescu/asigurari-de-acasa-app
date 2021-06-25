import nodemailer from 'nodemailer';

const handler = async (req, res) => {
  const method = req.method;
  if (method === 'GET') {
    const { name, email, message, phone, insuranceType } = req.body;

    const dataForm = {
      email_address: email,
      status: 'subscribed',
      merge_fields: {
        NAME: name,
        PHONE: phone,
        MESSAGE: message,
        INSURANCE: insuranceType,
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
