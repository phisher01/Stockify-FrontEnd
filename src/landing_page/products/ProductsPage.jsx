import Hero from "./Hero";
import LeftSection from "./LeftSection"
import RightSection from "./RightSection";
import Universe from "./Universe";
export default function ProductsPage() {

    return (
        <>
            <Hero></Hero>
            <LeftSection imageURL="media/images/kite.png" productName="Kite" productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices." tryDemo="" learnMore=" " googlePlay=" " appStore=""> </LeftSection>
            <RightSection tryDemo="" learnMore=""  googlePlay=" " imageURL="media/images/console.png " productName="Console" productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."></RightSection>
            <LeftSection imageURL="media/images/coin.png" productName="Coin" productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices." tryDemo="" learnMore=" " googlePlay=" " appStore=""> </LeftSection>
            <RightSection imageURL="media/images/kiteconnect.png"  productName="Kite Connect API" tryDemo=" " learnMore="" productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase." ></RightSection>
                      <LeftSection imageURL="media/images/varsity.png" productName="Varsity mobile" productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go." tryDemo="" learnMore=" " googlePlay=" " appStore=""> </LeftSection>
                      <h5 className="text-center mt-5 mb-5">Want to know more about our technology stack? Check out the Zerodha.tech blog.</h5>
<Universe></Universe>
        </>
    )
}