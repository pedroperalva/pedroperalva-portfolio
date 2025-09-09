import { IconType } from "react-icons";

export function Skills({
  icon: Icon,
  text,
}: Readonly<{ icon: IconType; text: string }>) {
  return (
    <div className="border-primary border-2 rounded-md gap-2 font-semibold text-lg p-2 flex items-center text-primary hover:text-white hover:scale-105 hover:border-white transition-all">
      <Icon size={26} />
      <p>{text}</p>
    </div>
  );
}
