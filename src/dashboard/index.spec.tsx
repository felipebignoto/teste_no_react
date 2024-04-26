import { render,screen } from "@testing-library/react"
import Dashboard from "."

describe("Testa o componente Dashboard",() =>{
    test("Deve ter titulo",async () => {
        render(<Dashboard/>)
        const title = await screen.findByRole("heading")
        expect(title).toHaveTextContent("Dashboard")
    })

    test("deve haver uma lista com 10 pokemons",async () => {
        render(<Dashboard/>)
        const items = await screen.findAllByRole("listitem")
        expect(items).toHaveLength(10)
    })
})