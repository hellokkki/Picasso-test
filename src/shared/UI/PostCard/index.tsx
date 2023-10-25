import React from "react";
import { Button, Card, CardContent, Typography } from "@mui/material";
import { TPostSerialized } from "../../typing/types/TPost";

const PostCard: React.FC<TPostSerialized> = ({ number, title, description }) => {

    return(
      <Card sx={{ maxWidth: 400 }}>
         <CardContent>
            <Typography gutterBottom variant="h3" component="div">
                {title}
            </Typography>
            <Typography variant="body1" align="center">
                {description}
            </Typography>
         </CardContent>
         <Button>просмотр</Button>
      </Card>
    )
}

export default PostCard