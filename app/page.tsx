"use client";

// import { Skeleton } from 'antd';
// import dynamic from "next/dynamic";
import MainBackground from '../components/home/MainBackground';
import Portfolio from '../components/home/Portfolio';
import Partners from '../components/home/Partners';
import Loyalty from '../components/home/Loyalty';
import OurGoods from '../components/home/OurGoods';


export default function Home() {

  return (
	<>
      <MainBackground/>
    
      <section id='tarifs' className='tarifs bg-gray-100'>
        <div className="temp-wrapper">
          <div className="temp-indent--center">
            <OurGoods /> 
          </div>
        </div>
      </section> 

      <section  className='loyalty'>
        <div className="temp-wrapper">
          <div className="temp-indent--center">
            <Loyalty/>
          </div>
        </div>
      </section>

      <section id='tarifs' className='tarifs bg-gray-100'>
        <div className="temp-wrapper">
          <div className="temp-indent--center">
            <Portfolio /> 
          </div>
        </div>
      </section> 
    
      {/* <section className='tarifs bg-gray-100'>
        <div className="temp-wrapper">
          <div className="temp-indent--center" style={{paddingBottom: '70px'}}>
            <Partners/>
          </div>
        </div>
      </section> */}
    </>
  );
}
