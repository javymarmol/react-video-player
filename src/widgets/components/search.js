import React from 'react';
import './search.css';

const Search = (props) => (
	<form
		className="Search"
		onSubmit={props.handleSubmit}
	>
		<input
			ref={props.setRef}
			type="text"
			placeholder="Busca tu video favorito"
			className="Search-input"
			name="search"
			onChange={props.handleChange}
			value={props.value}
			// defaultValue="Bad Bunny"
		/>
	</form>
);

export default Search;
