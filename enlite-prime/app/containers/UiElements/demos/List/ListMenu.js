import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListSubheader from '@material-ui/core/ListSubheader';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import StarIcon from '@material-ui/icons/Star';
import Collapse from '@material-ui/core/Collapse';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import red from '@material-ui/core/colors/red';
import green from '@material-ui/core/colors/green';
import amber from '@material-ui/core/colors/amber';
import lightBlue from '@material-ui/core/colors/lightBlue';
import pink from '@material-ui/core/colors/pink';
import teal from '@material-ui/core/colors/teal';

const styles = theme => ({
  root: {
    maxWidth: '360px',
    backgroundColor: theme.palette.background.paper,
    margin: 10
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  avatarRed: {
    backgroundColor: red[500],
  },
  avatarGreen: {
    backgroundColor: green[500],
  },
  avatarAmber: {
    backgroundColor: amber[500],
  },
  iconBlue: {
    color: lightBlue[500]
  },
  iconPink: {
    color: pink[500]
  },
  iconAmber: {
    color: amber[500]
  },
  iconTeal: {
    color: teal[500]
  },
});

function ListMenu(props) {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const { classes } = props;

  return (
    <Fragment>
      <Grid
        container
        alignItems="flex-start"
        justifyContent="flex-start"
        direction="row"
        spacing={2}
      >
        <Grid item md={6} xs={12}>
          <Typography variant="button" className={classes.divider}>Menu List</Typography>
          <div className={classes.root}>
            <List component="nav">
              <ListItem button>
                <ListItemIcon>
                  <InboxIcon className={classes.iconPink} />
                </ListItemIcon>
                <ListItemText primary="Inbox" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <DraftsIcon className={classes.iconBlue} />
                </ListItemIcon>
                <ListItemText primary="Drafts" />
              </ListItem>
            </List>
            <Divider />
            <List component="nav">
              <ListItem button>
                <ListItemText primary="Trash" />
              </ListItem>
              <ListItem button component="a" href="#simple-list">
                <ListItemText primary="Spam" />
              </ListItem>
            </List>
          </div>
        </Grid>
        <Grid item md={6} xs={12}>
          <Typography variant="button" className={classes.divider}>Folder List</Typography>
          <div className={classes.root}>
            <List>
              <ListItem>
                <ListItemAvatar>
                  <Avatar className={classes.avatarRed}>
                    <ImageIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Photos" secondary="Jan 9, 2014" />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar className={classes.avatarGreen}>
                    <WorkIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Work" secondary="Jan 7, 2014" />
              </ListItem>
              <ListItem>
                <ListItemAvatar>
                  <Avatar className={classes.avatarAmber}>
                    <BeachAccessIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Vacation" secondary="July 20, 2014" />
              </ListItem>
            </List>
          </div>
        </Grid>
        <Grid item md={6} xs={12}>
          <Typography variant="button" className={classes.divider}>Inset List</Typography>
          <div className={classes.root}>
            <List component="nav">
              <ListItem button>
                <ListItemIcon>
                  <StarIcon className={classes.iconAmber} />
                </ListItemIcon>
                <ListItemText variant="inset" primary="Chelsea Otakan" />
              </ListItem>
              <ListItem button>
                <ListItemText variant="inset" primary="Eric Hoffman" />
              </ListItem>
            </List>
          </div>
        </Grid>
        <Grid item md={6} xs={12}>
          <Typography variant="button" className={classes.divider}>Nested List</Typography>
          <div className={classes.root}>
            <List
              component="nav"
              subheader={<ListSubheader component="div">Nested List Items</ListSubheader>}
            >
              <ListItem button>
                <ListItemIcon>
                  <SendIcon className={classes.iconTeal} />
                </ListItemIcon>
                <ListItemText variant="inset" primary="Sent mail" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <DraftsIcon className={classes.iconBlue} />
                </ListItemIcon>
                <ListItemText variant="inset" primary="Drafts" />
              </ListItem>
              <ListItem button onClick={() => handleClick()}>
                <ListItemIcon>
                  <InboxIcon className={classes.iconPink} />
                </ListItemIcon>
                <ListItemText variant="inset" primary="Inbox" />
                {open ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItem button className={classes.nested}>
                    <ListItemIcon>
                      <StarBorder className={classes.iconAmber} />
                    </ListItemIcon>
                    <ListItemText variant="inset" primary="Starred" />
                  </ListItem>
                </List>
              </Collapse>
            </List>
          </div>
        </Grid>
      </Grid>
    </Fragment>
  );
}

ListMenu.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ListMenu);
