import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import { SelectOption } from "@/Components/SelectOption";
import TextArea from "@/Components/TextArea";
import TextInput from "@/Components/TextInput";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { Section } from "@/types/models";
import { getDefaultDaysAfter } from "@/utils/date";
import { Transition } from "@headlessui/react";
import { Head, useForm } from "@inertiajs/react";
import { FormEventHandler } from "react";
import Select from "react-select";

interface CreateProps extends PageProps {
    sections: Section[];
}

interface InitialData extends Record<string, unknown> {
    title: string;
    description: string;
    expiry_date: string;
    total_time: number;
    sections: (string | number)[];
}

const Create = ({ auth, sections }: CreateProps) => {
    const initialData: InitialData = {
        title: "",
        description: "",
        expiry_date: getDefaultDaysAfter(7),
        total_time: 30,
        sections: [],
    };
    const { data, setData, post, errors, processing, recentlySuccessful } =
        useForm(initialData);
    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route("exams.store"));
    };

    const options = sections.map((section) => {
        const option = {
            value: section.id,
            label: section.title,
        };
        return option;
    });

    return (
        <Authenticated
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Sections
                </h2>
            }
        >
            <Head title="Create | Questions" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <div className="overflow-x-auto">
                        <section className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                            <form onSubmit={submit} className="mt-6 space-y-6">
                                <div>
                                    <Select
                                        defaultValue={[]}
                                        isMulti={true}
                                        name="colors"
                                        // @ts-ignore
                                        options={options}
                                        className="lg:w-1/2 w-full"
                                        classNamePrefix="select"
                                        // @ts-ignore
                                        onChange={(values: SelectOption[]) => {
                                            const sections = values.map(
                                                (value) => {
                                                    return value.value;
                                                }
                                            );
                                            setData("sections", sections);
                                        }}
                                    />
                                    <InputError
                                        className="mt-2"
                                        message={errors.sections}
                                    />
                                </div>
                                <div>
                                    <InputLabel htmlFor="title" value="Title" />

                                    <TextInput
                                        id="title"
                                        className="mt-1 block w-full"
                                        value={data.title}
                                        onChange={(e) =>
                                            setData("title", e.target.value)
                                        }
                                        required
                                        isFocused
                                        autoComplete="title"
                                    />

                                    <InputError
                                        className="mt-2"
                                        message={errors.title}
                                    />
                                </div>
                                <div>
                                    <InputLabel
                                        htmlFor="total_time"
                                        value="Total Time"
                                    />

                                    <TextInput
                                        type="number"
                                        id="total_time"
                                        className="mt-1 block w-full"
                                        value={data.total_time}
                                        onChange={(e) =>
                                            setData(
                                                "total_time",
                                                parseInt(e.target.value)
                                            )
                                        }
                                        required
                                        isFocused
                                        autoComplete="total_time"
                                    />

                                    <InputError
                                        className="mt-2"
                                        message={errors.title}
                                    />
                                </div>
                                <div>
                                    <InputLabel
                                        htmlFor="expiry_date"
                                        value="Total Time"
                                    />

                                    <TextInput
                                        type="date"
                                        id="expiry_date"
                                        className="mt-1 block w-full"
                                        value={data.expiry_date}
                                        onChange={(e) =>
                                            setData(
                                                "expiry_date",
                                                e.target.value
                                            )
                                        }
                                        required
                                        isFocused
                                        autoComplete="expiry_date"
                                    />

                                    <InputError
                                        className="mt-2"
                                        message={errors.title}
                                    />
                                </div>
                                <div>
                                    <InputLabel
                                        htmlFor="description"
                                        value="Description"
                                    />

                                    <TextArea
                                        id="description"
                                        className="mt-1 block w-full"
                                        value={data.description}
                                        onChange={(e) =>
                                            setData(
                                                "description",
                                                e.target.value
                                            )
                                        }
                                        required
                                    />

                                    <InputError
                                        className="mt-2"
                                        message={errors.description}
                                    />
                                </div>

                                <div className="flex items-center gap-4">
                                    <PrimaryButton disabled={processing}>
                                        Save
                                    </PrimaryButton>

                                    <Transition
                                        show={recentlySuccessful}
                                        enter="transition ease-in-out"
                                        enterFrom="opacity-0"
                                        leave="transition ease-in-out"
                                        leaveTo="opacity-0"
                                    >
                                        <p className="text-sm text-gray-600">
                                            Saved.
                                        </p>
                                    </Transition>
                                </div>
                            </form>
                        </section>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
};

export default Create;
