import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import { PageProps, PaginatedData } from "@/types";
import { TableHead } from "@/types/table";
import Pagination from "@/Components/Pagination";
import ButtonLink from "@/Components/ButtonLink";
import DangerButton from "@/Components/DangerButton";
import { Section } from "@/types/models";

export default function Index({
    auth,
    sections,
}: PageProps<{ sections: PaginatedData<Section> }>) {
    const tableHeads: TableHead[] = [
        { title: "S.N" },
        { title: "Title" },
        { title: "Description" },
        { title: "Status" },
        { title: "Actions" },
    ];

    const { delete: destroy, get } = useForm({});
    const { data, links } = sections;

    const handleDelete = (id: number) => {
        destroy(route("sections.destroy", id));
    };

    const handleStatus = (id: number) => {
        get(route("sections.status", id));
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Sections
                </h2>
            }
        >
            <Head title="Sections" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <div className="overflow-x-auto">
                        <section className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                            <ButtonLink
                                href={route("sections.create")}
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
                                    {data.map((record: Section) => {
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
                                                <td className="flex gap-1">
                                                    <ButtonLink
                                                        className={""}
                                                        href={route(
                                                            "sections.edit",
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
