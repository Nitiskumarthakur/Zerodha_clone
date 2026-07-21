//Not working the code we install the vite.
import React from "react";
import {render, screen} from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import Hero from "../landing_page/home/Hero";


describe("Hero component", ()=>{
    test("render hero image", ()=>{
        render(<Hero/>);
        const heroImage = screen.getByAltText("heroImage");
        expect(heroImage).toBeInTheDocument();
       // expect(heroImage).toHaveAttribute("src", "https://zerodha.com/static/images/landing.svg")
    })
})


