"use client";

import { Col, Row, Typography } from 'antd';

const { Title } = Typography;
export default function Partners() {

  return (
    <>
        <Title  level={2}  className='sub-title'>Партнеры:</Title>
                <Row  gutter={[8, 8]} justify={'space-between'} align={'top'}>
                  <Col xs={6} md={3}>
                      <div className='partners__back'>
                      <div className='indriver sprite'>
                                <img src='/partners/gazprom.png' />
                            </div> 
                      </div>
                  </Col>
                  <Col xs={6} md={3}>
                      <div className='partners__back'>
                      <div className='indriver sprite'>
                                <img src='/partners/lukoil.png' />
                            </div> 
                      </div>
                  </Col>
                  <Col xs={6} md={3}>
                      <div className='partners__back'>
                      <div className='indriver sprite'>
                                <img src='/partners/pride.png' />
                            </div> 
                      </div>
                  </Col>
                  <Col xs={6} md={3}>
                      <div className='partners__back'>
                      <div className='indriver sprite'>
                                <img src='/gazprom.png' />
                            </div> 
                      </div>
                  </Col>
                  <Col xs={6} md={3}>
                      <div className='partners__back'>
                      <div className='indriver sprite'>
                                <img src='/gazprom.png' />
                            </div> 
                      </div>
                  </Col>
                  <Col xs={6} md={3}>
                      <div className='partners__back'>
                      <div className='indriver sprite'>
                                <img src='/gazprom.png' />
                            </div> 
                      </div>
                  </Col>
                  <Col xs={6} md={3}>
                      <div className='partners__back'>
                      <div className='indriver sprite'>
                                <img src='/gazprom.png' />
                            </div> 
                      </div>
                  </Col>
                  <Col xs={6} md={3}>
                      <div className='partners__back'>
                            <div className='indriver sprite'>
                                <img src='/gazprom.png' />
                            </div> 
                      </div>
                  </Col>

                </Row>
        </>
  );
}
