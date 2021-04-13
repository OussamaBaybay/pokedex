import React, { memo } from "react";
import PropTypes from "prop-types";
import {
	CardContainer,
	PokemonType,
	PokemonAllTypes,
	PokemonNumber,
} from "./styled";

function Card({ id, name, image, types, pokemon, openModal }) {
	return (
		<CardContainer id="card">
			<img src={image} alt="pokemon" onClick={() => openModal(pokemon)} />
			<div className="pokemon_details">
				<PokemonNumber>
					<span>#</span>
					{id.toString().padStart(3, "0")}
				</PokemonNumber>
				<h5>{name}</h5>
				<PokemonAllTypes>
					{types.map((item, index) => (
						<PokemonType type={item.type.name} key={index}>
							{item.type.name}
						</PokemonType>
					))}
				</PokemonAllTypes>
			</div>
		</CardContainer>
	);
}

Card.propTypes = {
	id: PropTypes.number.isRequired,
	name: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired,
	types: PropTypes.array.isRequired,
	pokemon: PropTypes.object.isRequired,
	openModal: PropTypes.func.isRequired,
};

export default memo(Card);
