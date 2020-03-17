import React from 'react';

import './Title.scss';

const InputTitle = (props) => {
	const { placeholder, defaultValue, onBlur, completed } = props;

	return (
		<div className="InputTitle">
			<input
				type="text"
				name="title"
				className={`h3 w-100 mb-4 ${completed ? 'completed' : ''}`}
				placeholder={placeholder}
				autoComplete="off"
				defaultValue={defaultValue}
				onBlur={onBlur}
			/>
		</div>
	);
};

InputTitle.defaultProps = {
	completed: false,
	placeholder: ''
};

export default InputTitle;
