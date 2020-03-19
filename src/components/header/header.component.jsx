import React from "react";
import { Link as RouterLink } from "react-router-dom";
import Logo from "../logo/logo.component";
import "./header.styles.scss";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import PropTypes from "prop-types";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

const useStyles = makeStyles({
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  }
});

const Header = () => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false
  });

  function ListItemRouter(props) {
    const { icon, primary, to } = props;

    const renderLink = React.useMemo(
      () =>
        React.forwardRef((itemProps, ref) => (
          <RouterLink to={to} ref={ref} {...itemProps} />
        )),
      [to]
    );

    return (
      <li>
        <ListItem button component={renderLink}>
          {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
          <ListItemText primary={primary} />
        </ListItem>
      </li>
    );
  }

  ListItemRouter.propTypes = {
    icon: PropTypes.element,
    primary: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired
  };

  function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
  }

  const toggleDrawer = (anchor, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = anchor => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom"
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItemRouter to="/" icon={<ArrowForwardIcon />} primary="About" />
        <ListItemRouter
          to="/resume"
          icon={<ArrowForwardIcon />}
          primary="Resumé"
        />
        <ListItemRouter
          to="/portfolio"
          icon={<ArrowForwardIcon />}
          primary="Portfolio"
        />
      </List>
      <Divider />
      <List>
        <ListItem button>
          <ListItemLink href="https://www.github.com/dillonkmcquade">
            <ListItemIcon>
              <GitHubIcon htmlColor='black'/>
            </ListItemIcon>
            <ListItemText>GitHub</ListItemText>
          </ListItemLink>
        </ListItem>
        <ListItem button>
          <ListItemLink href="https://www.linkedin.com/in/dillon-mcquade-1576a2198">
            <ListItemIcon>
              <LinkedInIcon htmlColor='black'/>
            </ListItemIcon>
            <ListItemText>LinkedIn</ListItemText>
          </ListItemLink>
        </ListItem>
        <ListItem button>
          <ListItemLink href="mailto:dillonkmcquade@gmail.com">
            <ListItemIcon>
              <MailIcon htmlColor='black'/>
            </ListItemIcon>
            <ListItemText>E-mail</ListItemText>
          </ListItemLink>
        </ListItem>
      </List>
    </div>
  );
  return (
    <div className="header">
      <Logo />
      <div className="hamburger">
        {["right"].map(anchor => (
          <React.Fragment key={anchor}>
            <Button>
              <MenuIcon fontSize="large" onClick={toggleDrawer(anchor, true)}>
                {anchor}
              </MenuIcon>
            </Button>
            <Drawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
            >
              {list(anchor)}
            </Drawer>
          </React.Fragment>
        ))}
      </div>
      <div className="options">
        <RouterLink to="/" className="option">
          About
        </RouterLink>
        <RouterLink to="/resume" className="option">
          Résumé
        </RouterLink>
        <RouterLink to="/portfolio" className="option">
          Portfolio
        </RouterLink>
      </div>
    </div>
  );
};
export default Header;
