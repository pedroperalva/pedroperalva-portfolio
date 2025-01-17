import { SocialList } from "./socialList";

export function SideSocialBar() {
  return (
    <div className="hidden xl:fixed left-6 bottom-0">
      <ul className="flex flex-col items-center text-white gap-4">
        <SocialList />
        <div className="h-24 border-2 border-white w-0" />
      </ul>
    </div>
  );
}
