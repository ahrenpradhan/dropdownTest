import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import './App.css';

// function CustomList
function Item(itemName, setAnchorEl) {
	const handleClose = () => {
		setAnchorEl(null);
	};
	if (Array.isArray(itemName)) {
		return (
			<>
				{CustomDropdown(itemName.splice(1), itemName[0],handleClose,1)}
			</>
		);
	}
	return (
		<>
			<MenuItem onClick={handleClose}>{itemName}</MenuItem>
		</>
	);
}
function CustomDropdown(list, title,handler, sub) {
	const [anchorEl, setAnchorEl] = React.useState(null);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
		if (handler) {
			handler();
		}
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
				anchorEl={anchorEl}
				anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
				transformOrigin={{ vertical: 'top', horizontal: 'left' }}
				open={Boolean(anchorEl)}
				onClose={handleClose}>
				{list.map((e) => Item(e, setAnchorEl))}
			</Menu>
		</div>
	);
}
function App() {
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
	return <div className='App'>{CustomDropdown(droplist)}</div>;
}

export default App;
