import React, { ChangeEvent, FC } from "react";
import "./Input.scss";

interface IProps {
	onChange: (e: ChangeEvent) => void;
	value: string;
	id?: string;
	name?: string;
	label?: string;
	placeholder?: string;
	icon?: string;
	errorText?: string;
}

const Input: FC<IProps> = ({
	onChange,
	value,
	id,
	name,
	label,
	placeholder,
	icon,
	errorText,
}) => {
	return (
		<div className="input">
			{label ? (
				<label htmlFor="input" className={errorText ? "red" : ""}>
					{label}
				</label>
			) : null}
			<input
				id={id}
				name={name}
				type="text"
				onChange={onChange}
				value={value}
				placeholder={placeholder}
			/>
			{icon ? <img src={icon} alt="input-icon" /> : null}
			{errorText ? <div className="error">{errorText}</div> : null}
		</div>
	);
};

export default Input;
