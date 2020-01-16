import React from 'react';
import {Link} from "react-router-dom";
import {Card, CardContent, CardMedia, CardActionArea, CardActions, Typography, IconButton} from "@material-ui/core";
import {TiSocialFacebook as FacebookIcon, TiSocialTwitter as TwitterIcon, TiSocialLinkedin as LinkedInIcon} from 'react-icons/ti';
import {useStyles} from "../../styles/post-styles/postItem.styles";
import {truncate} from "../../helpers/utils";

const PostItem = ({posts}) => {
  const classes = useStyles();

  return (
    <div className={classes.main}>
      {
        posts.map((post, idx) => (
          <Card className={classes.card} key={idx}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt={post.title}
                height="180"
                src={post.imageUrl}
                title={post.title}
              />
              <CardContent>
                <Typography variant="h6">
                  {truncate(post.title, 30)}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions className={classes.actions}>
              <aside className={classes.author}>
                <Typography>
                  <Link to={"/portfolio"}>{post.author}</Link>
                </Typography>
                <span>{post.readTime}</span>
              </aside>
              <aside className={classes.socials}>
                <IconButton>
                  <FacebookIcon/>
                </IconButton>
                <IconButton>
                  <TwitterIcon/>
                </IconButton>
                <IconButton>
                  <LinkedInIcon/>
                </IconButton>
              </aside>
            </CardActions>
          </Card>
        ))
      }
    </div>
  )
};

export default PostItem;
