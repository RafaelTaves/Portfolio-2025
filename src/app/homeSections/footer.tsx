import { useTranslations } from "next-intl";
import { FaInstagram, FaLinkedin, FaRegEnvelope, FaGithub } from "react-icons/fa";
export default function Footer() {
    const t = useTranslations('HomePage');

    return (
        <div className="py-3 px-6 lg:px-16 flex justify-between lg:max-w-7xl lg:mx-auto">
            <div className="">
                <p className="font-inter text-xs lg:text-md text-white">Designed and Developed by Rafael Taves</p>
            </div>
            <div className="flex gap-x-2 lg:gap-x-6">
                <a href="mailto:rafaeljosetaves@gmail.com" target="_blank" rel="noopener noreferrer">
                    <FaRegEnvelope className="text-white text-md lg:text-2xl hover:text-light-blue transition-colors" />
                </a>
                <a href="https://www.linkedin.com/in/rafaeltaves/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="text-white text-md lg:text-2xl hover:text-light-blue transition-colors" />
                </a>
                <a href="https://github.com/RafaelTaves" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="text-white text-md lg:text-2xl hover:text-light-blue transition-colors" />
                </a>
                <a href="https://www.instagram.com/rafael.taves/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="text-white text-md lg:text-2xl hover:text-light-blue transition-colors" />
                </a>
            </div>
        </div>
    );
}
