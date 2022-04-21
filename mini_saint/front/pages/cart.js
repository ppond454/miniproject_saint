import Head from 'next/head'
import Layout from '../components/layout'
import Navbar from '../components/navbar'
import React, { useEffect, useState } from "react";
import styles from '../styles/Home.module.css'
import axios from 'axios'
import withAuth from '../components/withAuth'
import config from '../config/config'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton'
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });

const Cart = ({ token }) => {
  const [user,setUser] = useState([])
    const [carts,setcarts] = useState([]) 
    const getcart =async(id)=>{
      console.log("user.id>>>>", id);
        let cart = await axios.get(`${config.URL}/cart/${id}`)
        setcarts(cart.data[0])
        console.log("cart>>>>", cart);
      }
      useEffect(() =>{
        profileUser()
        
      },[]) 

      const classes = useStyles();
      let data = [
          {id:1, productsname: 'ลาเต้', amount: 3, price: 30 }
      ]
      const minus = async(amount,id)=>{
        await axios.put(`${config.URL}/cart/2`,{cartid: id ,amount: amount -1})
        getcart(user.id);
          console.log('minus');
      }
      const plus =async(amount,id)=>{
        await axios.put(`${config.URL}/cart/2`,{cartid: id ,amount: amount +1})
        getcart(user.id);
          console.log('plus');
      }
      const remove =async (id)=>{
        await axios.delete(`${config.URL}/cart/2`,{cartid:id})
          console.log('delete');
        getcart(user.id);
      }
      const profileUser = async () => {
        try {
    
            const users = await axios.get(`${config.URL}/profile`, {
                headers: { Authorization: `Bearer ${token}` }
            })
           console.log('profileUser>>>',users)
            setUser(users.data)
            getcart(users.data.id)
        }
        catch (e) {
            console.log(e)
        }
    
    }

    return (
        <Layout>
            <Head>
                <title>User profile</title>
            </Head>
            {/* <Navbar /> */}

          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell>ลำดับที่</TableCell>
                    <TableCell align="right">ชื่อสินค้า</TableCell>
                    <TableCell >จำนวน</TableCell>
                    <TableCell align="right">ราคา</TableCell>
                    <TableCell align="right">ราคารวม</TableCell>
                    <TableCell align="right"></TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                    {carts.map((row, index) => (
                        <TableRow key={row.id}>
                        <TableCell component="th" scope="row">{index+1}</TableCell>
                        <TableCell align="right">{row.productsname}</TableCell>
                        <TableCell >
                            <div style={{display: 'flex'}}>
                            <IconButton color="primary" aria-label="upload picture" component="span">
                                <RemoveIcon onClick={()=> minus(row.amount,row.id)} />
                            </IconButton>
                             <p>{row.amount}</p>
                            <IconButton color="primary" aria-label="upload picture" component="span">
                                <AddIcon onClick={()=> plus(row.amount,row.id)} />
                            </IconButton>
                            </div>
                            </TableCell>
                        <TableCell align="right">{row.price}</TableCell>
                        <TableCell align="right">{row.price * row.amount}</TableCell>
                        <TableCell align="right">
                            <IconButton color="primary" aria-label="upload picture" component="span">
                                <DeleteIcon onClick={()=> remove(row.id)} />
                            </IconButton>
                        </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
          </TableContainer>
  

                

            
        </Layout>
    )
}

export default withAuth(Cart)

export function getServerSideProps({ req, res }) {
    return { props: { token: req.cookies.token || "" } };
}

