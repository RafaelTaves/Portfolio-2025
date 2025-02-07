import About from "../homeSections/about";
import Footer from "../homeSections/footer";
import Header from "../homeSections/header";
import Main from "../homeSections/main";
import ProjectsSection from "../homeSections/projectsSection";


export default function Home() {
  return (
    <>
    <div className="h-full w-full lg:max-w-7xl lg:mx-auto">
      <div id="header" className="w-full">
        <Header />
      </div>

      <div id="home" className="w-full h-[70vh]">
        <Main />
      </div>

      <div id="about" className="w-full lg:h-full mt-24 lg:py-0">
        <About />
      </div>

      <div id="projects" className="w-full  lg:h-full mt-24 lg:mt-32">
        <ProjectsSection />
      </div>
    </div>
    <div id="footer" className="w-full mt-24 lg:mt-32 bg-black bg-opacity-30">
      <Footer />
    </div>
    </>
  );
}
