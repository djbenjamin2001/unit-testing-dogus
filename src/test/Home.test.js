import { render, screen, cleanup } from '@testing-library/react';
import Home from '../pages/Home';
describe("Home Component",() => {
afterEach(cleanup)


it("renders Home headline", () => {
      render(<Home/>)
    const headlineElement = screen.getByText(/home/i)
    expect(headlineElement).toBeInTheDocument()
})

it("renders option to log in in a button", () => {
      render(<Home/>)
    const loginElement = screen.getByText(/log in/i).closest("button")
    expect(loginElement).toBeInTheDocument()
})



/*it("renders log in button", () =>{ 
    render(<Home/>)
  const loginButton = screen.getAllByText((_, element) =>
    element.tagName === "BUTTON"
  )[0]
    expect(loginButton).toBeInTheDocument()   
})*/

}) 


 
   
