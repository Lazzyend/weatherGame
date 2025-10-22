import { useState } from "react";
import styled from "styled-components";
import { AnswerBlock } from "../components/AnswerBlock";
import { GuessBlock } from "../components/GuessBlock";
import { ResultBlock } from "../components/ResultBlock";
import { fetchCityTempCelsius } from "../services/weatherApi";
import { pickRandomCities } from "../config/cities";
import { tempDiffToSuccess } from "../config/constants";

export const HomePage = () => {
  const [userAnswers, setUserAnswers] = useState([]);
  const [step, setStep] = useState(0);
  const [score, setScore] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [error, setError] = useState("");

  const citiesList = pickRandomCities(5);

  const handleGuess = async (guess) => {
    setError("");
    const city = citiesList[step];

    try {
      const realTemp = await fetchCityTempCelsius(city);

      const diff = Math.abs(realTemp - guess);
      const isCorrect = diff <= tempDiffToSuccess;
      if (isCorrect) setScore((s) => s + 1);

      setUserAnswers((prev) => [
        ...prev,
        { city, guess, realTemp, correct: isCorrect },
      ]);

      if (step === citiesList.length - 1) setIsGameOver(true);
      else setStep((s) => s + 1);
    } catch (e) {
      setError(e?.message || "Failed to load weather");
    }
  };

  const handleRestart = () => {
    setUserAnswers([]);
    setStep(0);
    setScore(0);
    setIsGameOver(false);
    setError("");
  };

  return (
    <Wrapper>
      {!isGameOver ? (
        <>
          <GuessBlock
            city={citiesList[step]}
            onGuess={handleGuess}
            step={step}
            total={citiesList.length}
          />
          {error && <ErrorText>{error}</ErrorText>}
        </>
      ) : (
        <>
          <ResultBlock score={score} total={citiesList.length} />
          <RestartButton onClick={handleRestart}>Restart Game</RestartButton>
        </>
      )}

      <AnswerBlock userAnswers={userAnswers} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem;
`;

const RestartButton = styled.button`
  margin-top: 1rem;
  padding: 0.6rem 1.2rem;
  background-color: #05b122f1;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  transition: 0.2s;
  &:hover {
    background-color: #0dd12ef1;
  }
`;

const ErrorText = styled.div`
  margin-top: 0.5rem;
  font-size: 0.95rem;
  color: #b00020;
`;
