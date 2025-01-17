import { BiLinkExternal } from "react-icons/bi";
import { Icon, Link } from "@chakra-ui/react";
import { IconType } from "react-icons";

export function ProjectCard({
  title,
  description,
  techs,
  codeLink,
  liveLink,
}: {
  title: string;
  description: string;
  techs: IconType[];
  codeLink: string;
  liveLink: string;
}) {
  return (
    <div className="flex xl:max-h-[300px] xl:flex-row flex-col items-center xl:items-start gap-6 xl:gap-0">
      <img
        src="/projects/movieflix.jpg"
        alt="movie-flix"
        className="xl:w-[500px] xl:h-[300px] xl:mr-8 shadow-project shadow-primary md:max-w-[500px]"
      />
      <div className="flex flex-col justify-between md:max-w-[500px] xl:max-w-full xl:h-[300px]">
        <div>
          <h3 className="text-primary text-xl md:text-3xl">{title}</h3>
          <p className="text-white">{description}</p>
          <p className="text-primary md:text-xl my-2">TECHS:</p>
          <div className="flex flex-wrap gap-4 text-primary">
            {techs.map((Tech, index) => (
              <Icon key={index} as={Tech} className="text-2xl" />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4 mt-4">
          <div className="flex gap-4 ">
            <Link
              className="w-26 border-2 border-primary flex items-center p-2"
              color={"primary"}
              href={codeLink}
              target="_blank"
            >
              <BiLinkExternal size={18} className="mr-2" /> Code
            </Link>
            <Link
              className="w-26 border-2 border-primary flex items-center p-2"
              color={"primary"}
              href={liveLink}
              target="_blank"
            >
              <BiLinkExternal size={18} className="mr-2" /> Live
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
