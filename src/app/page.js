import { Grid } from '@mui/material';
import React from 'react';
import LatestNews from './components/ui/latestNews/LatestNews';

const HomePage = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={8} className='mt-10'>
          <div className='border-b-2 relative'>
            <h1 className='border-b-4 border-red-500 max-w-[40%] -mb-[3px]'>
              <span className='block ml-8 font-bold md:text-3xl'>National News</span>
            </h1>
          </div>
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