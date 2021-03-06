import React from 'react';
import PropTypes from 'prop-types';

import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';

import logo from '../../assets/images/logo.jpg';
import { withStyles } from '@material-ui/core/styles';

//Component styles
import style from './LeftBar.scss';

const styles = theme => ({
  root: {
    color: theme.palette.text.primary
  },
  icon: {
    margin: 0,
    fontSize: 16,
    color: '#ffffff'
  }
});

class LeftBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes } = this.props;
    return (
      <div className='side-bar'>
        <div className={classes.toolbar} />
        <div className='sidebar-logo-container floating'>
          <img src={logo} />
        </div>
        <Divider />
      </div>
    );
  }
}

export default withStyles(styles)(LeftBar);

/*
        <List>
          <Link to='/dashboard/list'>
            <ListItem button key='list'>
              <ListItemIcon>
                <MailIcon />
              </ListItemIcon>
              <ListItemText primary='List' />
            </ListItem>
          </Link>
          <Link to='/dashboard/create'>
            <ListItem button key='create'>
              <ListItemIcon>
                <MailIcon />
              </ListItemIcon>
              <ListItemText primary='Create' />
            </ListItem>
          </Link>
        </List>
*/
