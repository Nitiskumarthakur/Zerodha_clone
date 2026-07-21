import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Univers from "./Univers";

function ProductPage() {
    return (
        <>
            <Hero />
            <LeftSection
                imageURL="	https://zerodha.com/static/images/products-kite.png"
                P_name="Kite"
                P_paragraph="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
                try_demo="Try demo →"
                learn_more="Learn more →"
                play_Store="https://zerodha.com/static/images/google-play-badge.svg"
                app_Store="https://zerodha.com/static/images/appstore-badge.svg"
            />
            <RightSection
                imageURL="https://zerodha.com/static/images/products-console.png"
                P_name="Console"
                P_paragraph="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
                try_demo=""
                learn_more="Learn more →"
                play_Store=""
                app_Store=""
            />
            <LeftSection
                imageURL="https://zerodha.com/static/images/products-coin.png"
                P_name="Coin"
                P_paragraph="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
                try_demo="Coin  →"
                learn_more=""
                play_Store="https://zerodha.com/static/images/google-play-badge.svg"
                app_Store="https://zerodha.com/static/images/appstore-badge.svg"
            />
            <RightSection
                imageURL="https://zerodha.com/static/images/kite-trade/landing.svg"
                P_name="Kite Connect API"
                P_paragraph="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
                try_demo=""
                learn_more="Kite Connect  →"
                play_Store=""
                app_Store=""
            />
             <LeftSection
                imageURL="https://zerodha.com/static/images/varsity-products.svg"
                 
                P_name="Varsity mobile"
                P_paragraph="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
                try_demo=""
                learn_more=""
                play_Store="https://zerodha.com/static/images/google-play-badge.svg"
                app_Store="https://zerodha.com/static/images/appstore-badge.svg"
            />
            <Univers />
        </>
    )
}
export default ProductPage;