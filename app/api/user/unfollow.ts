import type { NextApiRequest, NextApiResponse } from 'next';
import { followUser } from '../../../lib/actions/user.actions';
import { handleError } from '../../../lib/utils'; // Assuming this is your error handling utility

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    try {
      const { userId, targetUserId } = req.body;
      await followUser(userId, targetUserId);
      res.status(200).json({ message: 'Followed successfully' });
    } catch (error) {
      const errorMessage = handleError(error); // Use your existing error handling logic
      res.status(500).json({ message: errorMessage });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
