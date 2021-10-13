import React, { useEffect } from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getSinglePost } from "../redux/Actions/actions";

const Postdetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { post } = useSelector((state) => state.data);

  console.log(post);

  useEffect(() => {
    dispatch(getSinglePost(id));
  }, [dispatch, id]);

  return (
    <Card>
      <CardMedia
        component="img"
        width="auto"
        height="300px"
        className="post_img"
        image={`https://picsum.photos/200/30${id}`}
        alt="Random Data"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Title: {post.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Message: {post.message}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Postdetail;
