import { citiesLength } from "../config/constants";

export const ResultBlock = ({ score, total }) => (
  <div style={{ textAlign: "center", marginTop: "2rem" }}>
    <h2>Game Over</h2>
    <h3>
      You got {score} out of {total} right
    </h3>
    <h1>{score >= Math.ceil(citiesLength / 2) ? "You won!" : "You lost"}</h1>
  </div>
);
