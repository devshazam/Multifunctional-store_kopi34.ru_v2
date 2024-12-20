import { TCommonConfig } from '@/w-types/cardsTypes';

export const bagety: TCommonConfig = {
	rus: 'Багеты',
    mandatory:
    [
      {
        label: 'Ширина',
        pH: 'миллиметры', // Ширина
        name: 'width',
		limits: [1, 1500],
        defaultValue: 1000,
      },
      {
        label: 'Высота',
        pH: 'миллиметры', // Ширина
        name: 'height',
		limits: [1, 1500],
        defaultValue: 1000,
      },
      {
        label: 'Тип багета:', // Плотность
        pH: 'Тип багета:',
        name: 'type',
        defaultValue: 0,
        arrValues: [
          { value: 0, label: 'B' },
          { value: 1, label: 'C' },
          { value: 2, label: 'D' },
          { value: 3, label: 'E' },
          { value: 4, label: 'F' },
          { value: 5, label: 'G' },
          { value: 6, label: 'H' },
        ],
      },

    ],
    conditional: true,
    // [
    //   ...typeBaget.map((item, index: number) => {
    //       const x1 = Object.keys(item)
          
    //       return {
    //         dependOn: {type: index},
    //         label: 'Подтип багета:',
    //         pH: 'Подтип багета:',
    //         name: 'subtype',
    //         arrValues: [
    //           ...x1.map((item2: string | number , index2: number) => {
    //             return { value: index2, label: item2 }
    //           })
    //         ],
    //         children:
    //         [
    //           ...x1.map((item2: string | number , index2: number) => {
    //             const x12 = item[item2 as keyof typeof item]

    //             return {value: index2, label: item2, child: 
    //                   {
    //                   label: 'Цвет:', 
    //                   pH: 'Цвет:',
    //                   name: 'color',
    //                   arrValues: [
    //                     ...((x12 ?? [])).map((item3: string | number , index3: number) => {return {value: index3, label: item3}}),
    //                   ],
    //                 },
    //               }
    //           }),
    //         ]
    //       }
    //   }),
      // {
      //   dependOn: {type: 0},
      //   label: 'Подтип багета:', // Плотность
      //   pH: 'Подтип багета:',
      //   name: 'subtype',
      //   arrValues: [
      //     { value: 0, label: '1624', child: 
      //                {
                        //   label: 'Цвет:', 
                        //   pH: 'Цвет:',
                        //   name: 'color',
                        //   arrValues: [
                        //     { value: 0, label: '1624' },
                        //   ],
                        // },
      //                },
      //   ],
      // },
    // ],



    optional:
    [
      {
        label: 'Стекло:', // Плотность
        pH: 'Цвет бумаги:',
        name: 'glasses',
        defaultValue: 0,
        arrValues: [
          { value: 0, label: 'Со стеклом (стандарт)' },
          { value: 1, label: 'Без стекла' },
        ],
      },
      {
        label: 'Задник:', // Плотность
        pH: 'Задник:',
        name: 'pet',
        defaultValue: 0,
        arrValues: [
          { value: 0, label: 'Без ПЭТ' },
          { value: 1, label: 'С ПЭТ' },
        ],
      },
      {
        label: 'Задник:', // Плотность
        pH: 'Задник:',
        name: 'back',
        defaultValue: 0,
        arrValues: [
          { value: 0, label: 'Стандарт' },
          { value: 1, label: 'Картон' },
          { value: 2, label: 'ПВХ' },
        ],
      },
    ],
    numbersMarks: {
      1: "1 шт",
      5: "Кол-во:",
      10: "10 шт",
    },
    image: true,
	metaData: {
		title: "Изготовление Багетов в Волгограде | Низкие цены, высокое качество!",
		description: "Изготовление Багетов любых размеров, форм и содержания! Лучшие багеты у нас!",
		h1: "Изготовление Багетов ",
		text: "Изготовление багетов — это процесс создания рамок для оформления картин, фотографий и других произведений искусства. Багеты изготавливаются из различных материалов, таких как дерево, металл или пластик, и могут быть украшены различными декоративными элементами. Этот процесс включает в себя подбор подходящего дизайна, резку и обработку материала, а также установку стекла и паспарту. Багеты помогают не только защитить изделия, но и придают им завершённый, эстетически привлекательный вид, подчеркивая их художественную ценность."
	},
  };
 
  