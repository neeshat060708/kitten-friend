import React from 'react';

const Scroll = (props)=> {
		return (
			<div style={{overflow: 'Scroll', height: '800px'}}>
			{props.children}
			</div>
			);
			
	}

export default 	Scroll;