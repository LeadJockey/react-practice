import React from 'react';
import Item  from "../atoms/Item";

const UnorderedList = props => {
	const itemList = [];
	props.todoList.forEach((e,i)=>{
		itemList.push(<Item key={i} text={e}/>)
	});
	return <ul className='item_list'>{itemList}</ul>;
};

export default UnorderedList;