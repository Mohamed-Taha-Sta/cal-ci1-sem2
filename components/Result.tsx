import React from 'react';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

type FieldInputProps = {
    form: any;
    average: number;
}

const Result = ({form, average, func}: FieldInputProps & any) => {
    if (isNaN(average)) {
        return <></>
    }
    let feedback = "";
    if (average < 10) {
        feedback = "You can do better! Keep it up! :) 🙌"
    }
    if(average >= 10 && average<=11.99){
        feedback = "Nice! Hek nagezt :)"
    }
    if(average >= 12 && average<=13.99){
        feedback = "Better than most! Well done! 💪"
    }
    if(average >= 14 && average<=16.99){
        feedback = "Great job! Keep it up! 🫡"
    }
    if(average >= 17){
        feedback = "Fares yezi blé le3b.🤡️"
    }
    const values = form.getValues();
    const areFieldsEmpty = Object.values(values).some(value => value === undefined);
    return (
        <div >
            <AlertDialog>
                <AlertDialogTrigger disabled={areFieldsEmpty} className="disabled:bg-gray-900 disabled:hover:bg-gray-900 px-4 py-3 rounded-lg transition-all bg-blue-950 text-primary-foreground hover:bg-primary" onClick={func}>Calculate</AlertDialogTrigger>
                <AlertDialogContent className={"bg-zinc-900 text-white border-2 rounded-lg border-neutral-700"}>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Annnnnnnnnd moyennek is: {average.toFixed(2)}</AlertDialogTitle>
                        <AlertDialogDescription className={"text-white"}>
                            {feedback}
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogAction className={"bg-black hover:bg-zinc-800"}>Okay</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>

        </div>
    );
};

export default Result;