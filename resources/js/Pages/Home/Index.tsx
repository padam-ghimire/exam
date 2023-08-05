import { Head, usePage } from "@inertiajs/react";
import { PageProps } from "@/types";
import { Exam } from "@/types/models";
import toast, { Toaster } from "react-hot-toast";
import { useEffect } from "react";

interface HomeProp extends PageProps {
    exams: Exam[];
}

export default function Home({ auth, exams }: HomeProp) {
   
    const { flash } = usePage().props;

    useEffect(() => {
        // @ts-ignore
        if (flash?.message) {
            // @ts-ignore
            toast(flash.message, {
                position: "top-right",
            });
        }
    }, []);
    return (
        <div>
            <Toaster />
            <Head title="Dashboard" />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    {exams.map((exam) => {
                        return (
                            <div key={exam.id} className="bg-white overflow-hidden shadow-sm sm:rounded-lg mb-5">
                                <div className="p-6 text-gray-900 ">
                                    <p className="text-bold underline">
                                        {exam.title}
                                    </p>
                                    <p>{exam.description}</p>
                                    <div className="flex gap-2">
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
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
