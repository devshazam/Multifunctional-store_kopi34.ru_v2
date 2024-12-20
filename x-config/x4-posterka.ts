import { TCommonConfig } from '@/w-types/cardsTypes';

export const posterka: TCommonConfig = {
	rus: 'Постерка',
    mandatory:
    [
      {
        label: 'Ширина',
        pH: 'миллиметры', // Ширина
        name: 'width',
        defaultValue: 1000,
      },
      {
        label: 'Высота',
        pH: 'миллиметры', // Ширина
        name: 'height',
        defaultValue: 1000,
      },
    ],

    optional:     
    [
      {
        label: 'Плотность', // Плотность
        pH: 'Плотность (гр.)',
        name: 'density',
        defaultValue: 0,
        arrValues: [
          { value: 0, label: '400-440' },
          { value: 1, label: '500' },
        ],
      },
      {
        label: 'Проклейка',
        pH: 'Проклейка по периметру',
        name: 'prokleika',
        defaultValue: 0,
        arrValues: [
          { value: 0, label: 'Без проклейки' },
          { value: 1, label: 'Проклейка по периметру' },
        ],
      },
      {
        label: 'Люверсование',
        pH: 'Люверсование',
        name: 'luversovanie',
        defaultValue: 0,
        arrValues: [
          { value: 0, label: 'Без люверсов' },
          { value: 1, label: 'Шаг 200 мм' },
          { value: 2, label: 'Шаг 300 мм' },
          { value: 3, label: 'Шаг 400 мм' },
          { value: 4, label: 'Шаг 500 мм' },
        ],
      },
      {
        label: 'Доп. люверсы',
        pH: 'Доп. люверсы (шт.)',
        name: 'luversy',
        defaultValue: 0,
      },
      {
        label: 'Перфорация',
        pH: 'Перфорация (шт)',
        name: 'perforacia',
        defaultValue: 0,
      },
    ],
    numbersMarks: {
      1: "1 шт",
      9: "Количество:",
      20: "20шт",
    },
    image: false,
	metaData: {
		title: "Печать Постеров в Волгограде | Низкие цены, высокое качество!",
		description: "Печатаем Постеры любых размеров, форм и содержания! Лучшие постеры у нас!",
		h1: "Печать Постеров",
		text: "Печать постеров — это популярный способ создания ярких и выразительных рекламных материалов или арт-объектов. Постеры могут быть использованы для различных целей: от рекламных кампаний и анонсов событий до оформления интерьеров. Современные технологии печати обеспечивают высокое качество изображений, точность цветопередачи и долговечность материалов. Благодаря разнообразию форматов и дизайна, постеры позволяют передать нужное сообщение или создать атмосферу, привлекая внимание и оставляя яркое впечатление."
	},
  };
 