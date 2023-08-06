import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import { PageProps, PaginatedData } from "@/types";
import { TableHead } from "@/types/table";
import Pagination from "@/Components/Pagination";
import ButtonLink from "@/Components/ButtonLink";
import DangerButton from "@/Components/DangerButton";
import { Question } from "@/types/models";

export default function Index({
    auth,
    questions,
}: PageProps<{ questions: PaginatedData<Question> }>) {
    const tableHeads: TableHead[] = [
        { title: "S.N" },
        { title: "Title" },
        { title: "Description" },
        { title: "Status" },
    ];

    const { get } = useForm({});
    const { data, links } = questions;


    const handleStatus = (id: number) => {
        get(route("questions.status", id));
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Questions
                </h2>
            }
        >
            <Head title="Questions" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <div className="overflow-x-auto">
                        <section className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                          
                            <table className="table">
                                <thead>
                                    <tr>
                                        {tableHeads.map((head) => {
                                            return (
                                                <th key={head.title}>
                                                    {head.title}
                                                </th>
                                            );
                                        })}
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map((record: Question) => {
                                        return (
                                            <tr key={record.id}>
                                                <td>{record.id}</td>
                                                <td>{record.title}</td>
                                                <td>
                                                    {record.description.substring(
                                                        0,
                                                        75
                                                    )}
                                                </td>
                                                <td>
                                                    <button
                                                        onClick={() =>
                                                            handleStatus(
                                                                record.id
                                                            )
                                                        }
                                                    >
                                                        {record.is_active ? (
                                                            <div
                                                                className={
                                                                    "badge badge-primary"
                                                                }
                                                            >
                                                                Active
                                                            </div>
                                                        ) : (
                                                            <div
                                                                className={
                                                                    "badge badge-secondary"
                                                                }
                                                            >
                                                                Inactive
                                                            </div>
                                                        )}
                                                    </button>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                            <Pagination links={links} />
                        </section>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
