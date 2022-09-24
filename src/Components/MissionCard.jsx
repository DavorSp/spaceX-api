import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";
import Grid from "@mui/material/Grid"; // Grid version 1
import Grid2 from "@mui/material/Unstable_Grid2"; // Grid version 2
import "./MissionCard.css";
import { Link } from "react-router-dom";
import MissionInfoCard from "./MissionInfoCard";
import MissionInfoPage from "../Pages/MissionInfoPage";

const Container = styled.div`
  display: flex;
  flex-order: 1;
  align-items: center;
  flex-wrap: wrap;
`;



const MISSION_QUERY = gql`
{
  launchesPast {
    links {
      flickr_images
    }
    id
    rocket {
      rocket {
        id
      }
    }
    mission_name
  }
}

`;

export default function MissionCard() {
  const { loading, error, data } = useQuery(MISSION_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.launchesPast.map((launch)=>
      
  {
    if (!launch.links.flickr_images.length < 1) {

    
       
        return (
          <Grid xs={4}>
          
        
          <Link  
          to={{pathname: '/Info' ,
                      hash:"#" + launch.rocket.rocket.id}} >
                        <span onClick="window.location.reload()">

                        
              <Card 
                sx={{
                  decoration: 'none',
                  background: 'black',
                  maxWidth: "100%",
                  margin: "20px",
                  height: "50vh",
                  opacity: "90%",
                  border: "none",
                  padding: "0px",
                  
                }}
              >
                <CardMedia
                  sx={{ maxWidth: "100%", height: "300px" }}
                  component="img"
                  height="140"
                  image={launch.links.flickr_images[0]}
                  alt="green iguana"
                />

                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {launch.mission_name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                  ></Typography>
                </CardContent>
                <CardActions sx={{ display: "flex", justifyContent: "center" }}>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
              </span>
            </Link>
           
          </Grid>
        );}
      
    });
  }

