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
    form: any;
    subjectName: string;
    lab: boolean;
};


function calculateAverage(cc: number | null, lab: number | null, exam: number | null): number {
    if (cc === null || exam === null) {
        return NaN;
    }
    if (lab !== null) {
        return cc * 0.1 + lab * 0.2 + exam * 0.7;
    } else {
        return cc * 0.3 + exam * 0.7;
    }
}

export function Entry({form, subjectName, lab}: EntryProps) {

    // const FormSchema = z.object({
    //     [`${subjectName}CC (DS)`]: z.number().min(0, {
    //         message: "Value must be at least 0.",
    //     }).max(20, {
    //         message: "Value must be at most 20.",
    //     }),
    //     [`${subjectName}Lab (TP)`]: lab ? z.number().min(0, {
    //         message: "Value must be at least 0.",
    //     }).max(20, {
    //         message: "Value must be at most 20.",
    //     }) : z.null(),
    //     [`${subjectName}Final Exam`]: z.number().min(0, {
    //         message: "Value must be at least 0.",
    //     }).max(20, {
    //         message: "Value must be at most 20.",
    //     }),
    // })

    // const form = useForm<z.infer<typeof FormSchema>>({
    //     resolver: zodResolver(FormSchema),
    //     defaultValues: {
    //         [`${subjectName}CC (DS)`]: null,
    //         [`${subjectName}Lab (TP)`]: lab ? null : null,
    //         [`${subjectName}Final Exam`]: null,
    //     },
    // })

    const {watch} = form;
    const ccValue = watch(`${subjectName}CC (DS)`);
    const labValue = lab ? watch(`${subjectName}Lab (TP)`) : null;
    const examValue = watch(`${subjectName}Final Exam`);

    // console.log(form.getValues())
    // console.log(ccValue, labValue, examValue);

    const average = calculateAverage(ccValue, lab ? labValue : null, examValue);
    if (isNaN(average)) {
    } else {
        console.log(average);
        form.setValue(`Average${subjectName}`, average.toFixed(2));
    }

    return (
        <div className={"space-y-2 my-3 lg:w-1/4"}>
            <div className={"flex justify-between"}>
                <label className={"ps-3"}>{subjectName}</label>
                <label
                    className={"text-gray-400 text-sm pt-1 pe-3"}>{average || average ? average.toFixed(2) : ""}</label>
            </div>
            <div className={"space-y-2 px-3 lg:w-full "}>
                <FieldInput form={form} SubjectName={subjectName} ExamType={"CC (DS)"}/>
                {lab ? (<FieldInput form={form} SubjectName={subjectName} ExamType={"Lab (TP)"}/>) : <></>}
                <FieldInput form={form} SubjectName={subjectName} ExamType={"Final Exam"}/>
            </div>
        </div>
    )
}
