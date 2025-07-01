import { useState } from "react";
import { Input } from "@mui/material";

interface SearchBarProps {
  onSubmit: (query: string) => void;
}

export const SearchBar = ({ onSubmit }: SearchBarProps) => {
  const [value, setValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && e.currentTarget.value.trim() !== "") {
      onSubmit(e.currentTarget.value);
      setValue("");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <Input
      id="searchInput11111111111111111111111"
      type="search"
      fullWidth
      disableUnderline
      placeholder={isFocused ? "" : "Find a TV show you may like"}
      value={value}
      onChange={handleChange}
      onKeyUp={handleSubmit}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      inputProps={{
        style: {
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "18px",
          color: "white",
        },
      }}
      sx={{
        maxWidth: "500px",
        borderRadius: 10,
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        backdropFilter: "blur(5px)",
        color: "white",
        padding: 2,
      }}
    />
  );
};
