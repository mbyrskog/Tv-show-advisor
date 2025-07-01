import { Box, Typography, Stack } from "@mui/material";
import { FiveStarRating } from "../FiveStarRating/FiveStarRating";
import { TVShow } from "../../Services/TVShowService";

interface TVShowDetailProps {
  tvShow: TVShow;
}

export const TVShowDetail = ({ tvShow }: TVShowDetailProps) => {
  const rating = tvShow.vote_average / 2;

  return (
    <Box sx={{ mx: "auto", mt: 4 }}>
      {/* Title */}
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        {tvShow.name}
      </Typography>

      {/* Rating Section */}
      <Stack direction="row" spacing={1} mb={2}>
        <FiveStarRating rating={rating} />
        <Typography variant="body1" color="text.secondary">
          {rating.toFixed(1)}/5
        </Typography>
      </Stack>

      {/* Overview */}
      <Typography variant="body1" color="text.secondary">
        {tvShow.overview}
      </Typography>
    </Box>
  );
};
