import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import style from './navigation-bar.scss';

class NavigationBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null
    };
  }

  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div className={classes.root}>
        <AppBar position='static'>
          <Toolbar>
            <Typography variant='h6' color='inherit' className={classes.grow}>
              GoodTalk - Test
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  }
};

const styledComponent = withStyles(styles)(NavigationBar);
export default styledComponent;
