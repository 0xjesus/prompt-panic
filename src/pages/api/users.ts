import type { NextApiRequest, NextApiResponse } from 'next';
import { getOrCreateUser, getUserStats, getUserBestScores } from '../../lib/db';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // POST - Create or get user
  if (req.method === 'POST') {
    try {
      const { username } = req.body;

      if (!username) {
        return res.status(400).json({ error: 'Username is required' });
      }

      const user = await getOrCreateUser(username);
      return res.status(200).json({ success: true, user });
    } catch (error) {
      console.error('User Error:', error);
      return res.status(500).json({ error: 'Failed to create/get user' });
    }
  }

  // GET - Get user stats
  if (req.method === 'GET') {
    try {
      const { username } = req.query;

      if (!username) {
        return res.status(400).json({ error: 'Username is required' });
      }

      const stats = await getUserStats(username as string);
      const bestScores = await getUserBestScores(username as string);

      return res.status(200).json({
        success: true,
        stats,
        bestScores
      });
    } catch (error) {
      console.error('Get User Stats Error:', error);
      return res.status(500).json({ error: 'Failed to get user stats' });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
