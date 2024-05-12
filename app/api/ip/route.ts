import type {NextRequest} from "next/server";

export const dynamic = 'force-dynamic';
export function GET(req: NextRequest) {
    // @ts-ignore
    const ip = req.ip
    return {
        props: {
            ip,
        },
    }
}