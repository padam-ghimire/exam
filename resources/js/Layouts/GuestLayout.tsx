import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link, usePage } from "@inertiajs/react";
import { PropsWithChildren,useEffect } from 'react';
import toast, { Toaster } from "react-hot-toast";

export default function Guest({ children }: PropsWithChildren) {
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
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
                       <Toaster />

            <div>
                <Link href="/">
                    <ApplicationLogo className="w-20 h-20 fill-current text-gray-500" />
                </Link>
            </div>

            <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
                {children}
            </div>
        </div>
    );
}
