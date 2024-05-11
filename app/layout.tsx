import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import Credit from "@/components/Credit";
import React from "react";
import Navbar from "@/components/Navbar";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Ehseb Moyennek",
    description: "Little project to calculate your average. (FSB based. CI-1 Sem-2)",
};

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <div
            className="text-white absolute top-0 z-[-2] min-h-screen w-screen bg-slate-950 ">
            <div className={"absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_80%_at_50%_0%,#000_70%,transparent_100%)]"}/>
            <div className={"z-30 w-full lg:w-3/5 lg:mx-auto lg:py-7 md:w-3/6 md:mx-auto md:py-7  relative"}>
                <Navbar/>
                {children}
                <Credit/>
            </div>
        </div>
        </body>
        </html>
    );
}
