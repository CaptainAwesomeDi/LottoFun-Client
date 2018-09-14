const TOGGLE_NUMBER = 'TOGGLE_NUMBER';

const toggle_number = (number) => ({
	type: TOGGLE_NUMBER,
	selected_number: number
});

export {TOGGLE_NUMBER,toggle_number}