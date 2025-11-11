import { useState } from "react";
import { Input } from "@mui/material";

interface SearchBarProps {
  onSubmit: (query: string) => void;
}

export const SearchBar = ({ onSubmit }: SearchBarProps) => {
  const [value, setValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (value.trim() !== "") {
      onSubmit(value);
      setValue("");
      (document.getElementById("searchInput") as HTMLInputElement)?.blur();
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ width: "100%" }}>
      <Input
        id="searchInput"
        type="search"
        autoComplete="off"
        fullWidth
        disableUnderline
        placeholder={isFocused ? "" : "Find a TV show you may like"}
        value={value}
        onChange={(e) => setValue(e.target.value)}
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
    </form>
  );
};
