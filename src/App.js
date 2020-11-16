import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import './App.css';

function App() {
	const [anchorEl, setAnchorEl] = React.useState(null);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};
	let droplist = ['some action', 'some other action', 'hover me for more action'];
	return (
		<div className='App'>
			<Button aria-controls='simple-menu' aria-haspopup='true' onClick={handleClick}>
				Open Menu
			</Button>
			<Menu id='simple-menu' anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
        {
          droplist.map((e) => Item(e, setAnchorEl))
        }
			</Menu>
		</div>
	);
}

function Item(itemName, setAnchorEl) {
	const handleClose = () => {
		setAnchorEl(null);
	};
	return (
		<>
			<MenuItem onClick={handleClose}>{itemName}</MenuItem>
		</>
	);
}

export default App;
