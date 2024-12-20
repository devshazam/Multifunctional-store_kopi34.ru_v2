"use client";

import styles from './MainBackground.module.scss';

import Image from 'next/image';
import { Col, Row, Flex, Typography } from 'antd';

import bannerImage from '../../public/Printers-Text-block.svg';
import { Suspense , lazy} from 'react';

const { Text } = Typography;

export default function MainBackground() {

  const TransitionTextComp = lazy(() => import('../ui/TransitionTextComp'));

  return (
    <section className={styles.banner}>
        <div className="temp-wrapper">
          <Row className="temp-indent" gutter={16}>
            <Col xs={24} md={12} className='banner__col'>
              <Flex vertical  justify='center' className='h-full'>
                <div className="banner__text-wrapper">
                  <Suspense fallback={<div>...</div>}>
                    <TransitionTextComp />
                  </Suspense>
                  <Text className='block'>Наша компания работает с 2011 года и все это время мы изо всех сил стараемся угодить клиентским запросам на высшем уровне! <span className="banner__hidden-title">В нашей компании все клиенты будут удовлетворены!</span></Text>
                </div>
              </Flex>
            </Col>
            <Col xs={24} md={12}>
                    {/* <Image alt="Такси межгород" src={MainImageXs}  style={{ width: '100%', height: 'auto'}} className="banner__img-xs" priority/>
                      <Image alt="Такси межгород" src={MainImageMd}  style={{ width: '100%', height: 'auto'}} className="banner__img-md" /> */}
              <Image alt="Такси межгород" src={bannerImage}  style={{ width: '100%', height: 'auto'}} className="banner__img" />
            </Col>
          </Row>
        </div>
    </section>

  );
}
