import React, {useState} from 'react';
import {Form} from "@/components/ui/form";
import {Entry} from "@/components/Entry";
import Result from "@/components/Result";
import {useForm} from "react-hook-form";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";

const FormSchema = z.object({
    "OptimisationCC (DS)": z.number().min(0).max(20),
    "OptimisationLab (TP)": z.number().min(0).max(20),
    "OptimisationFinal Exam": z.number().min(0).max(20),
    "AverageOptimisation": z.number().min(0).max(20),
    "LinuxCC (DS)": z.number().min(0).max(20),
    "LinuxLab (TP)": z.number().min(0).max(20),
    "LinuxFinal Exam": z.number().min(0).max(20),
    "AverageLinux": z.number().min(0).max(20),
    "VirtualisationCC (DS)": z.number().min(0).max(20),
    "VirtualisationLab (TP)": z.number().min(0).max(20),
    "VirtualisationFinal Exam": z.number().min(0).max(20),
    "AverageVirtualisation": z.number().min(0).max(20),
    "Web ServicesCC (DS)": z.number().min(0).max(20),
    "Web ServicesLab (TP)": z.number().min(0).max(20),
    "Web ServicesFinal Exam": z.number().min(0).max(20),
    "AverageWeb Services": z.number().min(0).max(20),
    "JEECC (DS)": z.number().min(0).max(20),
    "JEELab (TP)": z.number().min(0).max(20),
    "JEEFinal Exam": z.number().min(0).max(20),
    "AverageJEE": z.number().min(0).max(20),
    "SEDCC (DS)": z.number().min(0).max(20),
    "SEDFinal Exam": z.number().min(0).max(20),
    "AverageSED": z.number().min(0).max(20),
    "PrologueCC (DS)": z.number().min(0).max(20),
    "PrologueFinal Exam": z.number().min(0).max(20),
    "AveragePrologue": z.number().min(0).max(20),
    "AICC (DS)": z.number().min(0).max(20),
    "AIFinal Exam": z.number().min(0).max(20),
    "AverageAI": z.number().min(0).max(20),
    "SemanticsCC (DS)": z.number().min(0).max(20),
    "SemanticsFinal Exam": z.number().min(0).max(20),
    "AverageSemantics": z.number().min(0).max(20),
    "MiddlewareCC (DS)": z.number().min(0).max(20),
    "MiddlewareFinal Exam": z.number().min(0).max(20),
    "AverageMiddleware": z.number().min(0).max(20),
    "EnglishCC (DS)": z.number().min(0).max(20),
    "EnglishFinal Exam": z.number().min(0).max(20),
    "AverageEnglish": z.number().min(0).max(20),
    "DroitCC (DS)": z.number().min(0).max(20),
    "DroitFinal Exam": z.number().min(0).max(20),
    "AverageDroit": z.number().min(0).max(20),
})

