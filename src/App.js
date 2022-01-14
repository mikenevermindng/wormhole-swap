import {
  AppBar,
  makeStyles,
  Typography,
} from "@material-ui/core";
import {
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Transfer from "./components/Transfer";
import { useBetaContext } from "./contexts/BetaContext";
import { COLORS } from "./muiTheme";
import { CLUSTER } from "./utils/consts";

const useStyles = makeStyles((theme) => ({
  appBar: {
    background: COLORS.nearBlackWithMinorTransparency,
    "& > .MuiToolbar-root": {
      margin: "auto",
      width: "100%",
      maxWidth: 1100,
    },
  },
  spacer: {
    flex: 1,
    width: "100vw",
  },
  link: {
    ...theme.typography.body1,
    color: theme.palette.text.primary,
    marginLeft: theme.spacing(6),
    [theme.breakpoints.down("sm")]: {
      marginLeft: theme.spacing(2.5),
    },
    [theme.breakpoints.down("xs")]: {
      marginLeft: theme.spacing(1),
    },
    "&.active": {
      color: theme.palette.primary.light,
    },
  },
  bg: {
    background:
      "linear-gradient(160deg, rgba(69,74,117,.1) 0%, rgba(138,146,178,.1) 33%, rgba(69,74,117,.1) 66%, rgba(98,104,143,.1) 100%), linear-gradient(45deg, rgba(153,69,255,.1) 0%, rgba(121,98,231,.1) 20%, rgba(0,209,140,.1) 100%)",
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  content: {
    margin: theme.spacing(2, 0),
    [theme.breakpoints.up("md")]: {
      margin: theme.spacing(4, 0),
    },
  },
  brandLink: {
    display: "inline-flex",
    alignItems: "center",
    "&:hover": {
      textDecoration: "none",
    },
  },
  brandText: {
    ...theme.typography.h5,
    [theme.breakpoints.down("xs")]: {
      fontSize: 22,
    },
    fontWeight: "500",
    background: `linear-gradient(160deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.5) 100%);`,
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    WebkitTextFillColor: "transparent",
    MozBackgroundClip: "text",
    MozTextFillColor: "transparent",
    letterSpacing: "3px",
    display: "inline-block",
    marginLeft: theme.spacing(0.5),
  },
  iconButton: {
    [theme.breakpoints.up("md")]: {
      marginRight: theme.spacing(2.5),
    },
    [theme.breakpoints.down("sm")]: {
      marginRight: theme.spacing(2.5),
    },
    [theme.breakpoints.down("xs")]: {
      marginRight: theme.spacing(1),
    },
  },
  gradientButton: {
    backgroundImage: `linear-gradient(45deg, ${COLORS.blue} 0%, ${COLORS.nearBlack}20 50%,  ${COLORS.blue}30 62%, ${COLORS.nearBlack}50  120%)`,
    transition: "0.75s",
    backgroundSize: "200% auto",
    boxShadow: "0 0 20px #222",
    "&:hover": {
      backgroundPosition:
        "right center" /* change the direction of the change here */,
    },
  },
  betaBanner: {
    background: `linear-gradient(to left, ${COLORS.blue}40, ${COLORS.green}40);`,
    padding: theme.spacing(1, 0),
  },
  wormholeIcon: {
    height: 32,
    filter: "contrast(0)",
    transition: "filter 0.5s",
    "&:hover": {
      filter: "contrast(1)",
    },
    verticalAlign: "middle",
    marginRight: theme.spacing(1),
    display: "inline-block",
  },
}));

function App() {
  const classes = useStyles();
  const isBeta = useBetaContext();
  return (
    <div className={classes.bg}>
      {CLUSTER === "mainnet" ? null : (
        <AppBar position="static" className={classes.betaBanner}>
          <Typography style={{ textAlign: "center" }}>
            Caution! You are using the {CLUSTER} build of this app.
          </Typography>
        </AppBar>
      )}
      {isBeta ? (
        <AppBar position="static" className={classes.betaBanner}>
          <Typography style={{ textAlign: "center" }}>
            Caution! You have enabled the beta. Enter the secret code again to
            disable.
          </Typography>
        </AppBar>
      ) : null}
      <div className={classes.content}>
        <Switch>
          <Route exact path="/">
            <Transfer />
          </Route>
          <Route>
            <Redirect to="/" />
          </Route>
        </Switch>
      </div>
      <div className={classes.spacer} />
    </div>
  );
}

export default App;
