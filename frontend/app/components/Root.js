import React from 'react';
import PropTypes from 'prop-types';

import Home from './Home';

//BROWSER ROUTES AND HISTORY
import { BrowserRouter, Route, Switch, Router } from 'react-router-dom';
import { history } from '../helpers';

//UI - MATERIAL
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import windowSize from 'react-window-size';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { blue, lightGreen, green } from '@material-ui/core/colors';

//STYLES
import style from './Root.scss';

//COMPONENTS
import NavigationBar from './NavigationBar/NavigationBar';
import LeftBar from './LeftBar/LeftBar';

//UI REQUIRED COMPONENTS
import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';

const drawerWidth = 300;

class Root extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes } = this.props;

    return (
      <MuiThemeProvider theme={theme}>
        <div className='AppHeader'>
          <NavigationBar />
        </div>
        <div className='AppBody'>
          <div className={classes.root}>
            <nav className={[classes.drawer, 'sidebar-drawer'].join(' ')}>
              <Hidden smUp implementation='css'>
                <Drawer
                  container={this.props.container}
                  variant='temporary'
                  anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                  open={this.state.mobileOpen}
                  onClose={this.handleDrawerToggle}
                  classes={{
                    paper: classes.drawerPaper
                  }}
                >
                  <LeftBar />
                </Drawer>
              </Hidden>
              <Hidden xsDown implementation='css'>
                <Drawer
                  classes={{
                    paper: classes.drawerPaper
                  }}
                  variant='permanent'
                  open
                >
                  <LeftBar />
                </Drawer>
              </Hidden>
            </nav>
            <main className={classes.content}>
              <Router history={history}>
                <Switch>
                  <Route path='/' component={Home} exact />
                </Switch>
              </Router>
            </main>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

const theme = createMuiTheme({
  palette: {
    type: 'light',
    primary: blue,
    secondary: lightGreen
  },
  status: {
    danger: 'orange'
  },
  root: {
    flexGrow: 1
  }
});

const styles = theme => ({
  root: {
    display: 'flex'
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`
    }
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    }
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3
  }
});

Root.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

const styledcomponent = withStyles(styles, { withTheme: true })(Root);

export default styledcomponent;
