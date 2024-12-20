import { TCommonConfig } from '@/w-types/cardsTypes';

export const laminacia: TCommonConfig = {
	rus: 'Ламинация',
    mandatory:
    [
      {
        label: 'Формат бумаги:', // Плотность
        pH: 'Формат бумаги:',
        name: 'aformat',
        defaultValue: 0,
        arrValues: [
          { value: 0, label: 'Бейдж: (100х70мм)' },
          { value: 1, label: 'A6' },
          { value: 2, label: 'A5' },
          { value: 3, label: 'A4' },
          { value: 4, label: 'A3' },
          { value: 5, label: 'A2' },
          { value: 6, label: 'A1' },
        ],
      },
      {
        label: 'Толщина (мкм):', // Плотность
        pH: 'Толщина (мкм):',
        name: 'depth',
        defaultValue: 0,
        arrValues: [
          { value: 0, label: '70 мкм' },
          { value: 1, label: '80 мкм' },
          { value: 2, label: '100 мкм' },
          { value: 3, label: '125 мкм' },
          { value: 4, label: '150 мкм' },
          { value: 5, label: '250 мкм' },
        ],
      },
      {
        label: 'Покрытие:', // Плотность
        pH: 'Покрытие:',
        name: 'coating',
        defaultValue: 0,
        arrValues: [
          { value: 0, label: 'Глянцевая' },
          { value: 1, label: 'Матовая' },
        ],
      },
    ],
    numbersMarks: {
      1: "1 шт",
      10: "Количество:",
      20: "20шт",
    },
    image: false,
	metaData: {
		title: "Ламинация в Волгограде | Низкие цены, высокое качество!",
		description: "Ламинирование любых размеров, форм и содержания! Лучшее ламинирование у нас!",
		h1: "Ламинация",
		text: "Ламинация — это процесс покрытия документов или изображений тонкой пленкой для защиты от повреждений, влаги и выцветания. Ламинирование сохраняет внешний вид и увеличивает срок службы материалов, делая их устойчивыми к внешним воздействиям. Этот метод часто используется для оформления удостоверений, меню, сертификатов и других важных документов."
	},
  };
 
  