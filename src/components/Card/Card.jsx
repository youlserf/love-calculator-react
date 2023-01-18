import { StyledCardDiv } from "../GeneralComponents";
import "./card.css";

const Card = ({ loveData }) => {
  /* fname
    : 
    "asd"
    percentage
    : 
    "17"
    result
    : 
    "Not a good choice."
    sname
    : 
    "asd}" */
  return (
    <>
      <h1
        style={{
          fontWeight: "bold",
          fontSize: "5vh",
          margin: 0,
        }}
      >
        {loveData.percentage}%
      </h1>
      <StyledCardDiv>
        <label for="sname">Name one</label>
        <p
          type="text"
          name="text"
          className="input"
          placeholder="Numbers only or shake"
        >
          {loveData.sname}
        </p>
      </StyledCardDiv>

      <StyledCardDiv>
        <label for="sname">Name two</label>
        <p
          type="text"
          name="text"
          className="input"
          placeholder="Numbers only or shake"
        >
          {loveData.fname}
        </p>
      </StyledCardDiv>

      <p
        style={{
          fontWeight: "bold",
          fontSize: "5vh",
          margin: 0,
          textAlign: "center",
        }}
      >
        {loveData.result}
      </p>

      <img
        src={
          parseInt(loveData.percentage) > 50
            ? "../../public/pikachu_happy.jpg"
            : "../../public/pikachu_sad.png"
        }
        style={{
          maxHeight: "10rem",
          borderRadius: "15px",
        }}
      />
      {/* <p style={{ margin: 0, padding: 0, fontSize: "15vh" }}>
        {parseInt(loveData.percentage) > 50 ? "🥰" : "😢"}
      </p> */}
    </>
  );
};

export default Card;
