import { render,screen } from "@testing-library/react"
import Dashboard from "."
import { fetchPokemonList } from "../../services/PokemonService"
import { faker } from "@faker-js/faker";

const mockFetchListPokemonFn = vi
  .fn(fetchPokemonList)
  .mockImplementation(async () => {
    return [
      {
        id: 1,
        name: "Pikachu",
        image: faker.image.urlPlaceholder(),
        type: "Eletrico",
      },
      {
        id: 2,
        name: "Charmander",
        image: faker.image.urlPlaceholder(),
        type: "Fogo",
      },
    ];
  });


describe("Testa o componente Dashboard",() =>{
    test("Deve ter titulo",async () => {
        render(<Dashboard fetchPokemonList={mockFetchListPokemonFn}/>)
        const title = await screen.findByRole("heading")
        expect(title).toHaveTextContent("Dashboard")
    })

    test("deve haver uma lista com 10 pokemons",async () => {
        render(<Dashboard fetchPokemonList={mockFetchListPokemonFn}/>)
        const items = await screen.findAllByRole("listitem")
        expect(items).toHaveLength(2)
    })
})