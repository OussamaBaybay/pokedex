import styled from "styled-components";

export const PokemonDetailsContainer = styled.div`
	font-family: "Flexo-Bold", arial, sans-serif;
	.infos_grid {
		display: grid;
		grid-template-columns: 200px 200px;
		padding: 30px;
		padding: 30px 0px;
		gap: 30px;
	}
	.infos_container {
		display: flex;
		flex-direction: column;
		gap: 10px;
	}
	.title {
		color: #fff;
		font-weight: 400;
		font-size: 16px;
		text-transform: capitalize;
	}
	.value {
		color: #212121;
		font-size: 20px;
		font-weight: 400;
		text-transform: capitalize;
	}
`;
