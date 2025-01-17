import {
  Button,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { IoIosMenu } from "react-icons/io";

export function Header() {
  return (
    <header
      className="p-4 w-full h-[100px] flex items-center justify-center"
      id="main"
    >
      <nav className="hidden md:flex justify-between max-w-lg w-lg justify-self-center fade-in delay-1 text-primary">
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
          <Link href="/Currículo-Pedro-Peralva.pdf" target="_blank">
            <Button
              bgColor={"primary"}
              color={"#000"}
              className="box-shadow-hover"
            >
              Currículo
            </Button>
          </Link>
        </div>
      </nav>
      <nav className="flex justify-between w-full md:hidden">
        <h1 className="text-2xl font-semibold animate-pulse text-primary">
          Pedro Peralva
        </h1>
        <Menu closeOnSelect>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<IoIosMenu size={20} />}
            bgColor={"primary"}
          />
          <MenuList>
            <a href="#skills" className="font-bold text-black">
              <MenuItem>Skills</MenuItem>
            </a>
            <a href="#projects" className="font-bold text-black">
              <MenuItem>Projetos</MenuItem>
            </a>
            <a href="#contact" className="font-bold text-black">
              <MenuItem>Contato</MenuItem>
            </a>
            <Link
              className="font-bold text-black"
              href="/Currículo-Pedro-Peralva.pdf"
              target="_blank"
            >
              <MenuItem>Currículo</MenuItem>
            </Link>
          </MenuList>
        </Menu>
      </nav>
    </header>
  );
}
