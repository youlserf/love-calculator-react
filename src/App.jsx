import Form from "./components/Form/Form";
import Card from "./components/Card/Card";
import { StyledContainer, StyledH1 } from "./components/GeneralComponents";
import { useState } from "react";
import Button from "./components/Button/Button";

const App = () => {
  const [loveData, setLoveData] = useState();

  const clear = () => {
    setLoveData();
  };

  return (
    <StyledContainer>
      {loveData ? (
        <StyledH1>PiKachu says</StyledH1>
      ) : (
        <StyledH1>Go ask Pikachu for your true love</StyledH1>
      )}

      <div
        style={{
          marginTop: "5rem",
          display: "flex",
          padding: "2rem",
          backgroundColor: "#ffc40087",
          borderRadius: "1rem",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
          maxHeight: "70%",
          maxWidth: "80%",
          overflow: "hidden",
        }}
      >
        {loveData ? (
          <>
            <Card loveData={loveData} />
            <Button handleSubmit={clear} text="New ask" />
          </>
        ) : (
          <Form changeLoveData={setLoveData} />
        )}
      </div>
    </StyledContainer>
  );
};

export default App;
