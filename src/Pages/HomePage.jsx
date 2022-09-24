import React from 'react'
import MissionCard from '../Components/MissionCard'
import { Grid } from '@mui/material';

export default function HomePage() {
  return (
    <div>
        <Grid container  columns={12}>
      <MissionCard></MissionCard>
      </Grid>

    </div>
  )
}
