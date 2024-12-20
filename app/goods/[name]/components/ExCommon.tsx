"use client";

import React from "react";

import { Col, Slider, Select, Input } from "antd";
import type { SliderSingleProps } from "antd";
import { useCardStore } from "@/stores";
import * as configuration from "@/x-config";
const { TextArea } = Input;


export default function ExCommon({ name }: { name: string }) {
    const { cardData, changeCardData } = useCardStore();
    const maxNumber = +Object.keys(configuration[name as keyof typeof configuration]?.numbersMarks)[2];
    const marks: SliderSingleProps["marks"] = { ...configuration[name as keyof typeof configuration]?.numbersMarks };
    return (
        <>
            <Col span={24}>
                <Slider
                    marks={marks}
                    min={1}
                    max={maxNumber}
                    value={cardData.number}
                    onChange={(value: number) => {
                        changeCardData( 'number', value) }}
                    // value={typeof inputValue === 'number' ? inputValue : 0}
                />
            </Col>



            <Col span={24}>
                <TextArea
                    style={{ width: "100%" }}
                    onChange={( e: React.ChangeEvent< HTMLInputElement | HTMLTextAreaElement > ) => {
                        changeCardData( 'descriptionCard', e.target.value) 
                    }}

                    placeholder="Доп. описание до 300 символов"
                    maxLength={300}
                />
            </Col>

            <Col span={24}>
                <Select
                    defaultValue={0}
                    placeholder="Офис выдачи"
                    style={{ width: "100%" }}
                    onChange={(value: number) => {
                        changeCardData( 'office', value) }}
                    options={[
                        { value: 0, label: "Петропавловская 87" },
                        { value: 1, label: "Казахская 25" },
                    ]}
                />
            </Col>

        </>
    );
}
