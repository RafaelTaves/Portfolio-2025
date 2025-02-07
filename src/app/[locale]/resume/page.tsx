import ButtonDownloadCV from "@/app/functions/buttonDownloadCV";
import Footer from "@/app/homeSections/footer";
import Header from "@/app/homeSections/header";


export default function Resume() {

    return (
        <>
            <div className="h-full w-full lg:max-w-7xl lg:mx-auto">
                <div id="header" className="w-full">
                    <Header />
                </div>
                <div className="p-6 lg:px-16 w-full lg:mt-24 lg:py-0">
                    <div className="w-full flex flex-col justify-center items-center">
                        <ButtonDownloadCV marginTop="" />
                        <img src="../images/RafaelTavesCVBR.jpg" className="mt-6" />
                        <ButtonDownloadCV marginTop="mt-6" />
                    </div>
                </div>
            </div>
            <div id="footer" className="w-full mt-24 lg:mt-32 bg-black bg-opacity-30">
                <Footer />
            </div>
        </>
    )
}