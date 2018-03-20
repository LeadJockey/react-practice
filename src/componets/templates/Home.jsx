import React        from "react";
import ReactDOM     from "react-dom";
import Title        from "../atoms/Title";
import LabeledInput from "../molecules/LabeledInput";

const App = () => {
	return (
		<div>
			<Title text="hello world1"/>
			<LabeledInput text="test-label" holder="test-holder"/>
		</div>
	);
};

// class App extends React.Component {
// 	render() {
// 		return (
// 			<div>
// 				<Title text="hello world1"/>
// 				<LabeledInput text="test-label" holder="test-holder"/>
// 			</div>
// 		);
// 	};
// }

export default App;




