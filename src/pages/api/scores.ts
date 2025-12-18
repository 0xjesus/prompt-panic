import type { NextApiRequest, NextApiResponse } from 'next';
import { submitScore, getLeaderboard, getLeaderboardByCategory } from '../../lib/db';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // POST - Submit a new score
  if (req.method === 'POST') {
    try {
      const { username, categoryIndex, categoryName, score, maxCombo } = req.body;

      if (!username || categoryIndex === undefined || !categoryName || score === undefined) {
        return res.status(400).json({ error: 'Missing required fields' });
      }

      const result = await submitScore(username, categoryIndex, categoryName, score, maxCombo || 0);
      return res.status(200).json({ success: true, score: result });
    } catch (error) {
      console.error('Submit Score Error:', error);
      return res.status(500).json({ error: 'Failed to submit score' });
    }
  }

  // GET - Get leaderboard
  if (req.method === 'GET') {
    try {
      const { category, limit } = req.query;
      const limitNum = limit ? parseInt(limit as string, 10) : 10;

      let leaderboard;
      if (category !== undefined && category !== '-1' && category !== 'all') {
        leaderboard = await getLeaderboardByCategory(parseInt(category as string, 10), limitNum);
      } else {
        leaderboard = await getLeaderboard(limitNum);
      }

      return res.status(200).json({ success: true, leaderboard });
    } catch (error) {
      console.error('Get Leaderboard Error:', error);
      return res.status(500).json({ error: 'Failed to get leaderboard' });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
