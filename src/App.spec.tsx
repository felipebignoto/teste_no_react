import { render, screen } from "@testing-library/react";
import App from "./App";

describe("testa o component App", () => {

  test("Deve haver 2 titulos na pagina",async () => {
    render(<App />)

    const title = await screen.findAllByRole("heading")
    expect(title).toHaveLength(2);
    
  });

  test("Deve haver um titulo escrito 'Hello world' ",async () => {
    render(<App />)

    const title = await screen.findByRole("heading",{name: "Hello world",})
    expect(title).toBeInTheDocument()
    })
})