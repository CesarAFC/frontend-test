interface Props extends React.LabelHTMLAttributes<HTMLLabelElement> {}
function Label( {children, ...props}: Props ) {
 return <label className="text-[#737B94] text-base" {...props}>{children}</label>;
};

export default Label;