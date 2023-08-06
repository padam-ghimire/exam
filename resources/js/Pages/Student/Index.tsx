import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import { PageProps, PaginatedData } from "@/types";
import { TableHead } from "@/types/table";
import Pagination from "@/Components/Pagination";
import { Student } from "@/types/models";

export default function Index({
    auth,
    students,
}: PageProps<{ students: PaginatedData<Student> }>) {
    const tableHeads: TableHead[] = [
        { title: "S.N" },
        { title: "Name" },
        { title: "Email" },
        { title: "Subscription" },
    ];


    const { data, links } = students;
    const { get } = useForm({});

    const handleStatus = (id: number) => {
        get(route("students.subscription", id));
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Students
                </h2>
            }
        >
            <Head title="Students" />

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
                                    {data.map((record: Student) => {
                                        return (
                                            <tr key={record.id}>
                                                <td>{record.id}</td>
                                                <td>{record.name}</td>
                                                <td>{record.email}</td>
                                                <td>
                                                    <button  onClick={() =>
                                                            handleStatus(
                                                                record.id
                                                            )
                                                        }>
                                                        {record.subscribed ? (
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
