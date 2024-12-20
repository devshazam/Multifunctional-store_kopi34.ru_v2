import { TCardData, TObjectOfCost } from '@/w-types/cardsTypes';
import { INTERVALS } from '@/z-config/siteConfig';

export function magnitikiCalc(objectOfInput: TCardData, objectOfCost: TObjectOfCost) : [number, string] {
   
	// 1_ Константы
	const DEPTH_NAMES = ['0.3 мм', '0.5 мм', '0.75 мм', '2 мм'];

	// 2_ Деструктуризация с подстраховкой
    const { width, height, number, depth = 0 } = objectOfInput;
    const { magnitikiCost } = objectOfCost;

    if( !width || !height || !number || !magnitikiCost ) return [0, 'Ничего'];
    
    // 3_ Расчет стоимости 
	const x1 = width * height / 1000000;
    const x2 = magnitikiCost[INTERVALS.magnitiki.findIndex((elem) => x1 >= elem[0] && x1 < elem[1])][depth];

    const RESULT = Math.round(x1 * x2 * 100 * number) / 100

    // 8_ Расчет описания
    const RESULT_DESCRIPTION = `Товар: магнитики;
								Цена: ${RESULT} рублей;
								Ширина: ${width};
								Высота: ${height};
                                Кол-во: ${number} шт;
                                Глубина: ${DEPTH_NAMES[depth]}`;
    
    return [
        RESULT <= 200 ? 200 : RESULT,
        RESULT_DESCRIPTION,
    ]
}