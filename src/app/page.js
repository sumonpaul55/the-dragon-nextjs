import { Grid } from '@mui/material';
import React from 'react';
import LatestNews from './components/ui/latestNews/LatestNews';

const HomePage = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <h1>Latest News</h1>
          <LatestNews></LatestNews>
        </Grid>
        <Grid item xs={4}>
          <h1>Side bar</h1>
        </Grid>
      </Grid>
    </>
  );
};

export default HomePage;