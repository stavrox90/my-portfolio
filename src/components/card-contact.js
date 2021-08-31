import { Avatar, CardHeader, Card, CardActionArea } from "@material-ui/core";
import React from "react";

const CardContact = ({ title, icon, url, value }) => (
  <>
    <Card>
      <CardActionArea onClick={() => window.open(url, "_blank")}>
        <CardHeader
          avatar={<Avatar>{icon}</Avatar>}
          title={title}
          subheader={value}
        />
      </CardActionArea>
    </Card>
  </>
);

export default CardContact;
