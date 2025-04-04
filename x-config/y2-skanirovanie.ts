import { TCommonConfig } from '@/w-types/cardsTypes';

export const skanirovanie: TCommonConfig = {
	rus: 'Сканирование',
    mandatory:
    [
      {
        label: 'Формат бумаги:', // Плотность
        pH: 'Формат бумаги:',
        name: 'aformat',
        defaultValue: 0,
        arrValues: [
          { value: 0, label: 'А4' },
          { value: 1, label: 'A3' },
          { value: 2, label: 'A2' },
          { value: 3, label: 'A1' },
          { value: 4, label: 'A0' },
        ],
      },
      {
        label: 'Цветность:', // Плотность
        pH: 'Цветность:',
        name: 'color',
        defaultValue: 0,
        arrValues: [
          { value: 0, label: 'Черно - белая' },
          { value: 1, label: 'Цветная' },
        ],
      },
    ],
    numbersMarks: {
      1: "1 шт",
      100: "Количество:",
      200: "200шт",
    },
    image: false,
	metaData: {
		title: "Сканирование в Волгограде | Низкие цены, высокое качество!",
		description: "Сканирование любых размеров, форм и содержания! Лучшее сканирование у нас!",
		h1: "Сканирование файлов",
		text: "Сканирование — это процесс преобразования бумажных документов или изображений в цифровой формат с помощью сканера. Устройство считывает информацию с поверхности оригинала и сохраняет её в виде файла на компьютере или другом устройстве. Этот метод используется для архивирования, отправки данных по электронной почте или обработки информации в цифровом виде."
	},
  };
 
  