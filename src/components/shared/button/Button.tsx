import React, { FC } from "react";
import "./Button.scss";

interface IProps {
	onClick?: () => void;
	type?: "button" | "submit" | "reset" | undefined;
	disabled?: boolean;
}

const Button: FC<IProps> = ({ children, onClick, type, disabled }) => {
	return (
		<span className="button">
			<button disabled={disabled} onClick={onClick} type={type}>
				{children}
			</button>
		</span>
	);
};

export default Button;
