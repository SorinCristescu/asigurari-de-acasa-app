import cookie from 'cookie';

const handler = async (req, res) => {
  const method = req.method;
  if (method === 'GET') {
    if (!req.headers.cookie) {
      res.status(404).json({ message: 'Not Authorized!' });
      return;
    }

    const { token } = cookie.parse(req.headers.cookie);

    const strapiRes = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/customers`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const customers = await strapiRes.json();
    if (strapiRes.ok) {
      res.status(200).json({ customers });
    } else {
      res.status(403).json({ message: 'User forbidden!' });
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
};

export default handler;
