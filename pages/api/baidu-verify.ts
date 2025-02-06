import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // 返回验证码
  res.setHeader('Content-Type', 'text/html')
  res.status(200).send('a752a595e57caaf85c705c8cba2890fb')
} 