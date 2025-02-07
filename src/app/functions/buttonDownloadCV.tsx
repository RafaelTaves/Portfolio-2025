'use client';
import { FiDownload } from "react-icons/fi";

export default function ButtonDownloadCV({ marginTop }: { marginTop: string }) {

    function downloadCV() {
        console.log("entrou na função")
        const url = "../images/RafaelTavesCVBR.pdf"
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", `RafaelTavesCVBR.pdf`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    return (
        <button
            onClick={downloadCV}
            className={`font-inter flex ${marginTop} justify-center gap-x-2 text-md lg:w-1/4 font-semibold text-white border px-4 py-2 rounded-md bg-emerald-green border-emerald-green hover:bg-mid-green hover:border-mid-green`}>
            <FiDownload className="text-2xl" /> Download CV
        </button>
    )
}