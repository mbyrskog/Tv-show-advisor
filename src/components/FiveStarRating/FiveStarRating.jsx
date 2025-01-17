import { Rating } from "@mui/material";

export function FiveStarRating({ rating }) {
  return <Rating value={rating} precision={0.5} readOnly />;
}
