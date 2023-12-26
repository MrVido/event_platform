import type { NextApiRequest, NextApiResponse } from 'next';
import { createGroup } from '../../../lib/actions/group.actions';
import { handleError } from '@/lib/utils';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    try {
      const groupData = req.body;
      const newGroup = await createGroup(groupData);
      res.status(200).json(newGroup);
    } catch (error) {
        const errorMessage = handleError(error); // Use your existing error handling logic
        res.status(500).json({ message: errorMessage });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
