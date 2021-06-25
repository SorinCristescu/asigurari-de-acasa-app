import nodemailer from 'nodemailer';

const handler = async (req, res) => {
  const method = req.method;
  if (method === 'POST') {
    const { name, email, message, phone, insuranceType } = req.body;

    if (!name || !name.length) {
      return res.status(400).json({ message: 'Forgot to add your name!' });
    }
    if (!email || !email.length) {
      return res.status(400).json({ message: 'Forgot to add your email!' });
    }

    if (!insuranceType || !insuranceType.length) {
      return res
        .status(400)
        .json({ message: 'Forgot to add your insurance type!' });
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASSWORD,
      },
    });

    try {
      const emailResponse = await transporter.sendMail({
        from: email,
        to: process.env.EMAIL_RECEIVER,
        subject: `Contact form submission from ${name}`,
        html: `<p>Ai o noua cerere de oferta de la ${name}</p><br/>
        <p><strong>Nume:</strong> ${name}</p><br/>
        <p><strong>Email:</strong> ${email}</p><br/>
        <p><strong>Telefon:</strong> ${phone}</p><br/>
        <p><strong>Tip de asigurare dorita:</strong> ${insuranceType}</p><br/>
        <p><strong>Mesaj:</strong> ${message}</p>`,
      });
      console.log('Message', emailResponse.messageId);
    } catch (error) {
      console.log(error);
    }

    return res.status(201).json({ message: 'Sucess', sender: emailResponse });
  }
};

export default handler;
