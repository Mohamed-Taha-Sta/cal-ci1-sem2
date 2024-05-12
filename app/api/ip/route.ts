import {NextApiRequest, NextApiResponse} from 'next';
// @ts-ignore
import requestIp from 'request-ip'
import {NextRequest} from "next/server";

export const dynamic = 'force-dynamic';
export function GET(req: NextRequest & { url: string }) {
    const ip = (req.headers.get('x-forwarded-for') ?? '127.0.0.1').split(',')[0]
    return new Response(JSON.stringify(ip), {status: 200})
}