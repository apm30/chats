import React from 'react';
import io from 'socket.io-client';

export const CTX = React.createContext();

const initState = {
	general: [
		{ from: 'arron', msg: 'hello' },
		{ from: 'kate', msg: 'hello' }
	],
	topic2: [
		{ from: 'arnold', msg: 'welcome' },
		{ from: 'bart', msg: 'greetings' }
	]
};

function reducer(state, action) {
	const { from, msg, topic } = action.payload;
	switch (action.type) {
		case 'RECEIVE_MESSAGE':
			return {
				...state,
				[topic]: [
					...state[topic],
					{
						from,
						msg
					}
				]
			};
		default:
			return state;
	}
}

let socket;

function sendChatAction(value) {
	socket.emit('chat message', value);
}

export default function Store(props) {
	const [allChats, dispatch] = React.useReducer(reducer, initState);
	if (!socket) {
		socket = io(':3001');
		socket.on('chat message', function(msg) {
			dispatch({ type: 'RECEIVE_MESSAGE', payload: msg });
		});
	}

	const user = 'user' + Math.random(100).toFixed(2);

	return (
		<CTX.Provider value={{ allChats, sendChatAction, user }}>
			{props.children}
		</CTX.Provider>
	);
}
