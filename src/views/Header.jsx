import { BadgeLink } from "../components/BadgeLink";

export function Header({ name, skill, skillExtra, media }) {
    const email = media.email;
    const github = media.github;
    const linkedin = media.linkedin;
    // 51E4B8
    return (
        <>
            <div className="block gap-2">
                <div className="font-medium gap-2">
                    <h1 className="text-3xl text-white">Hola, soy...</h1>
                    <h1 className="text-8xl text-[#2CC9FF] hover:text-[#67E8F9] font-bold">{name}</h1>
                </div>

                <p className="text-lg block mt-4">
                    <span className="text-white">{skill}</span>
                    <span className="text-[#FFF18A] font-medium"> {skillExtra}</span>
                </p>

                <div className="block mt-4 mb-4">
                    <div className="flex gap-2">
                        {github?.map(github => <BadgeLink key={github.icon} icono={github.icon} texto={github.text} link={github.link} />)}
                        {linkedin?.map(linkedin => <BadgeLink key={linkedin.icon} icono={linkedin.icon} texto={linkedin.text} link={linkedin.link} />)}
                    </div>
                    <div className="mt-4 text-white">
                        {email?.map(email => <BadgeLink key={email.icon} icono={email.icon} texto={email.text} link={email.link} />)}
                    </div>
                    </div>
            </div>
        </>
    )
}

