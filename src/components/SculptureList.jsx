import { useState } from "react";
import { sculptureList } from "../data/image.js";

export function SculptureList() {
    const [index, setIndex] = useState(0);


    function handleNext() {
        if (index == sculptureList.length - 1) {
            return setIndex(0);
        }
        setIndex(index + 1)
    }

    function handlePrevious() {

        if (index == 0) {
            return setIndex(sculptureList.length - 1);
        }
        setIndex(index - 1)
    }

    const sculpture = sculptureList[index];

    return (
        <div className="flex flex-col justify-center items-center w-[400px] gap-3 px-2 py-5 rounded-md">
            <h2 className="text-xl font-bold text-center">{sculpture.name} by <span className="text-slate-500">{sculpture.artist}</span></h2>
            <p className="text-[18x] font-semibold">({index + 1} of {sculptureList.length})</p>
            <img src={sculpture.url} alt={sculpture.alt} />
            <p className="px-5 py-3 pl-8">{sculpture.description}</p>
            <div className="flex gap-4">
                <button className="w-[100px] bg-black hover:bg-red-300 text-white font-bold px-5 py-2" onClick={handlePrevious}>Previous</button>
                <button className="w-[100px]  bg-black hover:bg-red-300 text-white font-bold px-5 py-2" onClick={handleNext}>Next</button>
            </div>
        </div>
    )
}