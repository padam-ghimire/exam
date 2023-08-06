import { FC, useEffect, useState } from "react";

interface CountDownProps {
    total_time: number;
    handleExamSubmit: () => void;
}

const CountDown: FC<CountDownProps> = ({ total_time, handleExamSubmit }) => {
    const [minutes, setMinutes] = useState(total_time);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            } else {
                if (minutes > 0) {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                } else {
                    clearInterval(interval);
                    handleExamSubmit();
                }
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [minutes, seconds]);

    return (
        <div className="flex justify-center flex-col items-center gap-4  mt-10">
            <p>Time Remaining</p>
            <div className="flex gap-5">
                <div>
                    <span className="countdown font-mono text-4xl">

                         {/* @ts-ignore */}
                        <span style={{ "--value": minutes }}></span>
                    </span>
                    min
                </div>
                <div>
                    <span className="countdown font-mono text-4xl">
                         {/* @ts-ignore */}
                        <span style={{ "--value": seconds }}></span>
                    </span>
                    sec
                </div>
            </div>
        </div>
    );
};

export default CountDown;
