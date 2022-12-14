import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { BreadCrumb } from '../../../../components';

const styles = theme => ({
  demo: {
    height: 'auto',
  },
  divider: {
    margin: `${theme.spacing(3)}px 0`,
  },
  alone: {
    position: 'relative',
    margin: 20
  },
  field: {
    margin: '10px',
    position: 'relative'
  },
  paper: {
    padding: '5px 10px 1px',
    borderRadius: 5
  }
});

function ClassicBreadcrumbs(props) {
  const { classes } = props;
  const location = { pathname: '/grand-parent/parent/children' };
  return (
    <Fragment>
      <Grid
        container
        alignItems="flex-start"
        justifyContent="flex-start"
        direction="row"
        spacing={1}
      >
        <Grid
          item
          md={6}
          container
          alignItems="center"
          justifyContent="center"
          direction="column"
        >
          <Typography variant="button" className={classes.divider}>Arrow Separator</Typography>
          <div className={classes.field}>
            <Paper className={classes.paper}>
              <BreadCrumb theme="dark" separator=" › " location={location} />
            </Paper>
          </div>
        </Grid>
        <Grid
          item
          md={6}
          container
          alignItems="center"
          justifyContent="center"
          direction="column"
        >
          <Typography variant="button" className={classes.divider}>Slash Separator</Typography>
          <div className={classes.field}>
            <Paper className={classes.paper}>
              <BreadCrumb theme="dark" separator=" / " location={location} />
            </Paper>
          </div>
        </Grid>
        <Grid
          item
          md={12}
          container
          alignItems="center"
          justifyContent="center"
          direction="column"
        >
          <Typography variant="button" className={classes.divider}>Greater Than Separator</Typography>
          <div className={classes.field}>
            <Paper className={classes.paper}>
              <BreadCrumb theme="dark" separator=" > " location={location} />
            </Paper>
          </div>
        </Grid>
      </Grid>
    </Fragment>
  );
}

ClassicBreadcrumbs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ClassicBreadcrumbs);
