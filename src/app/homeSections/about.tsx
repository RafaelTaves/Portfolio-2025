import { useTranslations } from "next-intl"

export default function About () {
    const t = useTranslations('HomePage')
    return(
        <div className="p-6 lg:px-16">
            <div className="">
                <div className="flex flex-row gap-x-2">
                    <p className="font-poppins text-3xl lg:text-4xl text-white">{t('about-title1')}</p>
                    <p className="font-poppins text-3xl lg:text-4xl text-light-blue">RAFAEL?</p>
                </div>
                <div className="lg:flex lg:flex-row lg:justify-between">
                    <div className="mt-5 lg:flex lg:flex-col lg:w-1/2">
                        <h3 className="text-xl lg:text-2xl text-white">{t("about-descriptionTitle")}</h3>
                        <p className="mt-3 text-lg lg:text-xl text-white">{t("about-descriptionP1")}</p>
                        <p className="mt-3 text-lg lg:text-xl text-white">{t("about-descriptionP2")}</p>
                    </div>
                    <div className="lg:mt-5 lg:w-1/2 lg:relative">
                        <img src="../images/rafaelPhoto.png" className="mt-8 w-3/4 mx-auto lg:mt-0 lg:w-2/4 lg:mx-0 lg:absolute lg:top-0 lg:right-0 lg:mr-16"/>
                    </div>
                </div>
            </div>
        </div>
    )
}