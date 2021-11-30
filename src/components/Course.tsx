import {
  Card,
  CardMedia,
  Typography,
  CardContent,
  CardActionArea,
  CardActions,
  Button,
  Link,
} from "@mui/material";
import React from "react";

interface Props {
  showButtons?: boolean;
}

export default function Course(props: Props) {
  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.EntHChgUyirgbZ9A3zTxkAHaFj%26pid%3DApi&f=1"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              React
            </Typography>
            <Typography variant="body2" color="text.secondary">
              React es una biblioteca para crear interfaces de usuario de una
              forma más sencilla y reutilizable
            </Typography>
          </CardContent>
        </CardActionArea>
        {props.showButtons && (
          <CardActions>
            <Button
              size="small"
              color="primary"
              component={Link}
              href={`/course/edit/1`}
            >
              Editar
            </Button>
            <Button
              size="small"
              color="primary"
              onClick={() => {
                console.log("Open modal confirmation and delete the course");
              }}
            >
              Eliminar
            </Button>
          </CardActions>
        )}
      </Card>
    </div>
  );
}
