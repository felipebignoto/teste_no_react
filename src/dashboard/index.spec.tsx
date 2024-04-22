import { render,screen } from "@testing-library/react"
import Dashboard from "."

describe("Testa o componente Dashboard",() =>{
    test("Deve ter titulo",async () => {
        render(<Dashboard/>)
        const title = await screen.findByRole("heading")
        expect(title).toHaveTextContent("Dashboard")
    })
})