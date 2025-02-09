import { TCommonConfig } from '@/w-types/cardsTypes';


export const rizograf: TCommonConfig = {
	rus: 'Ризограф',
    mandatory:
    [
      {
        label: 'Формат печати:', // Плотность
        pH: 'Формат печати:',
        name: 'aformat',
        defaultValue: 0,
        arrValues: [
          { value: 0, label: 'A4' },
          { value: 1, label: 'A3' },
        ],
      },
      {
        label: 'Стороны печати:', // Плотность
        pH: 'Стороны печати:',
        name: 'sides',
        defaultValue: 0,
        arrValues: [
          { value: 0, label: 'Односторонняя' },
          { value: 1, label: 'Двусторонняя' },
        ],
      },
    ],
    optional:
    [
      {
        label: 'Цвет бумаги:', // Плотность
        pH: 'Цвет бумаги:',
        name: 'color',
        defaultValue: 0,
        arrValues: [
          { value: 0, label: 'Белая' },
          { value: 1, label: 'Цветная' },
        ],
      },
    ],
    numbersMarks: {
      1: "1шт",
      10000: "Кол-во:",
      21000: "21 000",
    },
    image: false,
	metaData: {
		title: "Ризография в Волгограде | Низкие цены, высокое качество!",
		description: "Печатаем ризографией любых размеров, форм и содержания! Лучшие ризография у нас!",
		h1: "Ризография",
		text: "Ризография — это метод оперативной печати, сочетающий принципы трафаретного и цифрового копирования. С его помощью можно быстро и экономично изготавливать большие тиражи документов, плакатов или буклетов. Ризографы используют специальные краски и матрицы, обеспечивая качественную передачу текста и графики при низкой себестоимости. Эта технология особенно востребована для печати учебных материалов, рекламной продукции и листовок."
	},
  };
 
  