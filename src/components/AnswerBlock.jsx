import styled from "styled-components";
import { Row } from "./Row";

export const AnswerBlock = ({ userAnswers }) => {
  if (userAnswers.length === 0) return null;

  return (
    <Wrapper>
      <Title>Guesses & Answers</Title>
      <Grid>
        {userAnswers.map((answer) => (
          <Card key={answer.city} $correct={answer.correct}>
            <Row title='City: ' value={answer.city} />
            <Row title='Guess: ' value={answer.guess} />
            <Row title='Correct: ' value={answer.realTemp} />
          </Card>
        ))}
      </Grid>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
  padding: 0 1rem;
`;

const Title = styled.h3`
  margin-bottom: 1rem;
  font-size: 1.4rem;
  text-align: center;

  @media (max-width: 767px) {
    font-size: 1.1rem;
  }
`;

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
`;

const Card = styled.div`
  border: 2px solid #333;
  border-radius: 8px;
  background-color: ${({ $correct }) => ($correct ? "#b7f7b7" : "#ffb3b3")};
  padding: 0.8rem 1rem;
  width: 160px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

  @media (max-width: 767px) {
    width: 130px;
    padding: 0.6rem 0.8rem;
  }
`;

