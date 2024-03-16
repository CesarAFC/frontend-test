interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

function PrimaryButton({ children, ...props }: Props) {
  return (
    <button
      {...props}
      className="w-full flex justify-center items-center gap-2 bg-indigo-700 text-white hover:bg-indigo-500 transition ease-in-out px-3 py-2 rounded"
    >
      {children}
    </button>
  );
}

export default PrimaryButton;
