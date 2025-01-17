import { useState } from "react";
import { TextField } from "@mui/material";
import { Input } from "@mui/material";

export function SearchBar({ onSubmit }) {
  const [value, setValue] = useState("");

  function handleSubmit(e) {
    if (e.key === "Enter" && e.target.value.trim() !== "") {
      onSubmit(e.target.value);
      setValue("");
    }
  }

  function handleChange(e) {
    setValue(e.target.value);
  }

  return (
    <Input
      fullWidth
      disableUnderline
      placeholder="Find a TV show you may like"
      value={value}
      onChange={handleChange}
      onKeyUp={handleSubmit}
      sx={{
        maxWidth: "1000px",
        borderRadius: 10,
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        backdropFilter: "blur(5px)",
        color: "white",
        padding: 2,
      }}
    />
  );
}
