import {NextApiRequest, NextApiResponse} from 'next';
// @ts-ignore
import requestIp from 'request-ip'

const getClientIp = (req: NextApiRequest): string => {
    return requestIp.getClientIp(req)
};

export function GET(req: NextApiRequest) {
    let ip = getClientIp(req)
    return new Response(JSON.stringify(ip), {status: 200})
}