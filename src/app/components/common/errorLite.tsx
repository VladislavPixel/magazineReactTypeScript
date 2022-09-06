interface ErrorLiteProps{
	classes: string;
	text: string;
}

const ErrorLite = ({ classes, text }: ErrorLiteProps) => {
	return (
		<div className={classes}>{text}</div>
	)
}

export default ErrorLite
