import React from 'react';

const Card = (props)=> {
		return ( 
			<div className='tc bg-light-yellow dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img  alt='kittens' src={`https://robohash.org/test/${props.id}?200*200`} />
			<div>
		<h2> {props.name} </h2>
		<p> {props.email}</p>
		</div>
		</div>
		);
	}

export default Card;