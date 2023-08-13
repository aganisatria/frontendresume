import { HARDSKILLS } from "./const";
import Card from "@/util/Card";

const Skill = () => {
    return (
        <div className="bg-indigo-500 relative isolate px-10 py-14 lg:px-16">
            <h1 className="font-bold text-white text-center text-4xl">Hard Skill</h1>
            <div className="flex flex-wrap mt-5">
                {Object.entries(HARDSKILLS).map(([key, value]) => {
                    return (
                        <Card key={key} title={key} exp={value.work[0]} />
                    )
                })}
            </div>
        </div>
    )
}

export default Skill;