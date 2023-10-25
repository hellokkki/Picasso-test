import React from "react";
import { Button, Card, CardContent, Typography } from "@mui/material";
import { TPostSerialized } from "../../typing/types/TPost";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setPost } from "../../../entities/postSlice.ts";

const PostCard: React.FC<TPostSerialized> = ({
  number,
  title,
  description,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleNavigate = (number: string, title: string, description: string): void => {
    dispatch(
      setPost({
        post: { number: number, title: title, description: description },
      })
    );
    navigate(`/posts/:${title}`);
  };

  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardContent>
        <Typography gutterBottom variant="h3" component="div">
          {title}
        </Typography>
        <Typography variant="body1" align="center">
          {description}
        </Typography>
      </CardContent>
      <Button onClick={() => handleNavigate(number, title, description)}>просмотр</Button>
    </Card>
  );
};

export default PostCard;
