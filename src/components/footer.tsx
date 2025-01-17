import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import { SocialList } from "./socialList";

export function Footer() {
  return (
    <footer className="h-[100px] w-full flex flex-col items-center justify-center text-center">
      <a href="#main" className="hidden xl:block">
        <MdKeyboardDoubleArrowUp
          className="text-primary cursor-pointer animate-bounce"
          size={40}
        />
      </a>
      <ul className="xl:hidden flex justify-center gap-4 text-white mb-4">
        <SocialList />
      </ul>
      <p className="text-white text-xs md:text-lg">
        Copyright © 2025 Pedro Peralva - Todos os direitos reservados
      </p>
    </footer>
  );
}
