import Image from "next/image";
import Photo from "../../public/photo.jpeg";
import Link from "next/link";
import BgImage from "../../public/bg-hero-cropped.jpg"

const Hero = () => {
    return (
    <div className="relative isolate px-6 pt-14 lg:px-8 overflow-hidden bg-cover bg-[url('/../../public/bg-hero.jpg')]">
        <Image className="z-0" src={BgImage} alt="" layout="fill" objectFit="cover" objectPosition="center" sizes="100vw"/>
        <div className="relative z-1 mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="text-center">
                <h3 className="mb-4 font-bold text-3xl leading-8 text-white bg-black bg-opacity-30 inline-block px-2 py-1.5 rounded-lg">AGANI SATRIA</h3>
                <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl bg-black bg-opacity-30 inline-block px-2 py-1.5 rounded-lg">The First Diamond that &apos;Ibu&apos; Bring to This Broken World</h2>
                <div className="mt-6">
                    <Link href="#" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Know Me Well</Link>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Hero;