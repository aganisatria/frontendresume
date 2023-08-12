"use client"

import Link from "next/link";
import LogoImage from "../../public/logo-no-background.png";
import Image from "next/image";
import {BsGithub, BsInstagram, BsLine, BsLinkedin, BsList, BsWhatsapp, BsX} from "react-icons/bs";
import { useState } from "react";
import { headerStyles } from "./style";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    return(
        <header>
            <nav className={headerStyles.nav}>
                <div className={headerStyles.fullview}>
                    <Link className={headerStyles.logo} href="/">
                        <Image src={LogoImage} alt="" width={205} height={75} className="cursor-pointer"/>
                    </Link>
                    <div className={headerStyles.mainnav}>
                        <ul className={headerStyles.mainnav_ul}>
                            <li className={headerStyles.mainnav_li}>
                                <Link href="/about">
                                    About
                                </Link>
                            </li>
                            <li className={headerStyles.mainnav_li}>
                                <Link href="/contact">
                                    Contact
                                </Link>
                            </li>
                            <li className={headerStyles.mainnav_li}>
                                <Link href="/suggestion">
                                    Suggestion
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className={headerStyles.util}>
                        <h3 className={headerStyles.sign_in}>
                            Sign In
                        </h3>
                    </div>
                    {/* Mobile Menu */}
                    <div onClick={toggleMenu} className={headerStyles.mobile_view}>
                            <BsList className={headerStyles.mobile_max_mainnav} />
                    </div>
                </div>
                <div className={isMenuOpen ? headerStyles.mobile_menu_open : headerStyles.mobile_menu_close}>
                    <div className={headerStyles.mobile_div_logo_open_menu}>
                        <div onClick={toggleMenu} className={headerStyles.important}>
                            <BsX className={headerStyles.mobile_logo_open_menu} />
                        </div>
                    </div>
                    {/* Mobile Menu Links */}
                    <div className={headerStyles.mobile_mainnav}>
                        <ul>
                            <li onClick={() => setIsMenuOpen(false)} className={headerStyles.mobile_mainnav_li}>
                                <Link href="/about">
                                    About
                                </Link>
                            </li>
                            <li onClick={() => setIsMenuOpen(false)} className={headerStyles.mobile_mainnav_li}>
                                <Link href="/contact">
                                    Contact
                                </Link>
                            </li>
                            <li onClick={() => setIsMenuOpen(false)} className={headerStyles.mobile_mainnav_li}>
                                <Link href="/suggestion">
                                    Suggestion
                                </Link>
                            </li>
                            <li className={headerStyles.mobile_util}>
                                <p className={headerStyles.mobile_log_in}>
                                    Sign In
                                </p>
                            </li>
                        </ul>
                    </div>
                    {/* Social Media Links */}
                    <div className={headerStyles.mobile_socmed}>
                        <Link href="https://www.github.com/aganisatria">
                            <BsGithub size={30} className={headerStyles.mobile_socmed_logo} />
                        </Link>
                        <Link href="https://www.instagram.com/aganisatria">
                            <BsInstagram size={30} className={headerStyles.mobile_socmed_logo} />
                        </Link>
                        <Link href="https://www.linkedin.com/in/agani-satria">
                            <BsLinkedin size={30} className={headerStyles.mobile_socmed_logo} />
                        </Link>
                        <Link href="https://line.me/ti/p/DJ77rbyZ4a">
                            <BsLine size={30} className={headerStyles.mobile_socmed_logo} />
                        </Link>
                        <Link href="https://wa.me/6282364172021">
                            <BsWhatsapp size={30} className={headerStyles.mobile_socmed_logo} />
                        </Link>
                    </div>
                    <Image src={LogoImage} alt="" width={205} height={75} className={headerStyles.mobile_logo} />
                </div>
            </nav>
        </header>
    )
}

export default Header;