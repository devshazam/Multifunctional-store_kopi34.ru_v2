"use client";

import React, { useState } from 'react';
import {  Menu, Button, Drawer, Row, Col, Flex } from 'antd';
import type { MenuProps } from 'antd';
import Image from 'next/image';
import AdminButton from '../ui/AdminButton';
import { AuditOutlined, PrinterOutlined, FormatPainterOutlined, ReadOutlined } from '@ant-design/icons';
import Logo from '../../public/logo.png';
import {MenuOutlined,UserOutlined} from '@ant-design/icons';
  


type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  {
    label: 'Полиграфия',
    key: 'poligrafia',
    icon: <ReadOutlined />,
    children: [
      { label: <a href='/goods/banner'>Баннеры</a>, key: 'setting:1' },
      { label: <a href='/goods/vizitki'>Визитки</a>, key: 'setting:2' },
      { label: <a href='/goods/samokleyki'>Самоклейки</a>, key: 'setting:3' },
      { label: <a href='/goods/posterka'>Постерка (печать)</a>, key: 'setting:4' },
      { label: <a href='/goods/holsty'>Печать на холсте</a>, key: 'setting:5' },
      { label: <a href='/goods/flagi'>Печать флагов</a>, key: 'setting:6' },
      { label: <a href='/goods/plastik'>Печать на пластике</a>, key: 'setting:7' },
    ],
  },
  {
    label: 'Копирование',
    key: 'kopirovanie',
    icon: <AuditOutlined />,
    children: [
      { label: <a href='/goods/kserokopya'>Распечатка</a>, key: 'setting:8' },
      { label: <a href='/goods/skanirovanie'>Сканирование</a>, key: 'setting:9' },
      { label: <a href='/goods/laminacia'>Ламинация</a>, key: 'setting:10' },
      { label: <a href='/goods/broschurovka'>Брощюровка</a>, key: 'setting:11' },
    ],
  },
  {
    label: 'Печать',
    key: 'pechat',
    icon: <PrinterOutlined />,
    children: [
      { label: <a href='/goods/pechatnabumage'>Печать на бумаге</a>, key: 'setting:16' },
      { label: <a href='/goods/photonadoc'>Фото на документы</a>, key: 'setting:18' },
      { label: <a href='/goods/cherteji'>Чертежы</a>, key: 'setting:15' },
      { label: <a href='/goods/rizograf'>Тиражирование на ризоргафе</a>, key: 'setting:17' },
      // { label: <a href='/goods/futbolki'>Футболки</a>, key: 'setting:13' },
      // { label: <a href='/goods/krujki'>Кружки</a>, key: 'setting:14' },
    ],
  },
  {
    label: 'Изделия',
    key: 'izdeliya',
    icon: <FormatPainterOutlined />,
    children: [
      { label: <a href='/goods/shtenderi'>Штендеры</a>, key: 'setting:20' },
      { label: <a href='/goods/bagety'>Багеты</a>, key: 'setting:23' },
      { label: <a href='/goods/magnitiki'>Магнитики</a>, key: 'setting:24' },
      { label: <a href='/goods/ploterka'>Плотерка</a>, key: 'setting:25' },
      // { label: <a href='/goods/pechati'>Печати и штампы</a>, key: 'setting:21' },
      // { label: <a href='/goods/magnityki'>Магнитная лента</a>, key: 'setting:25' },
    ],
  },
];



export default function Header(){
	const [open, setOpen] = useState(false);
	
	const showDrawer = () => {
	  setOpen(true);
	};
	
	const onClose = () => {
	  setOpen(false);
	};

  return (
        <nav className='header'>
          <div className="header__indent-block">
            <div className="header__fixed-header">
                  <div className="temp-wrapper">
                    {/* <div className="header__header-top"> */}
                      {/* <Flex className="header__header-top" justify='space-between' align='center'> */}
                      <Row gutter={16}>
                        <Col  xs={14} md={4}>
                          <Flex align="center" className='w-full h-full' justify='start'>
                            <a href='/'>
                              <Image src={Logo} className='logo' alt='Полиграфия в Волгограде'/>
                            </a>
                          </Flex>
                        </Col>

                        <Col span={16} className='!hidden md:!block'>
                          <Menu mode="horizontal" items={items}/>
                        </Col>
                        <Col  span={4} className='!hidden md:!block'>
                          <Flex align="center" className='w-full h-full' justify='end'>
                            <AdminButton />
                          </Flex>
                        </Col>
						<Col  span={10} className=' md:!hidden'>
							<Flex align="center" className='w-full h-full' justify='end'>
								<Button type="primary" onClick={showDrawer}>
									<MenuOutlined />
								</Button>
							</Flex>
							
							<Drawer title="Меню" onClose={onClose} open={open}>
								<Menu mode="inline" items={items}/>
								<Flex align="center" className='w-full pt-4' justify='end'>
									<AdminButton />
								</Flex>
								
							</Drawer>
                        </Col>



                      </Row>
                      {/* </div> */}
                  </div>
                  <div className="header__run-string-wrapper">
                <div className="header__run-string">
                </div>
              </div>
            </div>
          </div>
        </nav>
  );
}
