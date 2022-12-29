/**
 * Example of API Route, which can be deployed as Lambda
 * @param req
 * @param res
 */
export default function handler(req, res) {
  res.status(200).json({ text: 'Hello' });
}
