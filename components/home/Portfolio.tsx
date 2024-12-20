"use client";

import { Col, Row , Typography, Image} from 'antd';


const { Title} = Typography;


export default function Portfolio() {

  
  return (
  
    <>
          <Title  level={2}  className='sub-title'>Портфолио:</Title>
            <Row  gutter={[16, 16]} justify={'start'} align={'top'} className='mt-16'>
                <Col xs={24} md={8}>
                    <Image src='/portfolio/11.jpg' />
                </Col>
                <Col xs={24} md={8}>
                    <Image src='/portfolio/12.jpg' />
                </Col>
                <Col xs={24} md={8}>
                    <Image src='/portfolio/3.jpg' />
                </Col>
                <Col xs={24} md={8}>
                    <Image src='/portfolio/5.jpg' />
                </Col>
                <Col xs={24} md={8}>
                    <Image src='/portfolio/6.jpg' />
                </Col>
                <Col xs={24} md={8}>
                    <Image src='/portfolio/7.jpg' />
                </Col>
            </Row>
</>
  );
}

  


