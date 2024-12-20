"use client";

import { TItemOfConfig } from '@/w-types/cardsTypes';
import React, { useState } from "react";
import { Col, Select, Switch, InputNumber, Button, Typography } from "antd";

import * as configuration from "@/x-config";

import { useCardStore } from "@/stores";


export default function DependsOn({ name }: { name: string }) {
    const { changeCardData, cardData } = useCardStore();

    if(!configuration[name as keyof typeof configuration].conditionalInput) {
        return <></>;
    }

    return (
		<>
			{configuration[name as keyof typeof configuration]?.conditionalInput?.map(
				(item: TItemOfConfig, index: number) => {
					if(item.dependsOn && cardData[item.dependsOn as keyof typeof cardData] === 19){
				
					return (
						<Col md={12} xs={24} key={index}>
							{item["arrValues"] ? (
								<Select
									placeholder={item["pH"]}
									style={{ width: "100%" }}
									options={item["arrValues"]}
									onChange={(value: number) => {
										changeCardData( item["name"], value) }}
								/>
							) : (
								<InputNumber
									min={ item["limits"] && item["limits"][0] ? item["limits"][0] : 1 }
									max={100000}
									placeholder={item["pH"]}
									style={{ width: "100%" }}
									onChange={(value: number | null) => {
										if (!value) { changeCardData( item["name"], 0) }else{
											changeCardData( item["name"], value)
										}
									}}
								/>
							)}
						</Col>
					);
					}else{
						return <></>
					} 
				}
			)}
		</>
    );
}
