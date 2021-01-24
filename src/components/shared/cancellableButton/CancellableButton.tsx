import React, { FC } from "react";
import "./CancellableButton.scss";

interface IProps {
	onClick: () => void;
	type?: "button" | "submit" | "reset";
}

const CancellableButton: FC<IProps> = ({ children, onClick, type }) => {
	return (
		<div className="cancellable-button">
			<button onClick={onClick} type={type}>
				{children}
				<span data-testid="cross" className="cross">&#x2715;</span>
			</button>
		</div>
	);
};

export default CancellableButton;
