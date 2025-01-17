import { TVShowListItem } from "../TVShowListItem/TVShowListItem";
import { Box, Typography } from "@mui/material";

export function TVShowList({ tvShowList, onClickItem }) {
  return (
    <Box
      sx={{
        maxWidth: "100%",
        overflowX: "auto",
        whiteSpace: "nowrap",
        mt: 3,
        p: 2,
      }}
    >
      {/* Title */}
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        You will probably like:
      </Typography>

      {/* Scrollable TV Show List */}
      <Box sx={{ display: "inline-flex", gap: 2 }}>
        {tvShowList.map((tvShow) => (
          <TVShowListItem
            key={tvShow.id}
            onClick={onClickItem}
            tvShow={tvShow}
          />
        ))}
      </Box>
    </Box>
  );
}
