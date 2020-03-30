import React, { memo } from "react";
import { connect } from "react-redux";
import { makeStyles, Box, Grid, Typography } from "@material-ui/core";
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignItems: "center"
  },
  button: {
    margin: theme.spacing(1)
  },
  marginTop: {
    marginTop:'40px',
  },
}));

const Settingslayout = props => {
  const classes = useStyles();

  return (
    <Container maxWidth="lg">
      <Grid container className={classes.container}>
        <Grid item xs={12}>
          <Box pt={6}>
            <Typography
            variant="h6"
            component="div">Settings layout</Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box pt={6}>
          Settings layout Content
        </Box>
        </Grid>
      </Grid>
      
    </Container>
  );
};

const mapState = state => {
  return {};
};

const mapDispatch = (dispatch) => {
  return {};
};

Settingslayout.propTypes = {}

Settingslayout.defaultProps = {}

export default connect(
  mapState,
  mapDispatch
)(memo(Settingslayout));
