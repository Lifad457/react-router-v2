import { HomeButton, HomeContainer, HomeContent, HomeDesc, HomeTitle } from "../styles/home.css";

export default function Home() {

  return (
    <HomeContainer>
      <HomeContent>
        <HomeTitle>You got the travel plans, we got the travel vans.</HomeTitle>
        <HomeDesc>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</HomeDesc>
        <HomeButton to="/vans">Find your van</HomeButton>
      </HomeContent>
    </HomeContainer>
  )
}