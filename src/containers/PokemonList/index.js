import React, { memo, useState, useEffect } from "react";
import PokemonCard from "../../components/Card";
import PokemonDetails from "../../components/PokemonDetails";
import axios from "axios";
import { NavBar, PokemonListGrid, PokemonListContainer } from "./styled";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import InfiniteScroll from "react-infinite-scroll-component";

function PokemonList() {
	const [pokemonData, setPokemonData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [isOpen, setIsOpen] = useState(false);
	const [pokemonDetails, setPokemonDetails] = useState({});
	const [nextUrl, setNextUrl] = useState(1);

	useEffect(() => {
		async function getData() {
			const res = await axios.get(`https://pokeapi.co/api/v2/pokemon`);
			setNextUrl(res.data.next);
			await pokemonInfos(res.data.results);
			setLoading(false);
		}
		getData();
		return () => {
			//setPage(1);
		};
	}, []);

	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "unset";
		}
	}, [isOpen]);

	const pokemonInfos = async (data, moreData) => {
		let pokemon = await axios.all(
			data.map(async (item) => {
				let pokemonResult = await axios.get(item.url);
				return pokemonResult.data;
			})
		);
		moreData
			? setPokemonData([...pokemonData, ...pokemon])
			: setPokemonData(pokemon);
	};

	const openModal = (pokemonInfos) => {
		setPokemonDetails(pokemonInfos);
		setIsOpen(true);
	};

	const closeModal = () => {
		setIsOpen(false);
	};

	const fetchMoreData = async () => {
		let nextPokemons = await axios.get(nextUrl);
		setNextUrl(nextPokemons.data.next);
		await pokemonInfos(nextPokemons.data.results, true);
	};

	return (
		<PokemonListContainer>
			<NavBar>
				<img
					src="https://pngimg.com/uploads/pokeball/pokeball_PNG13.png"
					alt="pokeball"
				/>
				<a href="#">Pokedex</a>
			</NavBar>
			{loading ? (
				<h1>loading...</h1>
			) : (
				<InfiniteScroll
					dataLength={pokemonData.length}
					next={fetchMoreData}
					hasMore={pokemonData.length < 1118}
					loader={
						<div
							dangerouslySetInnerHTML={{
								__html:
									"<img class='rotate' width='90' height='90' src='https://pngimg.com/uploads/pokeball/pokeball_PNG24.png' /><div>Loading...</div>",
							}}
							className="loading"
						></div>
					}
				>
					<PokemonListGrid>
						{pokemonData.map((pokemon) => (
							<PokemonCard
								key={pokemon.id}
								id={pokemon.id}
								name={pokemon.name}
								image={pokemon.sprites.other["official-artwork"].front_default}
								types={pokemon.types}
								openModal={openModal}
								pokemon={pokemon}
							/>
						))}
					</PokemonListGrid>
				</InfiniteScroll>
			)}
			<Modal
				open={isOpen}
				onClose={closeModal}
				center
				classNames={{
					modal: "pokemon_modal",
				}}
				styles={{
					modal: { backgroundColor: "#2fa8d6", borderRadius: 10 },
				}}
			>
				<PokemonDetails
					closeModal={closeModal}
					pokemonDetails={pokemonDetails}
				/>
			</Modal>
		</PokemonListContainer>
	);
}

export default memo(PokemonList);
