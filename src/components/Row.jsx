import styled from "styled-components";

export const Row = ({ title, value }) => {
  return (
    <Wrapper>
      <Label>{title}</Label>
      <Value>{value}</Value>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0.3rem 0;
`;

const Label = styled.span`
  font-weight: bold;
  font-size: 0.9rem;

  @media (max-width: 767px) {
    font-size: 0.8rem;
  }
`;

const Value = styled.span`
  font-size: 1rem;

  @media (max-width: 767px) {
    font-size: 0.9rem;
  }
`;
