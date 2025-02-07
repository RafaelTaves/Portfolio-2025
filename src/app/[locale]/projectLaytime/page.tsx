import Footer from "@/app/homeSections/footer";
import Header from "@/app/homeSections/header";

export default function ProjectLaytime() {

    return (
        <>
            <div className="h-full w-full lg:max-w-7xl lg:mx-auto">
                <div id="header" className="w-full">
                    <Header />
                </div>
            </div>
            <div id="footer" className="w-full mt-24 lg:mt-32 bg-black bg-opacity-30">
                <Footer />
            </div>
        </>
    )

} 
