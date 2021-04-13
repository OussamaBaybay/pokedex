import React, { memo } from "react";
import PropTypes from "prop-types";
import { PokemonDetailsContainer } from "./styled";

function PokemonDetails({ pokemonDetails, closeModal }) {
	return (
		<PokemonDetailsContainer>
			<div className="infos_grid">
				<div className="infos_container">
					<span className="title">weight</span>
					<span className="value">{pokemonDetails.weight} lbs</span>
				</div>
				<div className="infos_container">
					<span className="title">height</span>
					<span className="value">{pokemonDetails.height}"</span>
				</div>
				<div className="infos_container">
					<span className="title">ability</span>
					<span className="value">
						{pokemonDetails.abilities[0].ability.name}
					</span>
				</div>
				<div className="infos_container">
					<span className="title">base experience</span>
					<span className="value">{pokemonDetails.base_experience}</span>
				</div>
			</div>
		</PokemonDetailsContainer>
	);
}

PokemonDetails.propTypes = {
	pokemonDetails: PropTypes.object.isRequired,
	closeModal: PropTypes.func.isRequired,
};

export default memo(PokemonDetails);
