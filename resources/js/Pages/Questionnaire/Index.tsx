import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import { PageProps, PaginatedData } from "@/types";
import { TableHead } from "@/types/table";
import Pagination from "@/Components/Pagination";
import ButtonLink from "@/Components/ButtonLink";
import DangerButton from "@/Components/DangerButton";
import { Exam } from "@/types/models";

export default function Index({
    auth,
    exames,
}: PageProps<{ exames: PaginatedData<Exam> }>) {
    const tableHeads: TableHead[] = [
        { title: "S.N" },
        { title: "Title" },
        { title: "Description" },
        { title: "Expires On" },
        { title: "Actions" },
    ];

    const { delete: destroy, get } = useForm({});
    const { data, links } = exames;

    const handleDelete = (id: number) => {
        destroy(route("quizzes.destroy", id));
    };

    const handleStatus = (id: number) => {
        get(route("quizzes.status", id));
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Quizzes
                </h2>
            }
        >
            <Head title="Quizzes" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <div className="overflow-x-auto">
                        <section className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                            <ButtonLink
                                href={route("quizzes.create")}
                                className={""}
                            >
                                Add New
                            </ButtonLink>
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
                                    {data.map((record: Exam) => {
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
                                                <td>{record.expires_on}</td>
                                                <td className="flex gap-1">
                                                    <ButtonLink
                                                        className={""}
                                                        href={route(
                                                            "quizzes.edit",
                                                            record.id
                                                        )}
                                                    >
                                                        Edit
                                                    </ButtonLink>
                                                    <DangerButton
                                                        onClick={() =>
                                                            handleDelete(
                                                                record.id
                                                            )
                                                        }
                                                    >
                                                        Delete
                                                    </DangerButton>
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
