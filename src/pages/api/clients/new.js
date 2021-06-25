const handler = async (req, res) => {
  const method = req.method;

  if (method === 'POST') {
    const { name, email, message, phone, insuranceType } = req.body;

    const dataForm = {
      email,
      name,
      phone,
      message,
      insurance_type: insuranceType,
    };
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}`, {
      method: 'POST',
      body: JSON.stringify(dataForm),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await res.json();

    return res.status(201).json({ message: 'Sucess', data: data });
  }
};

export default handler;
