import { MdKeyboardDoubleArrowUp } from "react-icons/md";

export function Footer() {
  return (
    <footer className="h-[100px] w-full flex flex-col items-center justify-center">
      <a href="#main">
        <MdKeyboardDoubleArrowUp
          className="text-primary cursor-pointer animate-bounce"
          size={40}
        />
      </a>
      <p className="text-white">
        Copyright © 2025 Pedro Peralva - Todos os direitos reservados
      </p>
    </footer>
  );
}
