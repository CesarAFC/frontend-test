interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

function Input(props: Props) {
  return <input {...props} className="p-2 rounded border border-slate-300 outline-slate-500" />;
};

export default Input;