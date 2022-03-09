// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import example from '../example.json'

import { DocumentationType } from '../documentation'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<DocumentationType>
) {
  res.status(200).json(example as DocumentationType)
}
