import React, { FC } from "react"
import { AppBar, makeStyles, Button } from "@material-ui/core"
import GitHubIcon from "@material-ui/icons/GitHub"
import { NavLink } from "react-router-dom"

const useStyles = makeStyles((theme) => ({
  root: {
    flexDirection: "inherit",
    justifyContent: "center",
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(0.5),
    marginBottom: theme.spacing(3),
    "& a": {
      textDecoration: "none",
      marginLeft: theme.spacing(2),
    },
  },
  text: {
    color: theme.palette.common.white,
    flexBasis: 190,
  },
  navLink: {
    background: theme.palette.primary.light,
    borderRadius: 4,
  },
  GitHubIconLink: {
    position: "absolute",
    top: 10,
    right: 75,
  },
  GitHubIcon: {
    color: theme.palette.common.white,
  },
}))

const Header: FC = () => {
  const classes = useStyles()

  return (
    <>
      <a
        href="https://github.com/Amazaev77/budget-app"
        className={classes.GitHubIconLink}
      >
        <GitHubIcon className={classes.GitHubIcon} />
      </a>
      <AppBar className={classes.root} position="static">
        <NavLink to="/" activeClassName={classes.navLink} exact>
          <Button className={classes.text}>Расходы</Button>
        </NavLink>
        <NavLink to="/categories" activeClassName={classes.navLink}>
          <Button className={classes.text}>Категории</Button>
        </NavLink>
        <NavLink to="/statistic" activeClassName={classes.navLink}>
          <Button className={classes.text}>Статистика расходов</Button>
        </NavLink>
      </AppBar>
    </>
  )
}

export default Header