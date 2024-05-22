import React from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";
import { Button } from "@mui/material";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    padding: "10px",
  },
  card: {
    maxWidth: 300,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  image: {
    height: 150,
    width: "100%",
    objectFit: "cover",
    marginBottom: "10px",
  },
}));

const Dashboard = () => {
  const classes = useStyles();

  // Data for each card
  const cards = [
    {
      title: "Student",
      description: "Total Students Enrolled: 250",
      // image: studentImage,
      learnMoreLink: "#",
    },
    {
      title: "Teacher",
      description: "Total Teachers Employed: 20",
      // image: teacherImage,
      learnMoreLink: "#",
    },
    {
      title: "Class",
      description: "Classrooms Available: 10",
      // image: classImage,
      learnMoreLink: "#",
    },
    {
      title: "Fees Collection",
      description: "Total Fees Collected: $10000",
      // image: feesImage,
      learnMoreLink: "#",
    },
  ];

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {cards.map((card, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card className={classes.card}>
              <img
                src={card.image}
                alt={card.title}
                className={classes.image}
              />
              <CardContent>
                <Typography variant="h6" component="div" gutterBottom>
                  {card.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {card.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" href={card.learnMoreLink}>
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Dashboard;
