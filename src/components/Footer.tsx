import Image from "next/image";
import LogoImage from "../../public/logo-no-background.png"
import { BsFillEnvelopeFill, BsWhatsapp, BsLine, BsInstagram, BsLinkedin, BsYoutube, BsGithub, BsJournalText, BsLaptopFill } from "react-icons/bs";
import { footerStyles } from "./style";

const Footer = () => {
    return(
        <footer className="bg-black">
            <div className={footerStyles.footer}>
                <div className={footerStyles.company_logo}>
                    <Image src={LogoImage} alt="bottom logo"/>
                </div>
                <div className={footerStyles.work}>
                    <h2 className={footerStyles.work_title}>Reach me for work</h2>
                    <div className={footerStyles.list_logo}>
                        <a href='mailto:aganisatria1@gmail.com'>
                            <BsFillEnvelopeFill size={30} className={footerStyles.logo}/>
                        </a>
                        <a href='https://line.me/ti/p/DJ77rbyZ4a'>
                            <BsWhatsapp size={25} className={footerStyles.logo}/>
                        </a>
                        <a href="https://line.me/ti/p/DJ77rbyZ4a">
                            <BsLine size={25} className={footerStyles.logo} />
                        </a>
                    </div>
                </div>
                <div className={footerStyles.work}>
                    <h2 className={footerStyles.work_title}>Discover my work <br />and interest</h2>
                    <div className={footerStyles.list_logo}>
                        <a href='https://www.instagram.com/aganisatria'>
                            <BsInstagram size={25} className={footerStyles.logo}/>
                        </a>
                        <a href='https://www.linkedin.com/in/agani-satria'>
                            <BsLinkedin size={25} className={footerStyles.logo}/>
                        </a>
                        <a href="https://www.youtube.com/@aganisatria784">
                            <BsYoutube size={25} className={footerStyles.logo} />
                        </a>
                        <a href="https://github.com/aganisatria">
                            <BsGithub size={25} className={footerStyles.logo} />
                        </a>
                    </div>
                </div>
                <div className={footerStyles.work}>
                    <h2 className={footerStyles.work_title}>Seeking advice, <br/>It&apos;s Anonymous!</h2>
                    <div className={footerStyles.list_logo}>
                        <a href='mailto:aganisatria1@gmail.com'>
                            <BsJournalText size={30} className={footerStyles.logo}/>
                        </a>
                    </div>
                </div>
            </div>
            <div>
                <h2 className="mx-3">&copy; 2023 Agani Satria. All rights reserved. Indonesia</h2>
            </div>
        </footer>
    )
}

export default Footer;  