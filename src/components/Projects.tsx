import { Link } from "react-router-dom"

const projects = [
  {
    id: 1,
    title: "Calculadora",
    description: "Uma calculadora simples feita com React e JavaScript.",
    link: "/calculator",
  },
]

const Projects = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h2 className="my-20 text-center text-4xl select-none pointer-events-none">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="p-4 border rounded-lg shadow-lg">
            <h3 className="text-xl font-bold">{project.title}</h3>
            <p className="text-neutral-500">{project.description}</p>
            <Link to={project.link} target={project.link.startsWith("http") ? "_blank" : ""} rel="noopener noreferrer">
              <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg">
                Ver Projeto
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
