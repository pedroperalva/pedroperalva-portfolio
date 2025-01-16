import {
  SiChakraui,
  SiNestjs,
  SiNextdotjs,
  SiPrisma,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { BiLinkExternal } from "react-icons/bi";
import { Button } from "@chakra-ui/react";

export function ProjectCard() {
  return (
    <div className="flex xl:max-h-[300px] xl:flex-row flex-col items-center xl:items-start gap-6 xl:gap-0">
      <img
        src="/projects/movieflix.jpg"
        alt="movie-flix"
        className="xl:w-[500px] xl:h-[300px] xl:mr-8 shadow-project shadow-primary md:max-w-[500px] md:max-h-[300px]"
      />
      <div className="flex flex-col justify-between md:max-w-[500px] xl:max-w-full">
        <div>
          <h3 className="text-primary text-xl md:text-3xl">MovieFlix</h3>
          <p className="text-white">
            Projeto utilizando a biblioteca TMDB de filmes e séries. O intuito
            do projeto é utilizar algumas funções serverless do Nextjs e fazer
            uma plataforma com cadastro e login de usuários com Nestjs, onde
            poderão ser falvos os filmes, séries e atores favoritos, além de ver
            detalhes sobre os títulos.
          </p>
          <p className="text-primary md:text-xl my-2">TECHS:</p>
          <div className="flex flex-wrap gap-4 text-primary">
            <SiTypescript size={26} />
            <SiNextdotjs size={26} />
            <SiTailwindcss size={26} />
            <SiChakraui size={26} />
            <SiNestjs size={26} />
            <SiPrisma size={26} />
          </div>
        </div>
        <div className="flex flex-col gap-4 mt-4 xl:mt-0">
          <div className="flex gap-6">
            <Button className="w-28 box-shadow-hover" bgColor={"primary"}>
              <BiLinkExternal size={18} className="mr-2" /> Code
            </Button>
            <Button className="w-28 box-shadow-hover" bgColor={"primary"}>
              <BiLinkExternal size={18} className="mr-2" /> Live
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
