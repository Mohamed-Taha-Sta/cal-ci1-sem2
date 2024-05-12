import React from 'react';
import {useController} from 'react-hook-form';
import {FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";

type FieldInputProps = {
    form: any;
    SubjectName: string;
    ExamType: string;
}

const FieldInput = ({form,SubjectName,ExamType}: FieldInputProps  ) => {
    const {field} = useController({
        name: `${SubjectName}${ExamType}`,
        control: form.control,
    });

    return (
        <div>
            <FormField
                name={`${SubjectName}${ExamType}`}
                render={() => (
                    <FormItem>
                        <FormControl>
                            <Input min={0} max={20} type="number" className={"[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none bg-zinc-900 dark:bg-white border-[#333333] border-[2px] placeholder-neutral-400 placeholder-opacity-70"} placeholder={ExamType} {...field} />
                        </FormControl>
                        <FormMessage/>
                    </FormItem>
                )}
            />
        </div>
    );
};

export default FieldInput;