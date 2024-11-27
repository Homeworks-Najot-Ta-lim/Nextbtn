import { useState } from "react";

export function Counter() {
    const [count, setCount] = useState(0);
    const [step, setStep] = useState(1);

    return (
        <div className="flex flex-col w-[400px] items-center p-6 gap-4 rounded-md">
            <h2 className="text-3xl" >Simple Counter</h2>
            <p className="text-3xl font-bold">Count : {count}</p>

            <div className="flex gap-4">
                <button className="border-2 border-black rounded-lg px-5 py-2 text-center text-xl font-semibold" onClick={() => setCount(count - step)}>-</button>
                <button className="border-2 border-black rounded-lg px-5 py-2 text-center text-xl font-semibold" onClick={() => setCount(0)}>Reset</button>
                <button className="border-2 border-black rounded-lg px-5 py-2 text-center text-xl font-semibold" onClick={() => setCount(count + step)}>+</button>
            </div>
        </div>
    )
}