import { MdDeleteForever } from "react-icons/md";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

function DeleteFromCartButton({ ...props }: Props) {
  return (
    <button
      {...props}
      className="self-end flex justify-center items-center gap-2 text-neutral-400 hover:bg-neutral-200 transition ease-in-out px-3 py-2 rounded"
    >
      <MdDeleteForever />
    </button>
  );
}

export default DeleteFromCartButton;
