import type { NextApiRequest, NextApiResponse } from 'next';
import { initDB } from '../../lib/db';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    await initDB();
    res.status(200).json({ success: true, message: 'Database initialized' });
  } catch (error) {
    console.error('DB Init Error:', error);
    res.status(500).json({ error: 'Failed to initialize database' });
  }
}
