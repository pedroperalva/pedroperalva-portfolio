import { Button } from "@chakra-ui/react";
// import { FaLinkedin, FaWhatsapp, FaGithub } from "react-icons/fa";

export function Header() {
  return (
    <header
      className="p-4 text-primary w-full h-[100px] flex items-center justify-center"
      id="main"
    >
      <nav className="flex justify-between max-w-lg w-lg justify-self-center">
        <h1 className="text-2xl font-semibold animate-pulse">Pedro Peralva</h1>
        <div className="flex items-center gap-10">
          <ul className="flex items-center gap-10 ">
            <li>
              <a href="#skills" className="hover:text-white">
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-white">
                Projetos
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white">
                Contato
              </a>
            </li>
          </ul>
          <Button
            bgColor={"primary"}
            color={"#000"}
            className="box-shadow-hover"
          >
            Currículo
          </Button>
        </div>
      </nav>
    </header>
  );
}
