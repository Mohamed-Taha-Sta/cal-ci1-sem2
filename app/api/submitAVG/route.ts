import {NextApiRequest, NextApiResponse} from 'next';
import connectToDB from "@/utils/databse";
import User from "@/models/user";
// @ts-ignore
import requestIp from 'request-ip'


interface RequestWithBody extends NextApiRequest {
    body: {
        ip: string;
        avg: number;
    };
}

export const POST = async (req: any) => {
    try {
        await connectToDB();
        const ip = await fetch("/api/ip",{method: "GET"});
        const {avg} = await req.json();
        const user = await User.findOneAndUpdate(
            {ip},
            {$set: {avg: avg}},
            {new: true, upsert: true}
        );
        return new Response("Entry created", {status: 201})
    } catch (err) {
        console.log(err);
        return new Response("Failed to create new average entry", {status: 500});
    }
}