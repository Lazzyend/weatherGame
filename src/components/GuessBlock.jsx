import { useState } from "react";
import styled from "styled-components";

/**
 * Props:
 *  - city: string
 *  - onGuess: (number) => Promise<void> | void
 *  - step: number (0-based)
 *  - total: number
 *  - isLoading?: boolean
 */
export const GuessBlock = ({
  city,
  onGuess,
  step,
  total,
  isLoading = false,
}) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value === "") return;
    onGuess(Number(value));
    setValue("");
  };

  return (
    <Wrapper>
      <Header>
        Guess the temperature in <strong>{city}</strong>
      </Header>
      <Subheader>
        Question {step + 1} / {total}
      </Subheader>
      <form onSubmit={handleSubmit}>
        <FormRow>
          <Input
            type="number"
            inputMode="decimal"
            step="0.1"
            placeholder="Enter °C"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            disabled={isLoading}
          />
          <Button type="submit" disabled={value === "" || isLoading}>
            {isLoading ? "Checking..." : "Submit"}
          </Button>
        </FormRow>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  margin: 2rem 0;
`;

const Header = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
`;

const Subheader = styled.div`
  font-size: 0.95rem;
  opacity: 0.8;
  text-align: center;
`;

const FormRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  @media (max-width: 360px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Input = styled.input`
  margin-right: 0.5rem;
  padding: 0.4rem 0.6rem;
  border: 1px solid #ccc;
  border-radius: 6px;
`;

const Button = styled.button`
  padding: 0.45rem 0.9rem;
  border: none;
  border-radius: 6px;
  background: #2c7be5;
  color: #fff;
  cursor: pointer;
  font-weight: 600;
  &:disabled {
    opacity: 0.6;
    cursor: default;
  }
`;
