import { TVShow } from "../../Services/TVShowService";
import { TVShowListItem } from "../TVShowListItem/TVShowListItem";
import { Box, Typography } from "@mui/material";

interface TVShowListProps {
  tvShowList: TVShow[];
  onClickItem: (tvShow: TVShow) => void;
}

export const TVShowList = ({ tvShowList, onClickItem }: TVShowListProps) => {
  return (
    <>
      <Box>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          You will probably like:
        </Typography>
      </Box>
      <Box
        sx={{
          maxWidth: "100%",
          overflowX: "auto",
          whiteSpace: "nowrap",
        }}
      >
        {/* Scrollable TV Show List */}
        <Box sx={{ display: "inline-flex", gap: 2, mb: 2 }}>
          {tvShowList.map((tvShow) => (
            <TVShowListItem
              key={tvShow.id}
              onClick={onClickItem}
              tvShow={tvShow}
            />
          ))}
        </Box>
      </Box>
    </>
  );
};
