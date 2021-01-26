import styled from 'styled-components'
import db from "../db.json"
import Widget from "../src/components/Widget"
import QuizBackground from "../src/components/QuizBackground"
import Footer from "../src/components/Footer"
import GitHubCorner from "../src/components/GitHubCorner"

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.secondary};
`;

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  return (
    <QuizBackground backgroundImage = {db.bg}>
      <QuizContainer>
        <Widget>
          <Widget.header>
            <h1>The legend of zelda!</h1>
          </Widget.header>
          <Widget.content>
            <p>Lorem ipsum dolor sit amet...</p>
          </Widget.content>
        </Widget>
        <Widget>
          <Widget.content>
            <h1>Quizzes da galera!</h1>
            <p>Lorem ipsum dolor sit amet...</p>
          </Widget.content>
        </Widget>
        <Footer/>
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/JoaoFilhoG3"/>
    </QuizBackground>
  );
}
