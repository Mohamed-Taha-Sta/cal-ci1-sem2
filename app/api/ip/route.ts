import {NextApiRequest, NextApiResponse} from 'next';
// @ts-ignore
import requestIp from 'request-ip'
import {NextRequest} from "next/server";

export const dynamic = 'force-dynamic';

export function GET(req: any & { url: string }) {
    // @ts-ignore
    const forwarded = req.headers["x-forwarded-for"]
    const ip = forwarded ? forwarded.split(/, /)[0] : req.socket.remoteAddress
    return {
        props: {
            ip,
        },
    }
}