"use client"

import { useState } from "react";
import { LIST_EXPERIENCE } from "./const";

const Experience = () => {
    const initialExperience = Object.keys(LIST_EXPERIENCE)[0]
    const [experience, setExperience] = useState(initialExperience)

    const handleChangeExperience = (exp: string) => {
        setExperience(exp)
    }

    return (
        <div className="bg-black relative isolate px-10 py-14 lg:px-16">
            <h1 className="font-bold text-white text-center text-4xl">Software Engineering</h1>
            <div className="grid grid-cols-3 gap-4 mt-16">
                <div>
                    {Object.keys(LIST_EXPERIENCE).map((key) => {
                        return (
                        <div className={`bg-indigo-600 my-4 cursor-pointer rounded-lg w-4/5 text-center ${experience == key ? 'bg-indigo-400' : ''}`} key={key} onClick={() => handleChangeExperience(key)}>
                            <h3 className="text-white">{key}</h3>
                        </div>)
                    })}
                </div>
                <div className="col-span-2">
                    <div className="p-4 bg-opacity-50">
                        <p className="text-white">
                            {LIST_EXPERIENCE[experience]}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience;