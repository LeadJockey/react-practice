import React from 'react';
import Input from "../atoms/Input";
import Label from "../atoms/Label";

const LabeledInput = props => {
	return (
		<div>
			<Label text={props.text}/>
			<Input value="" holer={props.holder} type="text"/>
		</div>
	);
};

export default LabeledInput;