import { Link } from "@inertiajs/react";

export interface ButtonLinkProps {
    href: string;
    className: string | null;
    children: React.ReactNode;
}

export default function ButtonLink({
    href,
    className = "",
    children,
}: ButtonLinkProps) {
    return (
        <Link
            href={href}
            className={
                `inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest` +
                className
            }
        >
            {children}
        </Link>
    );
}
