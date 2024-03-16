import { AiOutlineLoading } from "react-icons/ai";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
}

function PrimaryButton({ children, loading, ...props }: Props) {
  return (
    <button
      {...props}
      className="w-full flex justify-center items-center gap-2 bg-indigo-700 text-white hover:bg-indigo-500 transition ease-in-out px-3 py-2 rounded"
    >
      {loading ? (
        <span className="animate-spin">
          <AiOutlineLoading />
        </span>
      ) : null}
      {children}
    </button>
  );
}

export default PrimaryButton;
