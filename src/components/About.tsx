import Image from "next/image";
import Photo from "../../public/photo.jpeg"

const About = () => {
    return (
        <div className="bg-black relative isolate px-10 py-14 lg:px-16">
            <div className="grid grid-cols-3 gap-4">
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <Image className="rounded-t-lg" src={Photo} alt="" width={0} height={0}/>
                    </a>
                    <div className="p-5">
                        <h5 className="mb-2 text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Agani Satria (Gani)</h5>
                    </div>
                </div>
                <div className="col-span-2 flex flex-col justify-center">
                    <h2 className="text-white font-bold mb-8">Who is Gani</h2>
                    <p className="text-white">Gani is a Fresh Graduate of Informatics at Diponegoro University in 3.10 years with 3.76/4.00 GPA. He has
around 1,5 years working on software engineering in the various field in Indonesia such as ecommerce and education. Besides that, he just finished his thesis about computer vision to classify a traffic sign. As an entry level, He is open to various
opportunities and challenges in these fields.</p>
                </div>
            </div>
        </div>
    )
}

export default About;