import Checkbox from "@/Components/Checkbox";
import PrimaryButton from "@/Components/PrimaryButton";
import { AnswerProps, Question, Exam, Student } from "@/types/models";
import { Head, useForm } from "@inertiajs/react";
import { FC, useEffect, useState } from "react";
import CountDown from "./CountDown";

interface ExamSectionProps {
    exam: Exam;
    student: Student;
}

interface StudentAnswer {
    question_id: number;
    answers?: (string | number)[];
}

const ExamSection: FC<ExamSectionProps> = ({ exam, student }) => {
    const [finished, setFinished] = useState<boolean>(false);
    const [disabled, setDisabled] = useState<boolean>(false);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState<Question | null>(
        null
    );

    const [studentAnswers, setStudentAnswers] = useState<StudentAnswer[]>([]);
    const [currentAnswer, setCurrentAnswer] = useState<StudentAnswer | null>(
        null
    );

    const { post, setData } = useForm({
        results: studentAnswers,
    });

    useEffect(() => {
        if (exam.questions) {
            setCurrentQuestion(exam.questions[currentQuestionIndex]);
        }
    }, [currentQuestionIndex]);

    useEffect(() => {
        if (currentQuestion) {
            setCurrentAnswer({
                question_id: currentQuestion.id,
                answers: [],
            });
        }
    }, [currentQuestion]);

    useEffect(() => {
        if (currentAnswer?.answers) {
            setDisabled(currentAnswer.answers.length === 0);
        }
    }, [currentAnswer]);

    useEffect(() => {
        setData("results", studentAnswers);
    }, [studentAnswers]);

    const handleAnswerChange = (id: number | undefined) => {
        if (!id || !currentQuestion || !currentAnswer) {
            return;
        }
        if (currentQuestion.isMultiple) {
            if (currentAnswer.answers?.includes(id)) {
                const updatedAnswer = currentAnswer.answers.filter(
                    (existingItem) => existingItem !== id
                );
                setCurrentAnswer({
                    ...currentAnswer,
                    answers: updatedAnswer,
                });
            } else {
                if (currentAnswer?.answers) {
                    const updatedAnswer = [...currentAnswer.answers, id];
                    setCurrentAnswer({
                        ...currentAnswer,
                        answers: updatedAnswer,
                    });
                }
            }
        } else {
            const updateAnswer = [id];
            setCurrentAnswer({
                ...currentAnswer,
                answers: updateAnswer,
            });
        }
    };

    const handleQuestionSubmit = () => {
        if (!exam.questions) {
            return;
        }

        if (currentQuestionIndex < (exam.questions.length -1)) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            if (currentAnswer) {
                setStudentAnswers([...studentAnswers, currentAnswer]);
            }
        } else {
            setFinished(true);
        }
    };

    const handleExamSubmit = () => {
        post(
            route("student.exam.submit", { exam: exam.id, student: student.id })
        );
    };

    return (
        <div>
            <Head title={exam.title} />
            <div className="p-10">
                <div className="w-full h-auto text-center mt-10">
                    <p className="text-bold underline">{exam.title}</p>
                    <p>{exam.description}</p>
                </div>
                <CountDown
                    total_time={exam.total_time}
                    handleExamSubmit={handleExamSubmit}
                />
                {currentQuestion && (
                    <div className="flex w-full h-2/3 flex-row mt-20 justify-between gap-5">
                        <div className="bg-slate-300 p-10 w-3/4">
                            <p className="text-2xl">
                                Q. {currentQuestion.title}
                            </p>
                            <p className="">{currentQuestion.description}</p>
                        </div>
                        <div className="bg-slate-300 p-10 w-2/4">
                            <p className="underline underline-offset-4">
                                Choose Right Answers{" "}
                                {currentQuestion.isMultiple
                                    ? "(Multiple Choice)"
                                    : "(Single Choice)"}
                            </p>
                            {currentQuestion.isMultiple && (
                                <p>Select all that apply.</p>
                            )}
                            {currentQuestion.answers?.map(
                                (answer: AnswerProps) => {
                                    if (answer.id) {
                                        return (
                                            <div className="block mt-4">
                                                <label className="flex items-center">
                                                    <Checkbox
                                                        name="remember"
                                                        checked={currentAnswer?.answers?.includes(
                                                            answer.id
                                                        )}
                                                        onChange={(e) => {
                                                            handleAnswerChange(
                                                                answer.id
                                                            );
                                                        }}
                                                    />
                                                    <span className="ml-2 text-sm text-gray-600">
                                                        {answer.option}
                                                    </span>
                                                </label>
                                            </div>
                                        );
                                    }
                                }
                            )}
                        </div>
                    </div>
                )}

                {!finished && (
                    <div className="flex flex-row-reverse mt-20">
                        <PrimaryButton
                            disabled={disabled}
                            onClick={() => handleQuestionSubmit()}
                        >
                            Next
                        </PrimaryButton>
                    </div>
                )}
                {finished && (
                    <div className="flex justify-center">
                        <PrimaryButton onClick={() => handleExamSubmit()}>
                            Submit
                        </PrimaryButton>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ExamSection;
