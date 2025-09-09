"use client";

import { Skills } from "@/components/skills";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiChakraui,
  SiNestjs,
  SiPrisma,
  SiShadcnui,
} from "react-icons/si";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { ProjectCard } from "@/components/projectCard";
import { SideSocialBar } from "@/components/sideSocialBar";
import { ContactForm } from "@/components/contactForm";
import { skillsList } from "./utils/skillList";
import { FaReact } from "react-icons/fa6";
import { ReactIcon } from "@/components/reactIcon";

export default function Home() {
  return (
    <div className="px-6 md:px-10 xl:px-20 flex flex-col font-quicksand pb-20">
      <SideSocialBar />
      <section className="flex xl:flex-row flex-col-reverse items-center justify-around xl:h-[calc(100vh-150px)] w-full relative mt-20 xl:mt-0">
        <div className="max-w-[700px] mt-20 xl:mt-0">
          <h1 className="text-3xl text-white fade-in delay-1">Pedro Peralva</h1>
          <h1 className="text-3xl text-primary fade-in delay-2">
            Software Engineer
          </h1>
          <p className="text-md text-white fade-in delay-3">
            Tenho 3 anos de experiência desenvolvendo aplicações full-stack com
            maior experiência em front-end.
            <br />
            Desenvolvo aplicações utilizando Next, React, Vue, Typescript e
            Javascript.
            <br />
            Domino ferramentas de gerenciamento de estados globais como Context,
            Redux, Vuex, bibliotecas de CSS como Tailwind, Bootstrap, Vuetify,
            ChakraUI, Styled Components, MaterialUI e testes automatizados com
            React Testing Library e Jest.
            <br />
            No Back-End tenho experiência com desenvolvimento de apis utilizando
            Nodejs, Nestjs, Prisma e qualquer banco SQL.
          </p>
        </div>
        <ReactIcon />
      </section>
      <section className="h-[50px] w-full xl:flex justify-center hidden">
        <a href="#skills">
          <MdKeyboardDoubleArrowDown
            className="text-primary cursor-pointer animate-bounce"
            size={40}
          />
        </a>
      </section>
      <section id="skills" className="fade-in w-full">
        <h1 className="text-4xl text-primary text-center my-20">Skills</h1>
        <div className="flex flex-wrap items-center justify-center gap-4 fade-in">
          {skillsList.map((skill, index) => (
            <Skills key={index} icon={skill.icon} text={skill.text} />
          ))}
        </div>
      </section>
      <section id="skills" className="fade-in w-full">
        <h1 className="text-4xl text-primary text-center my-20">Projetos</h1>
        <div className="space-y-20">
          <ProjectCard
            title="MovieFlix"
            thumb="/projects/movieflix.jpg"
            description="Projeto utilizando a biblioteca TMDB de filmes e séries. O intuito
          do projeto é utilizar algumas funções serverless do Nextjs e fazer
          uma plataforma com cadastro e login de usuários com Nestjs, onde
          poderão ser falvos os filmes, séries e atores favoritos, além de ver
          detalhes sobre os títulos."
            techs={[
              SiTypescript,
              SiNextdotjs,
              SiTailwindcss,
              SiChakraui,
              SiNestjs,
              SiPrisma,
            ]}
            liveLink=""
            codeLink="https://github.com/pedroperalva/pedroperalva-portfolio"
          />
          <ProjectCard
            title="Leco Biagioni"
            thumb="/projects/lecobiagioni.png"
            description="Projeto realizado para um celebrando de casamentos de luxo. Foi utilizado Nextjs como ferramenta principal com shadcn para lib de componentes e Tailwind para o CSS."
            techs={[SiTypescript, SiNextdotjs, SiTailwindcss, SiShadcnui]}
            liveLink="https://www.lecobiagioni.com/"
            codeLink="https://github.com/pedroperalva/leco-biagioni"
          />
        </div>
      </section>
      <section id="contact" className="fade-in w-full">
        <h1 className="text-4xl text-primary text-center my-20">Contato</h1>
        <div className="flex justify-center">
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
