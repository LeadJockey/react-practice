import React from 'react';

const Input = props => {
	return <input type={props.type}
								className={props.class}
								value={props.value}
								onChange={props.handler}
								placeholder={props.placeholder}/>;
};

export default Input;