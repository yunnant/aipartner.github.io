import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // 返回验证码
  res.setHeader('Content-Type', 'text/html')
  res.status(200).send('34860741839281fdd4ace3645b29c02b')
} 