import { TCommonConfig } from '@/w-types/cardsTypes';


export const ploterka: TCommonConfig = {
	rus: 'Плотерка',
    mandatory:
    [
		{
			label: 'Ширина',
			pH: 'миллиметры', // Ширина
			name: 'width',
			limits: [1, 1200],
			defaultValue: 1000,
			},
			{
			label: 'Высота',
			pH: 'миллиметры', // Ширина
			name: 'height',
			defaultValue: 1000,
			},
		{
			label: 'Цвет:', // Плотность
			pH: 'Цвет:',
			name: 'color',
			defaultValue: 0,
			arrValues: [
				{ value: 0, label: 'Ошибка' },
				],
			multiple: true
		
		},
		{
			label: 'Вид услуги:', // Плотность
			pH: 'Вид услуги:',
			name: 'type',
			defaultValue: 0,
			arrValues: [
			{ value: 0, label: 'Плоттерная резка' },
			{ value: 1, label: 'Тоже + снятие излишков' },
			{ value: 2, label: 'Тоже + монтажная пленка' },
			],
		},
    ],

    numbersMarks: {
      1: "1 шт",
      50: "Кол-во:",
      100: "100",
    },
    image: false,
	metaData: {
		title: "Плоттерная резка в Волгограде | Низкие цены, высокое качество!",
		description: "Плоттерная резка любых размеров, форм и содержания! Лучшая Плоттерная резка у нас!",
		h1: "Плоттерная резка",
		text: "Плоттерная резка — это процесс вырезания различных форм и изображений из материалов, таких как винил, бумага, ткань или пластик, с помощью специального устройства — плоттера. Плоттер использует нож, который точно вырезает контуры, следуя заранее подготовленным цифровым шаблонам. Этот метод применяется в рекламе для создания стикеров, наклеек, трафаретов, а также в текстильной промышленности для вырезания деталей одежды. Плоттерная резка позволяет добиться высокой точности и детализированности, что делает её популярной для производства индивидуальных и мелкосерийных изделий."
	},
  };
 
  

//   Object.keys(RAL).map((item) => {

// 	return {
// 			label: <span>item</span>,
// 			title: item,
// 			options: [
// 			  { label: <span>Jack</span>, value: 'Jack' },
// 			  { label: <span>Lucy</span>, value: 'Lucy' },
// 			],
// 		  }
	
//   })


// [
// 	{
// 	  label: <span>manager</span>,
// 	  title: 'manager',
// 	  options: [
// 		{ label: <span>Jack</span>, value: 'Jack' },
// 		{ label: <span>Lucy</span>, value: 'Lucy' },
// 	  ],
// 	},
// 	{
// 	  label: <span>engineer</span>,
// 	  title: 'engineer',
// 	  options: [
// 		{ label: <span>Chloe</span>, value: 'Chloe' },
// 		{ label: <span>Lucas</span>, value: 'Lucas' },
// 	  ],
// 	},
//   ]