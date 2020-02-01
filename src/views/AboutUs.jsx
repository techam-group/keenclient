import React from 'react';
import GeneralLayout from "../components/auth/GeneralLayout";
import {
  Card, CardActionArea, CardActions, CardContent, CardMedia,
  Grid, IconButton,
  Typography
} from "@material-ui/core";
import {useStyles} from "../styles/about/about.styles";
import {TiSocialFacebook as FacebookIcon, TiSocialTwitter as TwitterIcon, TiSocialLinkedin as LinkedInIcon} from 'react-icons/ti';
import KeenCEO from '../assets/images/johnDoe.png';

const AboutUs = () => {
  const classes = useStyles();

  return (
    <GeneralLayout>
      <section className={classes.imageBox} />

      <Grid className={classes.root}>
        <Typography variant={"h5"}>About Us</Typography>

        <div className={classes.info}>
          <Typography>
            Keencademiks is an online learning platform, driven by technology and science, our purpose is to provide understanding into complex science topics and concepts in a way that is accessible to all.
          </Typography>
        </div>

        <section className={classes.aboutOwner}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt={"Keencademiks CEO"}
                height="280"
                src={KeenCEO}
                title={"Keencademiks CEO"}
              />
            </CardActionArea>
            <CardActions className={classes.actions}>
              <aside className={classes.author}>
                <Typography>
                  <strong>My Kenny</strong>
                </Typography>
                <span>CEO - Keencademics</span>
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
        </section>
      </Grid>
    </GeneralLayout>
  )
};

export default AboutUs;
