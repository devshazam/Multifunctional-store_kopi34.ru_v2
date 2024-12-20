
import React from 'react';

import { Row, Col } from 'antd';

import AxImage from './components/AxImage';
import * as configuration from '@/x-config';
import { notFound } from 'next/navigation'

import Initiator from './Initiator';
import type { Metadata, ResolvingMetadata } from 'next'
import SeoModule from '@/components/ui/SeoModule';
 
type Props = {
  params: Promise<{ name: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}
 
export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const name = (await params).name
 
  return {
    title: configuration[name as keyof typeof configuration].metaData.title,
	description: configuration[name as keyof typeof configuration].metaData.description,
  }
}

export default function GoodsJointPage({ params }: { params: { name: string } }) {

	const { name } = params;

	// проверка на существование страницы с переадресацией
	if (Object.keys(configuration).includes(name) === false) { notFound() } 

  return (
	<>
      <section id='tarifs' className='tarifs bg-gray-100'>
        <div className="temp-wrapper">
          <div className="temp-indent--center">
          <Row gutter={16}>
            <Col xs={24} md={12}>

				{/* Картинка */}
              	<AxImage name={name} />
              
            </Col>
            <Col xs={24} md={12}>

				<Initiator name={name} />

            </Col>
          </Row>

		  	<SeoModule name={name} />
          </div>
        </div>
      </section> 
</>
  );
}

