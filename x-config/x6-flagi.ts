import { TCommonConfig } from '@/w-types/cardsTypes';

export const flagi: TCommonConfig = {
	rus: 'Флаги',
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
        label: 'Дверко (труба):', // Плотность
        pH: 'Дверко (труба):',
        name: 'drevko',
        defaultValue: 0,
        arrValues: [
          { value: 0, label: 'Без древко' },
          { value: 1, label: 'Древко (2м. пластик)' },
        ],
      },
      {
        label: 'Оверлок:', // Плотность
        pH: 'Оверлок:',
        name: 'overlock',
        defaultValue: 0,
        arrValues: [
          { value: 0, label: 'Без оверлока' },
          { value: 1, label: 'Оверлок по периметру' },
        ],
      },
    ],
    numbersMarks: {
      1: "1 шт",
      9: "Количество:",
      20: "20шт",
    },
    image: false,
	metaData: {
		title: "Печать Флагов в Волгограде | Низкие цены, высокое качество!",
		description: "Печатаем Флаги любых размеров, форм и содержания! Лучшие флаги у нас!",
		h1: "Печать Флагов",
		text: "Печать флагов — это эффективный способ создания ярких и запоминающихся символов для различных мероприятий, организаций или брендов. Флаги часто используются для выражения идентичности, привлекают внимание и подчеркивают значимость события. Печать на флагах позволяет наносить как простые логотипы, так и сложные изображения с точной цветопередачей и долговечностью. Такие флаги устойчивы к воздействию внешней среды и сохраняют яркость даже при длительном использовании на улице, что делает их идеальным решением для рекламы, спортивных событий или государственных нужд."
	},
  };
 