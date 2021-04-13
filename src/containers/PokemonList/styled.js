import styled from "styled-components";

export const NavBar = styled.div`
	background-color: #e3350f;
	height: 50px;
	display: flex;
	align-items: center;
	padding: 5px 20px;
	position: sticky;
	top: 0;
	a {
		color: white;
		text-decoration: none;
		font-size: 20px;
	}
	img {
		width: 40px;
		height: 40px;
		margin-right: 10px;
	}
`;

export const PokemonListGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
	gap: 40px;
	justify-content: center;
	padding: 40px 40px;
`;

export const PokemonListContainer = styled.div`
	.loading {
		text-align: center;
		padding-bottom: 20px;
		div {
			font-size: 18px;
		}
	}
`;
