export function Skills({
  icon,
  text,
}: Readonly<{ icon: React.ReactNode; text: string }>) {
  return (
    <div className="border-primary border-2 rounded-md gap-2 font-bold text-lg p-2 flex items-center  text-primary">
      {icon}
      <p>{text}</p>
    </div>
  );
}
