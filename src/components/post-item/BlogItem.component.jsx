import React from 'react';
import {useHistory} from 'react-router-dom';
import {
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  CardActions,
  Typography,
  IconButton,
  Tooltip
} from "@material-ui/core";
import {MdEdit as EditIcon, MdDeleteForever as DeleteIcon, MdAirplanemodeInactive as DraftIcon } from 'react-icons/md';
import {FaTelegramPlane as PublishIcon} from 'react-icons/fa';
import {useStyles} from "../../styles/post-styles/blogItem.styles";
import {truncate} from "../../helpers/utils";
import PostImage from '../../assets/images/post-holder.jpg';
import {useMutation} from "@apollo/react-hooks";
import {DELETE_POST, GET_ALL_BLOG_POSTS, UPDATE_POST_STATUS} from "../../helpers/postQueries.gql";
import {ToastMessage, type} from "../toaster/ToastMessage";

const BlogItem = ({blogPosts}) => {
  const classes = useStyles();
  const history = useHistory();
  const [deleteBlogPost] = useMutation(DELETE_POST);
  const [updatePostStatus] = useMutation(UPDATE_POST_STATUS);

  const handlePostEdit = post => {
    history.push({
      pathname: '/dashboard/update-blog',
      state: {post}
    })
  };

  const handleDelete = async postId => {
    try {
      await deleteBlogPost({
        variables: {
          id: postId
        },
        refetchQueries: [{query: GET_ALL_BLOG_POSTS}]
      });
      ToastMessage(type.SUCCESS, 'Post deleted')
    } catch (e) {
      ToastMessage(type.ERROR, e.message.split(":")[1]);
      console.error(e)
    }
  };

  const handleChangePostStatus = async postId => {
    try {
      await updatePostStatus({
        variables: {id: postId},
        refetchQueries: [{query: GET_ALL_BLOG_POSTS}]
      });
      ToastMessage(type.SUCCESS, 'Post publish status updated')
    } catch (e) {
      ToastMessage(type.ERROR, e.message.split(":")[1]);
      console.error(e)
    }
  };

  const handleClick = (postId) => {
    history.push(`/dashboard/blogs/${postId}`)
  };

  return (
    <div className={classes.main}>
      {
        blogPosts.map((post) => (
          <Card className={classes.card} key={post.id}>
            <CardActionArea onClick={() => handleClick(post.id)}>
              <CardMedia
                component="img"
                alt={post.title}
                height="180"
                src={PostImage}
                // src={post.image || PostImage}
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
                  <small>Author</small>: <strong>{post.author.username}</strong>
                </Typography>
                <span>{post.category}</span>
              </aside>
              <aside className={classes.socials}>
                <Tooltip title={"edit"}>
                  <IconButton onClick={() => handlePostEdit(post)}>
                    <EditIcon/>
                  </IconButton>
                </Tooltip>
                <Tooltip title={"delete"}>
                  <IconButton onClick={() => handleDelete(post.id)}>
                    <DeleteIcon/>
                  </IconButton>
                </Tooltip>
                {
                  post.isPublished ? (
                    <Tooltip title={"Make Draft"}>
                      <IconButton onClick={() => handleChangePostStatus(post.id)}>
                        <DraftIcon/>
                      </IconButton>
                    </Tooltip>
                  ) : (
                    <Tooltip title={"Publish Now"}>
                      <IconButton onClick={() => handleChangePostStatus(post.id)}>
                        <PublishIcon/>
                      </IconButton>
                    </Tooltip>
                  )
                }
              </aside>
            </CardActions>
          </Card>
        ))
      }
    </div>
  )
};

export default BlogItem;
