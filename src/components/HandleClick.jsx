import { useState } from "react";

export function Confirmation() {

    const [context, setContext] = useState('Tasdiqlanmagan');

    return (
        <div className="flex w-[400px] h-[130px] justify-center items-center p-3 rounded-md">
            <button className="bg-black hover:bg-red-300 cursor-pointer text-white font-bold px-5 py-2" disabled = { context == 'Tasdiqlanmagan' ? false : true } onClick={()=>setContext('Tasdiqlangan')}>{context}</button>
        </div>
    )
}