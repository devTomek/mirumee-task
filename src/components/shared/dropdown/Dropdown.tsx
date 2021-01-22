import React, { FC } from "react";
import { IDropdownOption } from "./types";

interface IProps {
	options: IDropdownOption[];
	onChange: (option: IDropdownOption) => void;
}

const Dropdown: FC<IProps> = ({ onChange, options }) => {
	if (options.length <= 0) return null;

	return (
		<div className="dropdown">
			<select
				onChange={(e) =>
					onChange({
						value: e.target.value,
						label: e.target.name,
					})
				}
			>
				{options.map(({ label }) => (
					<option key={label} value={label}>
						{label}
					</option>
				))}
			</select>
		</div>
	);
};

export default Dropdown;
