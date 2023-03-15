import { render, screen, cleanup, getAllByRole } from '@testing-library/react';
import Navigation from '../components/Navigation';

describe("Navigation component", () =>{
    afterEach(cleanup)

    it("renders nav element", () =>{
        render(<Navigation/>)
        const navElement = screen.getByRole('navigation') 
        expect(navElement).toBeInTheDocument()
    })

    it("renders ul element in a nav tag", () =>{
        render(<Navigation/>)
        const ulElement = screen.getByRole("list") 
        expect(ulElement.parentElement.tagName).toBe("NAV")
    })

it("renders listitems within list", () => {
    render(<Navigation/>)
    const listItems = screen.getAllByRole("listitem")
    listItems.forEach(listItem =>   expect(listItem.parentElement.tagName).toBe("UL"))
 
})

    it("renders 'about' link in a list-item", () =>{
        render(<Navigation/>)
        const aboutElm = screen.getByRole('link', {name: /about/i})
        expect(aboutElm).toBeInTheDocument()
        expect(aboutElm.parentElement.tagName).toBe("LI")
    })

    it("renders 'contact' link in a list-item", () =>{
        render(<Navigation/>)
        const contactElm = screen.getByRole('link', {name: /contact/i})
        expect(contactElm).toBeInTheDocument()
        expect(contactElm.parentElement.tagName).toBe("LI")
    })

   

})