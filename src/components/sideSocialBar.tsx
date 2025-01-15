import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export function SideSocialBar() {
  return (
    <div className="fixed left-6 bottom-0">
      <ul className="flex flex-col items-center text-white gap-4">
        <li>
          <a
            href="https://www.linkedin.com/in/pedro-peralva/"
            className="hover:text-primary"
            target="_blank"
          >
            <FaLinkedin size={26} />
          </a>
        </li>
        <li>
          <a
            href="https://wa.me/+5521991878033"
            className="hover:text-primary"
            target="_blank"
          >
            <FaWhatsapp size={26} />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/pedroperalva"
            className="hover:text-primary"
            target="_blank"
          >
            <FaGithub size={26} />
          </a>
        </li>
        <div className="h-24 border-2 border-white w-0" />
      </ul>
    </div>
  );
}
