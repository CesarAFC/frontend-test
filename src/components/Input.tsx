interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

function Input(props: Props) {
  return <input {...props} className="p-2 rounded" />;
};

export default Input;