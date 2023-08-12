import { LIST_EXPERIENCE } from "./const";

const Experience = () => {
    return (
        <div className="bg-black relative isolate px-10 py-14 lg:px-16">
            <h1 className="font-bold text-white text-center text-4xl">Software Engineering</h1>
            <div className="grid grid-cols-3 mt-16">
                {Object.keys(LIST_EXPERIENCE).map((key) => {
                    return <div className="bg-indigo-600" key={key}>
                        <h3>{key}</h3>
                        <p>{LIST_EXPERIENCE.get(key)}</p>
                    </div>
                })}
                <div className="col-span-2">
                    <div className="p-4 bg-opacity-50">
                        <p className="text-white">
                        Tech Stack: Go, PostgreSQL, GRPC, NSQ, Redis, GraphQL, REST API, React.js, Git, HTML, CSS, Fabric.js.
Develop voting management feature that shows in Tokopedia Seru for FIFA World Cup, so user can get multiple coupon and other.
benefits from there.
Develop a new benefit type to provide user a different unique benefits.
Develop many feature to reduce working hour such as provide user to input multiple feature in one time, and image generator that let
user only input several field to create image only for one click.
Help tokopedia plus to develop a new onboarding partner (Ruangguru).
Complete couple of hygiene task to optimize the code and cost optimization.
Create documentation (such as TRD, Tech plan, Feature Explanation), Develop code, and create Unit Test for 7 different repositories.
Align with WPE, QA, PM, and business team when working on development task to achieve the goals.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience;