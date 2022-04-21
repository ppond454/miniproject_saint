import React from "react"
import { motion } from "framer-motion"
import { formatMs, makeStyles } from "@material-ui/core/styles"
import clsx from "clsx"
import Card from "@material-ui/core/Card"
import axios from "axios"
import config from "../config/config"
import CardHeader from "@material-ui/core/CardHeader"
import CardMedia from "@material-ui/core/CardMedia"
import CardContent from "@material-ui/core/CardContent"
import CardActions from "@material-ui/core/CardActions"
import Collapse from "@material-ui/core/Collapse"
import Avatar from "@material-ui/core/Avatar"
import IconButton from "@material-ui/core/IconButton"
import Typography from "@material-ui/core/Typography"
import { red } from "@material-ui/core/colors"
import FavoriteIcon from "@material-ui/icons/Favorite"
import ShareIcon from "@material-ui/icons/Share"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import MoreVertIcon from "@material-ui/icons/MoreVert"
import Button from "@material-ui/core/Button"
import { Container, Row, Col } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.css"
import { useRouter } from "next/router"

const ButtonMotion = motion(Button)
const CardMotion = motion(Card)

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    width: 350,
    height: 450,
  },
  media: {
    height: 200,
    width: 300,
    paddingTop: "56.25%", // 16:9
  },

  // expand: {
  //   transform: 'rotate(0deg)',
  //   marginLeft: 'auto',
  //   transition: theme.transitions.create('transform', {
  //     duration: theme.transitions.duration.shortest,
  //   }),
  // },
  // expandOpen: {
  //   transform: 'rotate(180deg)',
  // },
  // avatar: {
  //   backgroundColor: red[500],
  // },
}))

const Cade = ({ id, productsname, discription, price, imageurl, userid }) => {
  const addToCart = async () => {
    let cart = await axios.post(`${config.URL}/cart/${userid}`, {
      id: id,
      productsname: productsname,
      discription: discription,
      price: price,
      imageurl: imageurl,
      amount: 1,
    })
  }

  const router = useRouter()
  const classes = useStyles()
  const [expanded, setExpanded] = React.useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  return (
    <CardMotion
      // whileHover={{ y: -5 , duration: 0.5}}
      className={classes.root}
      style={{
        boxShadow: 3,
        backgroundColor: "rgba(255, 255, 255,0.3)",
        backdropFilter: "blur(10px)",
        display: "flex",
        flexDirection: "column",
      }}
      initial={{ opacity: 0 , y:-10}}
      animate={{ opacity: 1 , y:0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: id, type: "easeInOut" }}
    >
      <CardHeader title={productsname} />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <CardMedia
          className={classes.media}
          image={imageurl}
          title="Paella dish"
        />
      </div>

      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {discription}
        </Typography>
        <h3>{price}</h3>
        {/* <Button variant="contained">Default</Button> */}

        <ButtonMotion
          variant="contained"
          whileHover={{ scale: 1.1 }}
          style={{
            backgroundColor: "#A07855FF",
            color: "white",
            marginTop:"auto",
            bottom: "0px",
          }}
          onClick={() => {
            if (userid) {
              addToCart()
            } else {
              router.push("/login")
            }
          }}
        >
          เลือกซื้อ 
        </ButtonMotion>
      </CardContent>
      {/* <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions> */}
      {/* <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
            minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
            heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
            browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
            and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
            pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
            without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
            medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
            again without stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don’t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>
      </Collapse> */}
    </CardMotion>
  )
}
export default Cade
