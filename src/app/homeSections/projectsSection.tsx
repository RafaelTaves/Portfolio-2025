import { useLocale, useTranslations } from "next-intl"

export default function ProjectsSection() {
  const t = useTranslations('HomePage')
  const locale = useLocale();

  const projects = [
    {
      imgPath: "../images/projectsCards/thumbnailLaytime.png",
      title: "Laytime Calculator",
      description: t('project-laytimeDescription'),
      link: `${locale}/projectLaytime`,
    },
    {
      imgPath: "../images/projectsCards/thumbnailAI.png",
      title: "AI Powered Data Extraction",
      description: t('project-documentExtractorDescription'),
      link: "#",
    },
    {
      imgPath: "../images/projectsCards/projetoTananan.png",
      title: "Projeto 3",
      description: "Descrição breve do projeto 3.",
      link: "#",
    },
    {
      imgPath: "../images/projectsCards/projetoTananan.png",
      title: "Projeto 4",
      description: "Descrição breve do projeto 4.",
      link: "#",
    },
    {
      imgPath: "../images/projectsCards/projetoTananan.png",
      title: "Projeto 5",
      description: "Descrição breve do projeto 5.",
      link: "#",
    },
    {
      imgPath: "../images/projectsCards/projetoTananan.png",
      title: "Projeto 6",
      description: "Descrição breve do projeto 6.",
      link: "#",
    },
  ];

  return (
    <div className="p-6 lg:px-16">
      <div className="flex flex-row gap-x-2">
        <p className="font-poppins text-3xl lg:text-4xl text-white">{t('projects-title1')}</p>
        <p className="font-poppins text-3xl lg:text-4xl text-light-blue">{t('projects-title2')}</p>
        <p className="font-poppins text-3xl lg:text-4xl text-white">{t('projects-title3')}</p>
      </div>
      {/* Grid de Projetos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform"
          >
            <img src={project.imgPath} />
            <h3 className="font-inter text-xl font-semibold text-white mt-2">{project.title}</h3>
            <p className="font-inter text-gray-300 mt-2">{project.description}</p>
            <a
              href={project.link}
              className="font-inter inline-block mt-4 text-light-blue font-semibold hover:underline"
            >
              {t('project-cardDetails')} →
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}