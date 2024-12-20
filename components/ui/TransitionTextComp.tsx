"use client";

import React, { useState, useEffect } from 'react';
import TextTransition, { presets } from 'react-text-transition';
import { Typography } from 'antd';

const { Title } = Typography;

export default function TransitionTextComp() {

  const TEXTS = ['Копирование', 'Печать', 'Фотографии'];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      2000, // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);
  return (
            <>
                <TextTransition springConfig={presets.wobbly} inline={true} >
                  <Title>{TEXTS[index % TEXTS.length]}</Title>
                </TextTransition><p style={{display: "inline", fontSize: '40px'}}>!</p>
          </>      

  );
}
