import React from 'react';

import Loader from '../../../components/UI/Loader';

import ContentLoader from 'react-content-loader';

const BoardsLoader = () => (
	<Loader title="Boards">
		<ContentLoader viewBox="0 0 400 65" speed={1} title="Loading boards...">
			<rect x="0" y="0" rx="4" ry="4" width="165" height="10" />
			<rect x="185" y="0" rx="4" ry="4" width="65" height="10" />
			<rect x="260" y="0" rx="4" ry="4" width="65" height="10" />
			<rect x="335" y="0" rx="4" ry="4" width="65" height="10" />

			<rect x="0" y="15" rx="4" ry="4" width="400" height="50" />
		</ContentLoader>
	</Loader>
);

export default BoardsLoader;