const Calculate = () => {

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            "OptimisationCC (DS)": undefined,
            "OptimisationLab (TP)": undefined,
            "OptimisationFinal Exam": undefined,
            "AverageOptimisation": undefined,
            "LinuxCC (DS)": undefined,
            "LinuxLab (TP)": undefined,
            "LinuxFinal Exam": undefined,
            "AverageLinux": undefined,
            "VirtualisationCC (DS)": undefined,
            "VirtualisationLab (TP)": undefined,
            "VirtualisationFinal Exam": undefined,
            "AverageVirtualisation": undefined,
            "Web ServicesCC (DS)": undefined,
            "Web ServicesLab (TP)": undefined,
            "Web ServicesFinal Exam": undefined,
            "AverageWeb Services": undefined,
            "JEECC (DS)": undefined,
            "JEELab (TP)": undefined,
            "JEEFinal Exam": undefined,
            "AverageJEE": undefined,
            "SEDCC (DS)": undefined,
            "SEDFinal Exam": undefined,
            "AverageSED": undefined,
            "PrologueCC (DS)": undefined,
            "PrologueFinal Exam": undefined,
            "AveragePrologue": undefined,
            "AICC (DS)": undefined,
            "AIFinal Exam": undefined,
            "AverageAI": undefined,
            "SemanticsCC (DS)": undefined,
            "SemanticsFinal Exam": undefined,
            "AverageSemantics": undefined,
            "MiddlewareCC (DS)": undefined,
            "MiddlewareFinal Exam": undefined,
            "AverageMiddleware": undefined,
            "EnglishCC (DS)": undefined,
            "EnglishFinal Exam": undefined,
            "AverageEnglish": undefined,
            "DroitCC (DS)": undefined,
            "DroitFinal Exam": undefined,
            "AverageDroit": undefined,
        },
    })


    type SubjectName =
        "Optimisation"
        | "SED"
        | "Test"
        | "Prologue"
        | "Linux"
        | "Semantics"
        | "Middleware"
        | "Virtualisation"
        | "AI"
        | "Web Services"
        | "JEE"
        | "English"
        | "Droit";

    const coefficients: Record<SubjectName, number> = {
        "Optimisation": 1,
        "SED": 1,
        "Test": 1.5,
        "Prologue": 1,
        "Linux": 1,
        "Semantics": 1,
        "Middleware": 1.5,
        "Virtualisation": 1,
        "AI": 1.5,
        "Web Services": 1.5,
        "JEE": 1,
        "English": 1,
        "Droit": 1
    };
    const [result, setResult] = useState<number>(0);
    const [showDialog, setShowDialog] = useState(false);
    let overallAverage = 0;

    async function calculate() {
        const values: {
            [key: string]: number | undefined
        } = form.getValues();
        let sum = 0;
        let totalCoefficient = 0;

        for (const key in values) {
            if (key.startsWith("Average")) {
                let value: number | undefined = Math.min(values[key] as number, 20);
                value = Math.max(values[key] as number, 0)
                if (values[key] === null || values[key] === 0 ) {
                    value = 0;
                }
                if (value !== null && !isNaN(value as number)) {
                    const subjectName: SubjectName = key.slice(7) as SubjectName;
                    sum += Number(value) * coefficients[subjectName];
                    totalCoefficient += coefficients[subjectName];
                }

            }
        }
        overallAverage = sum / totalCoefficient;
        setResult(overallAverage);
        const response = await fetch('/api/submitAVG',
            {
                method: "POST",
                body: JSON.stringify({
                    avg: overallAverage,
                })
            });
        setShowDialog(true);
    }


    function closeDialog() {
        setShowDialog(false);
    }


    return (
        <div className={"flex flex-row flex-wrap space-x-2 "}>
            <Form {...form}>
                <form className="w-full lg:flex lg:flex-row lg:flex-wrap ">
                    <Entry form={form} subjectName={"Optimisation"} lab={true}/>
                    <Entry form={form} subjectName={"Linux"} lab={true}/>
                    <Entry form={form} subjectName={"Virtualisation"} lab={true}/>
                    <Entry form={form} subjectName={"Web Services"} lab={true}/>
                    <Entry form={form} subjectName={"JEE"} lab={true}/>
                    <Entry form={form} subjectName={"Test"} lab={true}/>
                    <Entry form={form} subjectName={"SED"} lab={false}/>
                    <Entry form={form} subjectName={"Prologue"} lab={false}/>
                    <Entry form={form} subjectName={"AI"} lab={false}/>
                    <Entry form={form} subjectName={"Semantics"} lab={false}/>
                    <Entry form={form} subjectName={"Middleware"} lab={false}/>
                    <Entry form={form} subjectName={"English"} lab={false}/>
                    <Entry form={form} subjectName={"Droit"} lab={false}/>
                </form>
                <div className={"flex center w-full justify-center py-6"}>
                    <Result form={form} average={result} func={calculate}/>
                </div>
            </Form>
        </div>
    );
};

export default Calculate;