import React, { FC } from "react";
import "./CollapsibleCard.scss";
import arrowOpen from "../../../assets/ARROW OPEN.svg";
import arrowClose from "../../../assets/ARROW CLOSE.svg";

interface IProps {
	onClick: () => void;
	isOpen: boolean;
	title: string;
}

const CollapsibleCard: FC<IProps> = ({ onClick, isOpen, title, children }) => {
	return (
		<div className="collapsibleCard">
			<div className="card">
				<p>{title}</p>
				<button onClick={onClick}>
					<img src={isOpen ? arrowClose : arrowOpen} alt="arrowButton" />
				</button>
			</div>
			{isOpen ? <div className="card open">{children}</div> : null}
		</div>
	);
};

export default CollapsibleCard;
