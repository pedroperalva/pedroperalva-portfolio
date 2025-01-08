import { Button } from "@chakra-ui/react";
import { FaLinkedin, FaWhatsapp, FaGithub } from "react-icons/fa";

export function Header() {
  return (
    <header className="p-4 text-primary w-full h-[100px] flex items-center justify-center">
      <nav className="flex justify-between max-w-lg w-lg justify-self-center">
        <h1 className="text-2xl font-bold">Pedro Peralva</h1>

        <ul className="flex items-center gap-6 font-bold">
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

        <div className="flex items-center gap-10">
          <ul className="flex space-x-4">
            <li>
              <a
                href="https://www.linkedin.com/in/pedro-peralva/"
                className="hover:text-white"
              >
                <FaLinkedin size={26} />
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/+5521991878033"
                className="hover:text-white"
              >
                <FaWhatsapp size={26} />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/pedroperalva"
                className="hover:text-white"
              >
                <FaGithub size={26} />
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
