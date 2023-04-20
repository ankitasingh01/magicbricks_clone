import React, { useState, useContext } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Button, Grid } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import DeleteIcon from "@mui/icons-material/Delete";
import Bedroom from "../assets/Bedroom.png";
import EntranceRoom from "../assets/EntranceRoom.png";
import LivingRoom from "../assets/LivingRoom.png";
import LivingRoomWithNoKitchen from "../assets/LivingRoomWithNoKitchen.png";
import StudyRoom from "../assets/StudyRoom.png";
import TVRoom from "../assets/TVRoom.png";
import Paper from "@mui/material/Paper";
import "./ListedProperties.styles.scss";
import { ListedPropertiesContext } from "../context/ListedPropertiesContextProvider";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  margin: "20px",
  padding: "5px",
  color: theme.palette.text.secondary
}));

export default function ListedProperties() {
  const { allData, isLoading, error } = useContext(ListedPropertiesContext);
  console.log("allData", allData);
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleImage = (ObjectImage) => {
    switch (ObjectImage) {
      case "Bedroom":
        return Bedroom;
        break;
      case "EntranceRoom":
        return EntranceRoom;
        break;
      case "LivingRoom":
        return LivingRoom;
        break;
      case "LivingRoomWithNoKitchen":
        return LivingRoomWithNoKitchen;
        break;
      case "StudyRoom":
        return StudyRoom;
        break;
      case "TVRoom":
        return TVRoom;
        break;
      default:
        return Bedroom;
        break;
    }
  };

  return (
    <Item elevation={6}>
      <Grid container spacing={8} justifyContent="center">
        {allData.length &&
          allData.map(({ title, body, id, userId, ObjectImage }) => (
            <Grid item key={id}>
              <Card className="card-container" sx={{ maxWidth: 345 }}>
                <CardHeader
                  className="card-container-header"
                  action={
                    <>
                      <IconButton aria-label="settings">
                        <MoreVertIcon />
                      </IconButton>
                      <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                      </IconButton>
                      <IconButton aria-label="share">
                        <ShareIcon />
                      </IconButton>
                    </>
                  }
                  title={title}
                  subheader="September 14, 2016"
                />
                <CardMedia
                  component="img"
                  height="194"
                  image={handleImage(ObjectImage)}
                  alt="Paella dish"
                />
                <CardContent className="card-content-container-child">
                  <Typography variant="body2" color="text.secondary">
                    {body}
                  </Typography>
                </CardContent>

                <CardActions>
                  <Grid container direction="row" spacing={18}>
                    <Grid item>
                      <Button size="small">Learn More</Button>
                    </Grid>
                    <Grid item>
                      <EditIcon />
                      <ContentCopyIcon />
                      <DeleteIcon />
                    </Grid>
                  </Grid>
                </CardActions>
              </Card>
            </Grid>
          ))}
      </Grid>
    </Item>
  );
}
