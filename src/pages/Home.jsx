import { HomeButton, HomeContainer, HomeContent, HomeDesc, HomeImg, HomeTitle } from "../styles/home.css";
import HomeHero from "../assets/images/home-hero.png"

export default function Home() {

  return (
    <HomeContainer>
      <HomeImg src={HomeHero} alt="mountain landscape" />
      <HomeContent>
        <HomeTitle>You got the travel plans, we got the travel vans.</HomeTitle>
        <HomeDesc>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</HomeDesc>
        <HomeButton to="/vans">Find your van</HomeButton>
      </HomeContent>
    </HomeContainer>
  )
}