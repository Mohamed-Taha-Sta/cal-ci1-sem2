"use client";

import React, {useState} from 'react';
import {Entry} from "@/components/Entry";
import {Form} from "@/components/ui/form"
import {Button} from "@/components/ui/button"
import {useForm} from "react-hook-form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import Result from "@/components/Result";
import Credit from "@/components/Credit";
import Calculate from "@/components/Calculate";


const Page = () => {

    return (
        <div>
            <main className={"my-3 lg:my-14"}>
                <Calculate/>
            </main>
        </div>
    );
};

export default Page;