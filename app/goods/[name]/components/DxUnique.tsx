"use client";

import { TItemOfConfig } from '@/w-types/cardsTypes';
import React, { useState } from "react";
import { Col, Select, Switch, InputNumber, Button, Typography } from "antd";

import * as configuration from "@/x-config";

import { useCardStore } from "@/stores";


export default function DxUnique({ name }: { name: string }) {
    const { changeCardData } = useCardStore();

    const [switchMore, setSwitchMore] = useState<boolean>(false);

    if(!configuration[name as keyof typeof configuration].optional) {
        return <></>;
    }
    return (

         <>
            <Col span={24}>
                <Switch
                    checkedChildren="Закрыть"
                    unCheckedChildren="Опции:"
                    onChange={(checked: boolean) => {
                        setSwitchMore(checked);
                    }}
                />
            </Col>
            
            
            {switchMore && (
                <>
                    {configuration[name as keyof typeof configuration]?.optional?.map(
                        (item: TItemOfConfig, index: number) => {
                            return (
                                <Col md={12} xs={24} key={index}>
                                    {item["arrValues"] ? (
                                        <Select
                                            placeholder={item["pH"]}
                                            style={{ width: "100%" }}
                                            options={item["arrValues"]}
                                            // value={cardData[item["name"]]}
                                            onChange={(value: number) => {
                                                changeCardData( item["name"], value) }}
                                        />
                                    ) : (
                                        <InputNumber
                                            min={1}
                                            max={100000}
                                            placeholder={item["pH"]}
                                            style={{ width: "100%" }}
                                            // value={cardData[item["name"]]}
                                            onChange={(value: number | null) => {
                                                if (!value) { changeCardData( item["name"], 0) }else{
                                                    changeCardData( item["name"], value)
                                                }
                                            }}
                                        />
                                    )}
                                </Col>
                            );
                        }
                    )}
                </>
            )}
            </>


    );
}
