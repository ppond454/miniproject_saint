import Head from 'next/head'
import Layout from '../components/layout'
import Navbar from '../components/navbar'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import axios from 'axios'
import withAuth from '../components/withAuth'
import config from '../config/config'
import { Container, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css'
import Image from 'next/image'

const Procdutes = ({ token }) => {

    // const [user, setUser] = useState({})

    // useEffect(() => {
    //     fooUser()
    // }, [])

    // const fooUser = async () => {
    //     try {
            
    //         const users = await axios.get(`${config.URL}/foo`, {
    //             headers: { Authorization: `Bearer ${token}` }
    //         })
           
    //         setUser(users.data)
    //     }
    //     catch (e) {
    //         console.log(e)
    //     }

    // }

    return (
        
        <Layout>
            <Head>
            
                <title>Bootstrap Example</title>

            </Head>
            {/* <Navbar /> */}
            <div>
            <div className={styles.list}>
            <Col className="col-lg-12 col-12">
                
               
                <h1>Coffee SaiNt</h1>
                <h4>“กาแฟ” เครื่องดื่มยอดนิยมตลอดกาลสำหรับใครหลายๆ คน ด้วยกลิ่นหอมอันเย้ายวนและรสชาติเข้มเฉพาะตัว จึงทำให้คอกาแฟหลายๆ
                     ท่าน ไม่พลาดที่จะเริ่มต้นวันใหม่ด้วยกาแฟดีๆ สักแก้ว เพราะการดื่มกาแฟนอกจากจะสร้างความรู้สึกผ่อนคลายแล้ว 
                     ยังช่วยทำให้เรารู้สึกตื่นตัวและเพิ่มความกระฉับกระเฉงได้ดีอีกด้วย</h4>
                <div style={{margin: '10px'}}>    <img src="https://site.listsothebysrealty.in.th/wp-content/uploads/2020/02/01-Espresso-1.jpg"        
                width={700}
                height={400}></img>
                <h1>Espresso (เอสเปรสโซ)</h1>                
                <h4>เอสเปรสโซ่ มาจากภาษาอิตาลี อ่านว่า Caffè Espresso (คัฟเฟ่ เอสเปรสโซ่) ซึ่งแปลตรงตัวได้ความหมายว่า
                     “กาแฟที่ถูกดันออกมา” เกิดจากการใช้แรงดันจากน้ำที่กำลังเดือด ให้พุ่งผ่านเมล็ดกาแฟที่คั่วบดละเอียดอย่างรวดเร็ว 
                     จนได้เป็นน้ำกาแฟดำชนิดเข้มข้นแท้ๆ ที่ไม่ผสมอะไรเพิ่มเติมทั้งสิ้น เพราะกาแฟเอสเปรสโซ่แบบออริจินัล 
                     จะไม่มีส่วนประกอบอื่นผสมเลยมีเพียงกลิ่นและรสของกาแฟเท่านั้น </h4></div>

                <div style={{margin: '10px'}}>    <img src="https://site.listsothebysrealty.in.th/wp-content/uploads/2020/02/02-cappuccino-3.jpg"        
                width={700}
                height={400}></img>
                <h1>Cappuccino (คาปูชิโน)</h1>                
                <h4>คาปูชิโน มีต้นกำเนิดมาจากประเทศอิตาลี ใครที่เพิ่งเริ่มหัดดื่มกาแฟ หรืออยู่ในระดับปานกลาง ขอแนะนำกาแฟชนิดนี้
                     เพราะมีรสที่ไม่เข้มข้นมากนัก มีส่วนประกอบหลักคือกาแฟเอสเปรสโซ แต่เพิ่มนมสด และฟองนมเข้ามา </h4></div>

                <div style={{margin: '10px'}}>    <img src="https://site.listsothebysrealty.in.th/wp-content/uploads/2020/02/03-Mocca-1.jpg"        
                width={700}
                height={400}></img>
                <h1>Mocca (มอคค่า)</h1>                
                <h4>มอคค่า เป็นอีกหนึ่งเมนูกาแฟที่หลายคนโปรดปรานมาก จริงๆแล้ว มอคค่า คือกาแฟสายพันธุ์อาราบิก้าแท้
                     ที่มีกลิ่นคล้ายโกโก้ ความพิเศษคือ สี กลิ่น และรสชาติของเมล็ดกาแฟ 
                     ซึ่งทำให้คล้ายกับว่าเป็นกาแฟที่มีส่วนผสมของช็อคโกแลตอยู่ด้วย</h4></div>

                <div style={{margin: '10px'}}>    <img src="https://site.listsothebysrealty.in.th/wp-content/uploads/2020/02/04-Latte-1.jpg"        
                width={700}
                height={400}></img>
                <h1>Latte (ลาเต้)</h1>                
                <h4>หากใครที่ชอบความหวานมัน นุ่มละมุนของฟองนม กาแฟลาเต้นับเป็นตัวเลือกที่ดีทีเดียว “ลาเต้” 
                    เป็นภาษาอิตาลีที่แปลว่านม ปัจจุบันเครื่องดื่มจำนวนไม่น้อยในหลายคาเฟ่มักจะพ่วงคำว่า 
                    ลาเต้ (Latte) ต่อท้ายด้วย เช่น มัทฉะ ลาเต้ (Matcha Latte) ก็คือชาเขียวใส่นม</h4></div>

                     <div style={{margin: '10px'}}>    <img src="https://site.listsothebysrealty.in.th/wp-content/uploads/2020/02/05-FlatWhite-2.jpg"        
                width={700}
                height={400}></img>
                <h1>Flat White (แฟลทไวท์)</h1>                
                <h4>แฟลทไวท์ คือกาแฟที่มีต้นกำเนิดจากออสเตรเลียและนิวซีแลนด์ 
                    มีส่วนผสมระหว่างกาแฟกับนมสดในปริมาณที่มาก จึงทำให้กาแฟมีสีขาวนวล ผิวกาแฟเคลือบด้วยนมบางๆ 
                    รสชาติไม่ค่อยเข้มมากนัก เหมาะสำหรับคนที่เพิ่งเริ่มต้นดื่มกาแฟ หรือคอกาแฟที่ไม่ต้องการความเข้ม</h4></div>

            </Col>
            
            </div>
            </div>
        </Layout>
    )
}

// export default withAuth(Foo1)
export default withAuth(Procdutes)

export function getServerSideProps({ req, res }) {
    return { props: { token: req.cookies.token || "" } };
}
