import Link from "next/link"
import React from "react"
import styles from "../styles/Index.module.css"
import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import Badge from "@material-ui/core/Badge"
import { withStyles } from "@material-ui/core/styles"
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart"
import ExitToAppIcon from "@material-ui/icons/ExitToApp"
import { motion } from "framer-motion"
import { useMediaQuery } from "@material-ui/core"
import { useTheme } from "@material-ui/core/styles"
import Menu from "@material-ui/core/Menu"
import MenuItem from "@material-ui/core/MenuItem"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    // marginBottom: "100px",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}))

const AppBarMotion = motion(AppBar)
const Navbar = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = anchorEl
  return (
    <div className={classes.root}>
      <AppBarMotion
        style={{
          boxShadow: 3,
          background: "rgba(160, 120, 85, 0.5)",
          backdropFilter: "blur(10px)",
        }}
        position="fixed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, type: "easeInOut" }}
      >
        <Toolbar>
          {/* <Link href="/">
            <Button color="inherit">
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="black"
                aria-label="menu"
              >
                <MenuIcon />
              </IconButton>
            </Button>
          </Link> */}
          <Typography variant="h6" className={classes.title}>
            <Link href="/">
              <a style={{ color: "white", textDecoration: "none" }}>
                Coffee SaiNt
              </a>
            </Link>
          </Typography>
          {!isMobile && (
            <>
              <Link href="/">
                <Button sm="none" color="inherit">
                  Home
                </Button>
              </Link>
              <Link href="/product">
                <Button color="inherit">Product</Button>
              </Link>
              <Link href="/login">
                <Button color="inherit">Login</Button>
              </Link>
              <Link href="/register">
                <Button color="inherit">Sing up</Button>
              </Link>
            </>
          )}
          <Link href="/cart">
            {/* </Button></Link>   */}

            <IconButton aria-label="cart">
              <useStyles badgeContent={4} color="secondary">
                <ShoppingCartIcon />
              </useStyles>
            </IconButton>
          </Link>
          {!isMobile ? (
            <Link href="/logout">
              <IconButton aria-label="logout">
                <useStyles badgeContent={4} color="secondary">
                  <ExitToAppIcon />
                </useStyles>
              </IconButton>
            </Link>
          ) : (
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="black"
              aria-label="menu"
              onClick={(e) => setAnchorEl(e.currentTarget)}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={() => setAnchorEl(null)}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={() => setAnchorEl(null)}>
              <Link href="/">
                <Button sm="none" color="inherit">
                  Home
                </Button>
              </Link>
            </MenuItem>
            <MenuItem onClick={() => setAnchorEl(null)}>
              <Link href="/product">
                <Button color="inherit">
                  <Link href="/login">
                    <Button color="inherit">Login</Button>
                  </Link>
                </Button>
              </Link>
            </MenuItem>
            <MenuItem onClick={() => setAnchorEl(null)}>
              <Link href="/register">
                <Button color="inherit">Sing up</Button>
              </Link>
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBarMotion>
    </div>
  )
}

export default Navbar
