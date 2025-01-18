import { useState } from "react";
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
        maxWidth: "700px",
        fontSize: "1.4rem",
        borderRadius: 10,
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        backdropFilter: "blur(5px)",
        color: "white",
        padding: 2,
      }}
    />
  );
}
