import { Link } from "react-router-dom"
import { motion } from "framer-motion"

const projects = [
  {
    id: 1,
    title: "Calculadora",
    description: "Uma calculadora simples feita com React e JavaScript.",
    link: "/calculator",
    githublink: "https://github.com/leomloncarovich/Calculator",
    imagem: "/assets/PictureProject1.png",
    technologies: ["React", "Typescript", "Javascript"]
  },
]

const Projects = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2
      whileInView={{opacity: 1, y: 0}}
      initial={{ opacity: 0, y: -100 }}
      transition={{ duration: 1.5 }}
      className="my-20 text-center text-4xl select-none pointer-events-none">
        Projects
      </motion.h2>
      <div>
        {projects.map((project) => (
          <div
            key={project.id}
            className="mb-8 flex flex-col items-center justify-center lg:flex-row lg:items-start">
              <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full flex justify-center lg:justify-start lg:w-1/4 select-none pointer-events-none">
              <img
                src={project.imagem}
                width={150}
                height={150}
                alt={project.title}
                className="mb-6 rounded select-none"
              />
              </motion.div>
              <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 100 }}
              transition={{ duration: 0.8 }}
              className="w-full max-w-xl lg:w-3/4 text-center lg:text-left">
                <h3 className="mb-2 font-semibold pointer-events-none">{project.title}</h3>
                <p className="mb-4 text-neutral-500 pointer-events-none">{project.description}</p>
                {project.technologies.map((tech: string) => (
                  <span
                  key={project.id}
                  className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-400">
                    {tech}
                  </span>
                ))}
              </motion.div>
            <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="flex gap-4 py-2">
              <div>
                <Link to={project.link} rel="noopener noreferrer">
                  <button className="mt-4 px-4 py-2 bg-purple-600 text-white rounded-lg">
                    Ver Projeto
                  </button>
                </Link>
              </div>
              <div>
              <Link to={project.githublink} target="_blank" rel="noopener noreferrer">
                <button className=" mt-4 px-4 py-2 bg-purple-600 text-white rounded-lg">
                  Ver Repositorio
                </button>
              </Link>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
