import React from 'react';
import {FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";

type FieldInputProps = {
    SubjectName: string;
    ExamType: string;
}

const FieldInput = ({SubjectName,ExamType}: FieldInputProps  ) => {
    return (
        <div>
            <FormField
                    name={SubjectName+ExamType}
                    render={({field}) => (
                        <FormItem>
                            <FormControl>
                                <Input className={"bg-zinc-900 dark:bg-white border-gray-700 border-2 active:border-2 active:outline-gray-600 "} placeholder={ExamType} {...field} />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
        </div>
    );
};

export default FieldInput;