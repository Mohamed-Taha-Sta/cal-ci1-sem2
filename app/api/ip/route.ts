import {NextApiRequest, NextApiResponse} from 'next';
// @ts-ignore
import requestIp from 'request-ip'
import {NextRequest} from "next/server";

export const dynamic = 'force-dynamic';
export function GET(req: NextRequest & { url: string }) {
    let ip = requestIp.getClientIp(req)
    return new Response(JSON.stringify(ip), {status: 200})
}