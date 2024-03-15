interface Props extends React.LabelHTMLAttributes<HTMLLabelElement> {}
function Label( {children, ...props}: Props ) {
 return <label {...props}>{children}</label>;
};

export default Label;