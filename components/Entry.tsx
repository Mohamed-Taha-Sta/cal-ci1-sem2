"use client"

import {zodResolver} from "@hookform/resolvers/zod"
import {useForm} from "react-hook-form"
import {z} from "zod"
import FieldInput from "@/components/FieldInput";

import {Button} from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import {Input} from "@/components/ui/input"

type EntryProps = {
    subjectName: string;
    lab: boolean;
};

const FormSchema = z.object({
    username: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
})

export function Entry({subjectName, lab}: EntryProps) {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            username: "",
        },
    })

    return (
                <div className={"space-y-2 my-3 lg:w-1/4"}>
                    <label className={"ps-3"}>{subjectName}</label>
                    <div className={"space-y-2 px-3 lg:w-full "}>
                        <FieldInput SubjectName={subjectName} ExamType={"CC (DS)"}/>
                        {lab ? (<FieldInput SubjectName={subjectName}  ExamType={"Lab (TP)"}/>) : <></>}
                        <FieldInput SubjectName={subjectName}  ExamType={"Final Exam"}/>
                    </div>
                </div>
    )
}
