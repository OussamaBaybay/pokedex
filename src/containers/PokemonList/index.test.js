import React from "react";
import { render, cleanup, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import axios from "axios";
import PokemonList from "./index";

afterEach(cleanup);

it("fetches and displays data", async () => {
	const url = "https://pokeapi.co/api/v2/pokemon/";
	axios.get.mockResolvedValueOnce({
		data: {
			count: 1118,
			next: "https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20",
			previous: null,
			results: [
				{
					name: "bulbasaur",
					url: "https://pokeapi.co/api/v2/pokemon/1/",
				},
				{
					name: "ivysaur",
					url: "https://pokeapi.co/api/v2/pokemon/2/",
				},
			],
		},
	});

	axios.get.mockResolvedValueOnce({
		data: {
			count: 1118,
			next: "https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20",
			previous: null,
			results: [
				{
					name: "bulbasaur",
					url: "https://pokeapi.co/api/v2/pokemon/1/",
				},
				{
					name: "ivysaur",
					url: "https://pokeapi.co/api/v2/pokemon/2/",
				},
			],
		},
	});
	const { getByTestId } = render(<PokemonList />);
	expect(getByTestId("loading")).toHaveTextContent("loading...");
	const pokemonGrid = await waitFor(() => getByTestId("pokemons"));
	expect(pokemonGrid).toHaveTextContent("bulbasaur");
	expect(axios.get).toHaveBeenCalledTimes(1);
	expect(axios.get).toHaveBeenCalledWith(url);
});
