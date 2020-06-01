import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import AddComment from "../../Components/addComment";
import Avatar from "../../Components/data/baseMedia/post.jpg";
import "./styles/imgMediaCard.css";
import BadgeAvatars from "../API_components/badgeAvatars";

export default function ImgMediaCard(props) {
  const {
    posts,
    commentsList,
    anchorElComment,
    handleClickComment,
    handleCloseComment,
    postId,
  } = props;

  return (
    <>
      {posts
        ? posts.map((post) =>
            post.visible ? (
              <Card className="wrapper">
                <CardActionArea className="item">
                  <CardContent className='content'>
                    <Typography>
                      <BadgeAvatars />
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h2">
                      {post.author}
                    </Typography>
                  </CardContent>
                  <CardContent className='content'>
                    <Typography gutterBottom variant="h5" component="h2">
                      {post.title}
                    </Typography>
                  </CardContent>
                  {/*<CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="540"
                    width="20px"
                    image="https://place-hold.it/350x150"
                    title="Contemplative Reptile"
                  />*/}
                  <CardContent className='content'>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {posts.title}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions className="item">
                  <Button size="small" color="primary">
                    Share
                  </Button>
                  <Button size="small" color="primary">
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            ) : null
          )
        : null}
    </>
  );
}
