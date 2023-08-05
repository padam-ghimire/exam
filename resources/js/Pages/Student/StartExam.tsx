import { PageProps } from "@/types";
import { Exam, Student } from "@/types/models";
import { FC, useState } from "react";
import { Head } from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";
import ExamSection from "./Partials/ExamSection";

interface StartExamProps extends PageProps {
    exam: Exam;
    student: Student;
}

const StartExam: FC<StartExamProps> = ({ exam, student }) => {
    const [start, setStart] = useState(false);

    return (
        <div className="">
            <Head title="Exam" />
            {!start && (
                <div className="flex w-full min-h-screen justify-center items-center">
                    <div className="p-6 text-gray-900 bg-slate-300 rounded">
                        <p className="text-bold underline">{exam.title}</p>
                        <p>{exam.description}</p>
                        <div className="flex gap-2 mb-5">
                            <div className="badge badge-primary">
                                {exam.questions?.length} Questions
                            </div>
                            <div className="badge badge-primary">
                                Time : {exam.total_time} Min
                            </div>
                            <div className="badge badge-error">
                                Expires On : {exam.expires_on}
                            </div>
                        </div>
                        <PrimaryButton onClick={() => setStart(true)}>
                            Start Exam
                        </PrimaryButton>
                    </div>
                </div>
            )}
            {start && <ExamSection exam={exam} student={student} />}
        </div>
    );
};

export default StartExam;
