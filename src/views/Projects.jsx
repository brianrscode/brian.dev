import { CardProject } from "/src/components/CardProject";
export function Projects({ data }){
    return (
        <>
            {
                data.map((project) => (
                    <CardProject
                        key={project.id}
                        img={project.image}
                        title={project.title}
                        description={project.description}
                        link={project.link}
                        techs={project.technologies.map(tech => ({icono: tech, texto: tech}))}
                    />
                ))
            }
        </>
    )
}