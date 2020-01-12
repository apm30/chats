import React from 'react';

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

export default function Store(props) {
	const reducerHook = React.useReducer(reducer, initState);

	return <CTX.Provider value={reducerHook}>{props.children}</CTX.Provider>;
}
