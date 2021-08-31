import React from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@material-ui/core";

const CardProject = ({ title, desc, url, img }) => {
  return (
    <>
      <Card>
        <CardMedia
          component="img"
          alt={title}
          height="100"
          image={img}
          title={title}
        />
        <CardActionArea onClick={() => window.open(url, "_blank")}>
          <CardContent style={{ minHeight: 80 }}>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {desc}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};

export default CardProject;
