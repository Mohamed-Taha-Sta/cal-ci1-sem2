"use client";

import React, {useState} from 'react';
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