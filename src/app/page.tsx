"use client";

import { Skills } from "@/components/skills";
import Image from "next/image";
import {
  SiHtml5,
  SiCss3,
  SiVuedotjs,
  SiNextdotjs,
  SiTypescript,
  SiReact,
  SiJavascript,
  SiTailwindcss,
  SiChakraui,
  SiBootstrap,
  SiMui,
  SiJest,
  SiNodedotjs,
  SiNestjs,
  SiPrisma,
  SiMysql,
  SiPostgresql,
  SiRedux,
} from "react-icons/si";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { ProjectCard } from "@/components/projectCard";
import { SideSocialBar } from "@/components/sideSocialBar";
import { ContactForm } from "@/components/contactForm";

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
        <div className="image-container fade-in delay-1">
          <div className="image-wrapper">
            <Image
              src="/eu.png"
              alt="Pedro Peralva"
              width={400}
              height={400}
              className="profile-image"
            />
          </div>
        </div>
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
          <Skills icon={<SiHtml5 size={26} />} text="HTML" />
          <Skills icon={<SiCss3 size={26} />} text="CSS" />
          <Skills icon={<SiJavascript size={26} />} text="JAVASCRIPT" />
          <Skills icon={<SiTypescript size={26} />} text="TYPESCRIPT" />
          <Skills icon={<SiReact size={26} />} text="REACT" />
          <Skills icon={<SiNextdotjs size={26} />} text="NEXT" />
          <Skills icon={<SiVuedotjs size={26} />} text="VUE" />
          <Skills icon={<SiTailwindcss size={26} />} text="TAILWIND" />
          <Skills icon={<SiChakraui size={26} />} text="CHAKRA UI" />
          <Skills icon={<SiBootstrap size={26} />} text="BOOTSTRAP" />
          <Skills icon={<SiMui size={26} />} text="MATERIAL UI" />
          <Skills icon={<SiRedux size={26} />} text="REDUX" />
          <Skills icon={<SiJest size={26} />} text="JEST" />
          <Skills icon={<SiNodedotjs size={26} />} text="NODE" />
          <Skills icon={<SiNestjs size={26} />} text="NEST" />
          <Skills icon={<SiPrisma size={26} />} text="PRISMA" />
          <Skills icon={<SiMysql size={26} />} text="MYSQL" />
          <Skills icon={<SiPostgresql size={26} />} text="POSTGRESQL" />
        </div>
      </section>
      <section id="skills" className="fade-in w-full">
        <h1 className="text-4xl text-primary text-center my-20">Projetos</h1>
        <ProjectCard
          title="MovieFlix"
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
