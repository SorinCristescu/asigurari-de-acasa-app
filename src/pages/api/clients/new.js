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

    if (!phone || !phone.length) {
      return res.status(400).json({ message: 'Forgot to add your phone!' });
    }

    const dataForm = {
      email,
      name,
      phone,
      message,
      insurance_type: insuranceType,
    };

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/customers`,
      {
        method: 'POST',
        body: JSON.stringify(dataForm),
        headers: {
          'Content-Type': 'application/json',
          // Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = await response.json();

    return res.status(201).json({ message: 'Sucess', data });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
};

export default handler;
