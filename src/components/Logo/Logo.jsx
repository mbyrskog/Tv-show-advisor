import { Box, Typography } from "@mui/material";

export function Logo({ image, title, subtitle }) {
  return (
    <Box
      sx={{
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Logo Image and Title */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <img src={image} alt="logo" style={{ width: 50, height: 50 }} />
        <Typography variant="h5" fontWeight="bold">
          {title}
        </Typography>
      </Box>

      {/* Subtitle */}
      <Typography variant="subtitle1" color="text.secondary">
        {subtitle}
      </Typography>
    </Box>
  );
}
