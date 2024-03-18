import { HiMiniArchiveBoxXMark } from "react-icons/hi2";
import { IconContext } from "react-icons";
type EmptyStateProps = {
  label?: string;
};

function EmptyState({ label = "No data" }: EmptyStateProps) {
  return (
    <section className="h-full flex flex-col justify-center items-center gap-0 text-neutral-300 text-lg font-bold">
      <IconContext.Provider value={{ size: "2em" }}>
        <HiMiniArchiveBoxXMark aria-label="empty-state" />
      </IconContext.Provider>
      <p>{label}</p>
    </section>
  );
}

export default EmptyState;
