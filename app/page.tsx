"use client";

import React from 'react';
import {Entry} from "@/components/Entry";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import {useForm} from "react-hook-form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";


const FormSchema = z.object({
    username: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
})

const Page = () => {

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            username: "",
        },
    })

    return (
        <div className="text-white absolute top-0 z-[-2] h-screen w-screen bg-black bg-[radial-gradient(#111131_1px,#01000D_1px)] bg-[size:20px_20px]">
            <div className={"z-50 w-full lg:w-3/5 lg:mx-auto lg:py-7 md:w-3/6 md:mx-auto md:py-7"}>
                <div className={"flex justify-between p-3"}>
                    <h1 className={"font-bold font-mono text-xl pt-0.5"}>Hello Engineers</h1>
                    <p className={"font-normal text-sm border-[1px] rounded-lg px-2 py-1"}>Remember
                        to sanity often!</p>
                </div>
                <main className={"my-3 lg:my-8"}>
                    <div className={"flex flex-row flex-wrap space-x-2"}>
                        <Form {...form}>
                            <form className="w-full lg:flex lg:flex-row lg:flex-wrap">
                                <Entry subjectName={"Machine Learning"} lab={true}/>
                                <Entry subjectName={"AI"} lab={true}/>
                                <Entry subjectName={"AI"} lab={false}/>
                                <Entry subjectName={"AI"} lab={false}/>
                                <Entry subjectName={"AI"} lab={false}/>
                            </form>
                        </Form>

                    </div>

                </main>
            </div>


        </div>
    )
        ;
};

export default Page;