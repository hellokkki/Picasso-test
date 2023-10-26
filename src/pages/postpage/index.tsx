import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { TPostSerialized } from "../../shared/typing/types/TPost.ts";
import { Typography, Box, Button } from "@mui/material";
import LeftArrowButton from "../../shared/UI/LeftArrowButton/index.tsx";
import { RootReducerState } from "../../app/store/rootReducer.ts";
import { postApi } from "../../shared/postsApi/index.tsx";

const Postpage: React.FC = () => {
  const post = useSelector(
    (state: RootReducerState) => state.postSLiceReducer.post as TPostSerialized 
  );

  const { data } = postApi.useGetPostByTitleQuery({ title: post.title }) ?? undefined

  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/");
  };

  if (data && post) {
    return (
      <main
        style={{
          position: "relative",
          height: "100dvh",
          display: "flex",
          flexFlow: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box position="absolute" top="7%" left="5%">
          <LeftArrowButton
            size={54}
            color="primary"
            onClick={handleNavigate}
          />
        </Box>
        <Box marginBottom='50px'>
        <Typography variant="h4">{data[0].title}</Typography>
        </Box>

        <Box>
          <Typography>{data[0].body}</Typography>
        </Box>

        <Box marginTop='20px'>
          <Button onClick={handleNavigate}> 
            <Typography variant="h3">
              назад
            </Typography>
          </Button>
        </Box>
      </main>
    );
  } else {
    return <div>Post error</div>
  }
};

export default Postpage;
