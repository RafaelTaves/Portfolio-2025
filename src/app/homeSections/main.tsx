import { useTranslations } from "next-intl";
import AnimatedText from "../functions/animatedText";
import { FaInstagram, FaLinkedin, FaRegEnvelope, FaGithub } from "react-icons/fa";

export default function Main() {
    const t = useTranslations('HomePage');

    return (
        <div className="p-6 lg:px-16">
            <div className="flex flex-col lg:flex-row text-white justify-between mt-10 gap-y-4 lg-gap-y-0">
                <div className="flex flex-col justify-center gap-y-4">
                    <div className="flex flex-row ">
                        <p className="font-inter text-3xl lg:text-4xl">{t("home-hey")}</p>
                        <span
                            className="wave-hand text-3xl lg:text-4xl ms-3"
                            role="img"
                            aria-label="aceno"
                            style={{ display: "inline-block" }}
                        >
                            👋🏻
                        </span>
                    </div>
                    <div className="flex gap-x-2 lg:gap-x-4">
                        <p className="hidden lg:flex font-inter text-4xl">{t("home-im")}</p>
                        <p className="lg:hidden font-inter text-3xl">{t("mobile-home-im")}</p>
                        <p className="font-inter text-3xl lg:text-4xl text-light-blue font-semibold">RAFAEL TAVES</p>
                    </div>
                    {/* <div className="flex gap-x-6">
                        <a href="mailto:rafaeljosetaves@gmail.com" target="_blank" rel="noopener noreferrer">
                            <FaRegEnvelope className="text-white text-2xl hover:text-light-blue transition-colors" />
                        </a>
                        <a href="https://www.linkedin.com/in/rafaeltaves/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="text-white text-2xl hover:text-light-blue transition-colors" />
                        </a>
                        <a href="https://github.com/RafaelTaves" target="_blank" rel="noopener noreferrer">
                            <FaGithub className="text-white text-2xl hover:text-light-blue transition-colors" />
                        </a>
                        <a href="https://www.instagram.com/rafael.taves/" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className="text-white text-2xl hover:text-light-blue transition-colors" />
                        </a>
                    </div> */}
                    <AnimatedText />
                </div>
                <img src="../images/home-main.png" className="h-auto lg:h-96 w-auto" />
            </div>
        </div>
    )
}