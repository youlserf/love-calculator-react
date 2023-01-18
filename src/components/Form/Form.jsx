import { useState } from "react";
import "./form.css";
import { FormControl, TextField } from "@mui/material";
import Button from "../Button/Button";

const Form = ({ changeLoveData }) => {
  const [couple, setCouple] = useState({ sname: "", fname: "" });

  const handleChange = (e) => {
    setCouple({ ...couple, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch(
      `https://love-calculator.p.rapidapi.com/getPercentage?sname=${couple.sname}&fname=${couple.fname}`,
      {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": "you key",
          "X-RapidAPI-Host": "love-calculator.p.rapidapi.com",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        changeLoveData(data);
      })
      .catch((error) => console.error(error));
  };
  return (
    <>
      <FormControl
        sx={{
          display: "flex",
          gap: "1rem",
        }}
      >
        <div
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.542)",
            borderRadius: "5px",
            display: "flex",
            flexDirection: "column",
            padding: "5px",
            color: "white",
            fontWeight: "bold",
            fontSize: "3vh",
            gap: "3px",
          }}
        >
          <label for="sname">Name one</label>
          <TextField
            id="sname"
            name="sname"
            color=""
            onChange={handleChange}
            sx={{
              backgroundColor: "white",
              borderRadius: "5px",
            }}
          />
        </div>

        <div
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.542)",
            borderRadius: "5px",
            display: "flex",
            flexDirection: "column",
            padding: "5px",
            color: "white",
            fontWeight: "bold",
            fontSize: "3vh",
            gap: "3px",
          }}
        >
          <label for="fname">Name two</label>
          <TextField
            id="fname"
            name="fname"
            color=""
            onChange={handleChange}
            sx={{
              backgroundColor: "white",
              borderRadius: "5px",
            }}
          />
        </div>
        <Button handleSubmit={handleSubmit} text="Is He/She my really love?" />
      </FormControl>
    </>
  );
};

export default Form;
