import {
    SelectHTMLAttributes,
    forwardRef,
    useEffect,
    useImperativeHandle,
    useRef,
} from "react";

export type SelectOption = {
    value: string | number;
    label: string;
};

interface SelectProps {
    label: string;
    options: SelectOption[];
    isFocused?: boolean;
    selected: string;
    multiple?: boolean;
}

export default forwardRef(function Select(
    {
        label,
        options,
        isFocused = false,
        selected,
        ...props
    }: SelectHTMLAttributes<HTMLSelectElement> & SelectProps,
    ref
) {
    const localRef = useRef<HTMLSelectElement>(null);

    useImperativeHandle(ref, () => ({
        focus: () => localRef.current?.focus(),
    }));

    useEffect(() => {
        if (isFocused) {
            localRef.current?.focus();
        }
    }, []);

    return (
        <div className="form-control w-full">
            <label className="label">
                <span className="label-text">{label}</span>
            </label>
            <select className="select select-bordered" {...props}>
                <option disabled selected={selected === "" ? true : false}>
                    {label}
                </option>
                {options.map((option) => {
                    return (
                        <option
                            selected={selected === option.value ? true : false}
                            key={option.value}
                            value={option.value}
                        >
                            {option.label}
                        </option>
                    );
                })}
            </select>
        </div>
    );
});
