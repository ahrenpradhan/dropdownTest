import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import './App.css';
// import OutsideClickHandler from 'react-outside-click-handler';
// function CustomList
function Item(handleUpdate, itemName, handleClose) {
	// const [selectedIndex, setSelectedIndex] = React.useState(1);
	const handleMenuItemClick = (event, index) => {
		// console.log(index);
		// console.log(itemName);
		// console.log('--------------------');
		handleUpdate(itemName);
		handleClose();
		// setSelectedIndex(index);
		// setAnchorEl(null);
	};
	if (Array.isArray(itemName)) {
		return CustomDropdown(handleUpdate, itemName.splice(1), itemName[0], handleClose, 1);
	}
	return <MenuItem onClick={handleMenuItemClick}>{itemName}</MenuItem>;
}

function CustomDropdown(handleUpdate, list, title, handler, sub) {
	const [anchorEl, setAnchorEl] = React.useState(null);
	const newRef = React.useRef();
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
		if (title) {
			handleUpdate(title);
		}
	};
	const handleClose = () => {
		if (handler) {
			handler();
		}
		setAnchorEl(null);
	};
	return (
		<div>
			{sub ? (
				<MenuItem onClick={handleClick}>{title}</MenuItem>
			) : (
				<Button aria-controls='simple-menu' aria-haspopup='true' onClick={handleClick}>
					{title || 'Open menu'}
				</Button>
			)}
			<Menu
				ref={newRef}
				anchorEl={anchorEl}
				anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
				transformOrigin={{ vertical: 'top', horizontal: 'left' }}
				open={Boolean(anchorEl)}
				onClose={handleClose}
				children={list.map((e) => Item(handleUpdate, e, handleClose))}
			/>
		</div>
	);
}
function App() {
	const [state, setState] = React.useState([null]);
	const handleUpdate = (item) => {
		if (item) {
			let temp = state.indexOf(item);
			let arrtemp = state;
			if (temp!=-1) {
				arrtemp = arrtemp.slice(0, temp-1);
			} else {
				arrtemp = arrtemp.concat(item);
			}
			setState(arrtemp);
		} else {
			setState([]);
		}
	};
	let droplist = [
		'some action',
		'some other action',
		[
			'hover me for more action',
			'Second Level',
			['Even More', '3th level', ['another level', '4th level', '4th level', '4th level'], '3th level'],
			'Second Level',
			'Second Level',
		],
	];
	return (
		<div className='App'>
			{/* <OutsideClickHandler
				onOutsideClick={() => {
					// alert('You clicked outside of this component!!!');
				}}> */}
			Selected Option - {state[state.length-1]}
			{CustomDropdown(handleUpdate, droplist)}
			{/* </OutsideClickHandler> */}
		</div>
	);
}

export default App;
