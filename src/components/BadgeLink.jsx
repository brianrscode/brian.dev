export function BadgeLink({icono, texto, link}) {

    return (
        <>
            <a href={`${link}`} target="_blank">
                <div className="flex items-center ">
                    <span className="relative inline-flex overflow-hidden rounded-full p-[1px]">
                    <span
                        className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#123c6f_0%,#67E8F9_50%,#2CC9FF_100%)]"
                    >
                    </span>
                    <div className="gap-2 inline-flex items-center justify-center w-full px-3 py-1 text-sm rounded-full cursor-pointer bg-[#19191C] text-white/80 backdrop-blur-3xl whitespace-nowrap">
                        <img src={`${import.meta.env.BASE_URL}${icono}`} alt={icono} className="w-6 h-6 object-contain gap-3" />
                        {texto}
                    </div>
                    </span>
                </div>
            </a>
        </>
    )
}