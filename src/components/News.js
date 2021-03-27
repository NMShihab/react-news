import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import "../css/News.css";

const useStyles = makeStyles({
  root_news: {
    flexGrow: 1,
  },
  root: {
    maxWidth: 500,
    marginLeft: 50,
    marginTop: 50,
  },
  media: {
    height: 140,
  },
});
const News = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await axios.get(
      "https://spaceflightnewsapi.net/api/v2/articles"
    );
    console.log(response.data);
    setData(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  const classes = useStyles();
  return (
    <div className="news">
      <div className="news__header">
        <h3>Latest news</h3>
      </div>
      <Grid container spacing={3}>
        {data.map((key) => {
          return (
            <div className={classes.root_news}>
              <Grid container item xs={12}>
                <Card className={classes.root}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image={key.imageUrl}
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {key.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        {key.summary}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary">
                      Share
                    </Button>
                    <Button size="small" color="primary">
                      Learn More
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            </div>
          );
        })}
      </Grid>
    </div>
  );
};

export default News;
