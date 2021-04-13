import styled, { css } from "styled-components";
import {
	NORMAL,
	FIGHTING,
	FLYING,
	POISON,
	GROUND,
	ROCK,
	BUG,
	GHOST,
	STEEL,
	FIRE,
	WATER,
	GRASS,
	ELECTRIC,
	PSYCHIC,
	ICE,
	DRAGON,
	DARK,
	FAIRY,
} from "../../common/config";

export const CardContainer = styled.div`
	font-family: "Flexo-Bold", arial, sans-serif;
	img {
		background: #f2f2f2;
		border-radius: 10px;
		width: 100%;
		cursor: pointer;
	}

	h5 {
		color: #313131;
		text-transform: none;
		font-size: 145%;
		margin-bottom: 5px;
		margin-top: 10px;
		text-transform: capitalize;
	}

	.pokemon_details {
		padding-left: 15px;
	}
`;

const variant = (type) => {
	switch (type) {
		case NORMAL:
			return css`
				background-color: #a8a878;
			`;
		case FIGHTING:
			return css`
				background-color: #c02038;
			`;
		case FLYING:
			return css`
				background-color: #a890f0;
			`;
		case POISON:
			return css`
				background-color: #a040a0;
			`;
		case GROUND:
			return css`
				background-color: #e0c068;
			`;
		case ROCK:
			return css`
				background-color: #b8a038;
			`;
		case BUG:
			return css`
				background-color: #a8b820;
			`;
		case GHOST:
			return css`
				background-color: #705898;
			`;
		case STEEL:
			return css`
				background-color: #b8b8d0;
			`;
		case FIRE:
			return css`
				background-color: #f08030;
			`;
		case WATER:
			return css`
				background-color: #6890f0;
			`;
		case GRASS:
			return css`
				background-color: #78c850;
			`;
		case ELECTRIC:
			return css`
				background-color: #f8d030;
			`;
		case PSYCHIC:
			return css`
				background-color: #f85888;
			`;
		case ICE:
			return css`
				background-color: #98d8d8;
			`;
		case DRAGON:
			return css`
				background-color: #7038f8;
			`;
		case DARK:
			return css`
				background-color: #705848;
			`;
		case FAIRY:
			return css`
				background-color: #ee99ac;
			`;
		default:
			return css`
				background-color: #485563;
			`;
	}
};

export const PokemonType = styled.div`
	border-radius: 3px;
	line-height: 18px;
	max-width: 110px;
	width: 70px;
	text-transform: none;
	font-size: 11px;
	text-align: center;
	color: white;
	text-transform: capitalize;
	${(props) => variant(props.type)};
`;

export const PokemonAllTypes = styled.div`
	display: flex;
	gap: 10px;
`;

export const PokemonNumber = styled.div`
	color: #919191;
	font-size: 13px;
	font-weight: 600;
`;
