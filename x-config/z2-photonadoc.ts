import { TCommonConfig } from '@/w-types/cardsTypes';


export const photonadoc: TCommonConfig = {
	rus: 'Фото на документы',
    mandatory:
    [
      {
        label: 'Назначение:', // Плотность
        pH: 'Назначение:',
        name: 'type',
        defaultValue: 0,
        arrValues: [
          { value: 0, label: 'Паспорт РФ цвет. (3,4х4,5)' },
          { value: 1, label: 'Загран. РФ цвет. (3,4х4,5)' },
          { value: 2, label: 'Виза цвет. (3,4х4,5)' }, 
          { value: 3, label: 'Виза США цвет. (5х5)' },
          { value: 4, label: 'Личное дело цвет. (4х6)' },
          { value: 5, label: 'Личное дело цвет. (9х12)' },
          { value: 6, label: 'Фотография цвет. (3х4)' },
          { value: 7, label: 'Личное дело ч/б. (4х6)' },
          { value: 8, label: 'Личное дело ч/б. (9х12)' },
          { value: 9, label: 'Фотография ч/б. (3х4)' },

        ],
      },
      {
        label: 'Монтаж одежды:', // Плотность
        pH: 'Монтаж одежды:',
        name: 'cloth',
        defaultValue: 0,
        arrValues: [
          { value: 0, label: 'Без монтажа одежды' },
          { value: 1, label: 'Монтировать одежду' },
        ],
      },
    ],
    numbersMarks: {
      1: "1шт",
      12: "Кол-во:",
      20: "20шт",
    },
    image: false,
	metaData: {
		title: "Фото на документы в Волгограде | Низкие цены, высокое качество!",
		description: "Фото на документы любых размеров, форм и содержания! Лучшие фото на документы у нас!",
		h1: "Фото на документы",
		text: "Фото на документы — это профессиональная услуга, которая включает создание и печать снимков, соответствующих установленным стандартам для официальных документов. Такие фотографии выполняются с учётом строгих требований к размеру, фону и освещению, чтобы соответствовать нормам идентификации. Услуга востребована для паспортов, виз, удостоверений и других документов."
	},
  };
  // cloth
 
  