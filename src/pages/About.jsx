import { AboutButtonContainer,
     AboutCatchPhrase,
     AboutContainer,
     AboutDesc,
     AboutHeroImg,
     AboutLink,
     AboutTitle } from "../styles/about.css";
import AboutHero from "../assets/images/about-hero.png";

export default function About() {
    return (
        <>
            <AboutHeroImg src={AboutHero} alt="man starring at the sky by night on top of his van" />
            <AboutContainer>
                <AboutTitle>Don’t squeeze in a sedan when you could relax in a van.</AboutTitle>
                <AboutDesc>
                    Our mission is to enliven your road trip with the perfect travel van rental. 
                    Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
                    (Hitch costs extra 😉)
                </AboutDesc>
                <AboutDesc>
                    Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.
                </AboutDesc>
                <AboutButtonContainer>
                    <AboutCatchPhrase>Your destination is waiting.<br/>Your van is ready.</AboutCatchPhrase>
                    <AboutLink to="/vans">
                        Explore our vans
                    </AboutLink>
                </AboutButtonContainer>
            </AboutContainer>  
        </> 
    )
}