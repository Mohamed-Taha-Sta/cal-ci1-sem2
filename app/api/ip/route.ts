import {NextApiRequest, NextApiResponse} from 'next';
// @ts-ignore
import requestIp from 'request-ip'

export function GET(req: NextApiRequest) {
    let ip = requestIp.getClientIp(req)
    return new Response(JSON.stringify(ip), {status: 200})
}