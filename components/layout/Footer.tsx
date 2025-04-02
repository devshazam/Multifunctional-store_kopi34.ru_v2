'use client';

import { Col, Row, Typography } from 'antd';

const { Text } = Typography;

export default function Footer() {

  return (

      <footer className='footer '>
        <div className="temp-wrapper">
        <div className="temp-indent--center">

          <Row className='' gutter={16}>
            
            <Col xs={12} md={6}>
            <div className="wrapper-footer-content">
                <p><b>Документы:</b></p>
                <ul>
                  <li><a href='/oferta'>Договор оферты</a></li>
                </ul>
              </div>
            </Col>
            <Col xs={12} md={6}>
              <div className="wrapper-footer-content">
                <p><b>Примечания:</b></p>
                <ul>
                  <li>Работаем с юр. лицами по тендерным закупкам</li>
                </ul>
              </div>
            </Col>
            <Col xs={12} md={6}>
              <div className="wrapper-footer-content">
                <p><b>Адреса:</b></p>
                <ul>
                  <li>Петропавловская 87</li>
                  <li>Казахская 25</li>
                  <li>2-я Динамовская 6 (производство)</li>
                </ul>
              </div>
            </Col>
            <Col xs={12} md={6}>
              <div className="wrapper-footer-content">
                <p><b>Контакты:</b></p>
                <ul>
                </ul>
              </div>
            </Col>
          </Row>
        <Text>© 2011 - 2024 Полиграфия в Волгограде. Все права защищены</Text>
        </div>
        </div>
      </footer>


  );
}
