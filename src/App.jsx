import { useEffect, useState } from "react";
import { TVShowService } from "./api/TVShowService";
import { VITE_BACKDROP_BASE_URL } from "./config";
import { TVShowDetail } from "./components/TVShowDetail/TVShowDetail";
import { Logo } from "./components/Logo/Logo";
import logoImg from "/assets/images/logo.png";
import { TVShowList } from "./components/TVShowList/TVShowList";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { Box, Container, Grid2 } from "@mui/material";

export function App() {
  const [currentTVShow, setCurrentTVShow] = useState();
  const [recommendationList, setRecommendationList] = useState([]);

  useEffect(() => {
    fetchPopulars();
  }, []);

  useEffect(() => {
    if (currentTVShow) {
      fetchRecommendations(currentTVShow.id);
    }
  }, [currentTVShow]);

  async function fetchPopulars() {
    try {
      const popularTVShowList = await TVShowService.fetchPopulars();
      if (popularTVShowList.length > 0) {
        setCurrentTVShow(popularTVShowList[0]);
      }
    } catch (error) {
      alert("Something went wrong when fetching the popular TV shows");
    }
  }

  async function fetchRecommendations(tvShowId) {
    try {
      const recommendationListResp = await TVShowService.fetchRecommendations(
        tvShowId
      );
      if (recommendationListResp.length > 0) {
        setRecommendationList(recommendationListResp.slice(0, 10));
      }
    } catch (error) {
      alert("Something went wrong fetching the recommendations");
    }
  }

  function updateCurrentTVShow(tvShow) {
    setCurrentTVShow(tvShow);
  }

  async function fetchByTitle(title) {
    try {
      const searchResponse = await TVShowService.fetchByTitle(title);
      if (searchResponse.length > 0) {
        setCurrentTVShow(searchResponse[0]);
      }
    } catch (error) {
      alert("Something went wrong searching for a TV show");
    }
  }

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: currentTVShow
          ? `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url("${VITE_BACKDROP_BASE_URL}${currentTVShow.backdrop_path}") no-repeat center / cover`
          : "black",
        color: "white",
        p: 6,
      }}
    >
      {/* Header */}
      <Box>
        <Grid2 container spacing={2} alignItems="center">
          <Grid2 xs={12} md={4} lg={4}>
            <Logo
              title="What to watch"
              subtitle="Find a show you may like"
              image={logoImg}
            />
          </Grid2>

          {/* Search bar */}
          <Grid2 xs={12} md={8} lg={8} sx={{ display: "flex", flexGrow: 1 }}>
            <SearchBar onSubmit={fetchByTitle} />
          </Grid2>
        </Grid2>
      </Box>

      {/* TV Show Details */}
      <Box sx={{ mt: 4 }}>
        {currentTVShow && <TVShowDetail tvShow={currentTVShow} />}
      </Box>

      {/* Recommended Shows */}
      <Box sx={{ mt: 10 }}>
        {currentTVShow && (
          <TVShowList
            onClickItem={updateCurrentTVShow}
            tvShowList={recommendationList}
          />
        )}
      </Box>
    </Box>
  );
}

export default App;
