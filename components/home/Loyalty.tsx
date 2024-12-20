"use client";

import styles from './Loyalty.module.scss';

import { Col, Row , Typography} from 'antd';
import { motion, Variants } from "framer-motion";
import Image from 'next/image';
import LogoImage from '../../public/logo2.png';
import SaleImage from '../../public/icons8-sale-100.png';


const { Title} = Typography;


export default function Loyalty() {

  const cardVariants: Variants = {
    offscreen: {
      y: 300,
      rotateY: -140,
    },
    onscreen: {
      y: 0,
      rotateY: -20,
      transition: {
        type: "spring",
        bounce: 0.6,
        duration: 1.8,
        // repeat: Infinity,
      }
    }
  };
  
  return (
  
    <>
          <Title  level={2}  className='sub-title'>Программа лояльности:</Title>
            <Row gutter={16} className='mt-16'>
                <Col xs={24} md={12}>
                  <motion.div className={styles['loyalty__wrapper']}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}
                style={{
                  perspective: "404px",
              }}
                  > 
                    <motion.div  variants={cardVariants} className={styles['loyalty__card']}>
                        <motion.div  variants={cardVariants} className={styles['loyalty__logo']}>
                          <Image src={LogoImage} alt='logo'/>
                        </motion.div>
                        <motion.div  variants={cardVariants} className={styles['loyalty__logo2']} >
                          <Image src={SaleImage} alt='sale'/>
                        </motion.div>
                        <motion.p className={styles['loyalty__text']}>0000 0000 0000 0001</motion.p>
                    
                    </motion.div>
                  </motion.div>
                </Col>
                <Col xs={24} md={12} className={styles['loyalty__col-mar']}>
                <div className="loyalty__wrapper2">
                    <h2 className='loyalty__h2'>Карта лояльности:</h2>
                    <p className='loyalty__desc'>Скидки до 50%, Бонусы и премиальное обслуживание по Вашей персональной карте лояльности. Карта является накопительной системой скидок и бонусов, выдается при первом обслуживании непосредственно и через партнеров.</p>
                  </div>
                </Col>
            </Row>
</>
  );
}

  


