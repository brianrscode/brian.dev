import { BadgeTech } from "./BadgeTech"
export function CardProject({img, title, description, link, techs}) {
    // 0f172A, 1E1E2F, ->171724<-
    return (
        <a href={link} target="_blank" className="block hover:scale-105 transition-transform duration-300 w-fit h-max">
            <span className="relative inline-flex overflow-hidden rounded-lg p-[1px]">
                <span
                    className="absolute inset-[-1000%] animate-[spin_9s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#123c6f_0%,#67E8F9_50%,#2CC9FF_100%)]"
                ></span>
                <div className="relative flex flex-col shadow-sm bg-[#08080d] rounded-lg w-full max-w-sm">
                    <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
                        <img src={`${import.meta.env.BASE_URL}${img}`} alt={title} className="w-full h-full object-cover" />
                    </div>
                    <div className="p-1">
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-1 p-2 object-cover">
                            {techs.map(tech => <BadgeTech key={tech.icono} icono={tech.icono} texto={tech.texto} />)}
                        </div>
                    </div>
                    <div className="pl-4 pr-4 pb-4">
                        <h6 className="mb-2 text-white text-xl font-semibold">
                            {title}
                        </h6>
                        <p className="text-white leading-normal font-light">{description}</p>
                    </div>
                </div>
            </span>
        </a>
    )
}