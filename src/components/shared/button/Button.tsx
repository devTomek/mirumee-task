import React, { FC } from "react";
import "./Button.scss";

interface IProps {
	onClick?: () => void;
	type?: "button" | "submit" | "reset" | undefined;
}

const Button: FC<IProps> = ({ children, onClick, type }) => {
	return (
		<span className="button">
			<button onClick={onClick} type={type}>
				{children}
			</button>
		</span>
	);
};

export default Button;
