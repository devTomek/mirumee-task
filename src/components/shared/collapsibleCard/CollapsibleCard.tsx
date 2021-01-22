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
		<div className="collapsible-card">
			<div className="card">
				<span className="title">
					<p>{title}</p>
				</span>
				<span className="collapsible-card-button">
					<button onClick={onClick}>
						<img src={isOpen ? arrowClose : arrowOpen} alt="arrowButton" />
					</button>
				</span>
			</div>
			{isOpen ? <div className="card open">{children}</div> : null}
		</div>
	);
};

export default CollapsibleCard;
