"use client";

import { TItemOfConfig } from '@/w-types/cardsTypes';
import React, { useEffect, useState } from "react";
import { Col, Select, Switch, InputNumber, } from "antd";

import * as configuration from "@/x-config";
import {typeBaget} from "@/z-config/bagets";
import { useCardStore } from "@/stores";


export default function GxCongitional({ name }: { name: string }) {
    const { changeCardData, cardData } = useCardStore();

    useEffect(() => {

        changeCardData( 'subtype', 0)
        changeCardData( 'color', 0)
    }, [])
    const conditional = configuration[name as keyof typeof configuration]?.conditional;

    if(!conditional || cardData.type === undefined || cardData.subtype === undefined) {
        return <></>;
    }
    const x1 = typeBaget[cardData.type as keyof typeof typeBaget];
    // const x2: (string[] | number[] | undefined) = x1[Object.keys(x1)[cardData.subtype as keyof typeof x1] as keyof typeof x1];
    const x3 = Object.keys(x1)
    const x2: any = x1[x3[cardData.subtype as keyof typeof x3] as keyof typeof x1];
    console.log(x2)


    return (
        // arrValues: [
        //     { value: 0, label: 'А4' },
        //     { value: 1, label: 'A3' },
        //     { value: 2, label: 'A2' },
        //     { value: 3, label: 'A1' },
        //     { value: 4, label: 'A0' },
        //   ],
        <>
                        <Col md={12} xs={24}>
                            <Select
                                placeholder={'ПодТип:'}
                                style={{ width: "100%" }}
                                options={
                                    [...Object.keys(x1).map((item: string, index: number) => {return {value: index, label: item}})]
                                }
                                // value={cardData[item["name"]]}
                                onChange={(value: number) => {
                                    changeCardData('subtype', value) }}
                            />
                        </Col>
                        {x2 !== undefined
                        &&
                        <Col md={12} xs={24}>
                            <Select
                                placeholder={'Цвет:'}
                                style={{ width: "100%" }}
                                options={
                                    [...x2.map((item: string, index: number) => {return {value: index, label: item}})]
                                    
                                    
                                }
                                // value={cardData[item["name"]]}
                                onChange={(value: number) => {
                                    changeCardData( 'color', value) }}
                            />
                        </Col>
}
        </>
    )

}
