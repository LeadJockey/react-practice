import React from 'react';
import Input from "../atoms/Input";
import Label from "../atoms/Label";

const LabeledInput = props => {
	return (
		<div>
			<Label text={props.text}/>
			<Input type={props.type} value={props.value} onChange={props.textChangeHandler} placeholder={props.placeholder} />
		</div>
	);
};

export default LabeledInput;