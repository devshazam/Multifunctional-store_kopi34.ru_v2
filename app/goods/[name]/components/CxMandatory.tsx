"use client";

import { TItemOfConfig } from '@/w-types/cardsTypes';
import React from "react";
import { Col, Select, InputNumber } from "antd";

import * as configuration from "@/x-config";

import { useCardStore } from "@/stores";

import { COLORS } from '@/z-config/siteConfig';

export default function CxMandatory({ name }: { name: string }) {
    const { cardData, changeCardData } = useCardStore();
    const {descriptionCard, ...secondObject } = cardData;


    return (
        <>
            {configuration[name as keyof typeof configuration].mandatory.map(
                (item: TItemOfConfig, index: number) => {
                    return (
                        <Col md={12} xs={24} key={index}>
                            { item["arrValues"] 
							? 
							
							<>{ item["multiple"] ?
									<Select
										placeholder={item["pH"]}
										style={{ width: "100%" }}
										
										options={
											Object.keys(COLORS[name as keyof typeof COLORS]).map((item: string, index: number) => {
												return {
													label: <span>{item}</span>,
													title: item,
													options: Object.values(COLORS[name as keyof typeof COLORS])[index].map(
														(item2: string[], index2: number) => {
															return {
																label: <span className='wrap_color-input'>{item2[0]} <span  style={{ backgroundColor: item2[1]}}  className='color-input'></span></span>,
																value: Number(`${index}${index2}`),
															}
														}
													),
												}
											})
										}
										value={secondObject[item["name"] as keyof typeof secondObject]}
										onChange={(value: number) => {
											changeCardData( item["name"], value) }} 
									/>
								:
								<Select
										placeholder={item["pH"]}
										style={{ width: "100%" }}
										options={ item["arrValues"] }
										value={secondObject[item["name"] as keyof typeof secondObject]}
										onChange={(value: number) => {
											changeCardData( item["name"], value) }} 
									/>
								}</>
							
								:
								
								(
									<InputNumber
										min={1}
										max={item["limits"] && item["limits"][1] ? item["limits"][1] : 100000}
										placeholder={item["pH"]}
										style={{ width: "100%" }}
										value={secondObject[item["name"] as keyof typeof secondObject]}
										onChange={(value: number | null) => {
											if (!value) { changeCardData( item["name"], 0) }else{
												changeCardData( item["name"], value)
											}
										}}
									/>
									)
							}
                        </Col>
                    );
                }
            )}
        </>
    );
}
