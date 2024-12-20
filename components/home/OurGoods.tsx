"use client";

import styles from './OurGoods.module.scss';
import { Col, Row, Typography} from 'antd';
import { motion } from "framer-motion";


const ARROFSVG = [['vizitki', '/vizitki', 'Визитки', 'изготовление визиток'], 
                  ['plackaty', '/banner', 'Банеры', 'изготовление баннеров'],
                  ['naklejki', '/samokleyki', 'Самоклейки', 'изготовление наклеек'],
                  ['listovki', '/posterka', 'Постеры', 'изготовление постеров'],
                  ['broshjury', '/broschurovka', 'Брошюры', 'изготовление брошюр'], 
                  ['buklety', '/cherteji', 'Чертежи', 'копирование чертежей'], 
                  ['flaery', '/pechatnabumage', 'Печать', 'печать на бумаге'],
                  ['priglashenija', '/laminacia', 'Ламинация', 'ламинирование'],
                  ['otkrytki', '/kserokopya', 'Распечатка', 'изготовление открыток'],
                  ['pakety', '/plastik', 'Пластик', 'печать на пластике'],
                  ['katalogi', '/rizograf', 'Ризограф', 'печать на ризографе'],
                  ['prezentacii', '/holsty', 'Холст', 'изготовление презентации'],

                  // ['kalendari', '/kalendari', 'Календари', 'изготовление календарей'],
                  // ['konverty', '/konverty', 'Конверты', 'изготовление конвертов'],
                  // ['papki', '/papki', 'Папки', 'изготовление папок'],
                  // ['broshur', '/broshur', 'Брошюровка', 'Брошюровка'],
                  // ['birki', '/birki', 'Бирки', 'изготовление бирок'],
                  // ['ruchki', '/ruchki', 'Ручки', 'изготовление ручек']
                ];




				
export default function OurGoods() {
	const { Text, Title } = Typography;
					
  	return (
        <>
          <Title  level={2}  className='sub-title'>Наша продукция:</Title>
          <Row gutter={16}>
            {
              ARROFSVG.map((item: string[], index: number) => {return (
                    <Col xs={12} md={4} key={index}>
                      <motion.div className={styles['motion-block']}
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                          <a href={'/goods' + item[1]}>
                            <Text>{item[2]}</Text>
                            <div  className={styles['img-wrap']}>
                              <img src={`/pechst-items/${item[0]}.svg`} alt={item[3]}  className={styles['image']} />
                            </div>
                          </a>
                      </motion.div>
                  </Col>
              );
            }) 

            }
            
          </Row>
        </>

  );
}
