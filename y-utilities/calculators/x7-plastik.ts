import { TCardData, TObjectOfCost } from '@/w-types/cardsTypes';
import { INTERVALS } from '@/z-config/siteConfig';

export function plastikCalc(objectOfInput: TCardData, objectOfCost: TObjectOfCost) : [number, string] {

	const FORMAT_TO_COST = [250, 300, 350, 400, 600, 750, 950, 1000, 1350, 1350, 1500, 1750, 1900, 2100, 2450, 2800, 2850, 3150, 3500];
	const FORMAT_TO_NAME = ['100x150мм', '150x200мм', '300x100мм', '210x300мм', '300x300мм', '300x400мм', '400x500мм', '400x600мм', '500x700мм', '600x600мм', '600x700мм', '600x800мм', '600x900мм', '600x1000мм', '700x1000мм', '800x1000мм', '900x900мм', '900x1000мм', '1000x1000мм', 'Свой размер от 1000 ММ'];
    // 2_ Деструктуризация с подстраховкой
    const { width, height, number, aformat = 0 } = objectOfInput;
    const { squareCost } = objectOfCost;

    if(!number || !squareCost ) return [0, 'Ничего'];
    
	// 3_ Расчет стоимости 
	let RESULT = 0;

	if(aformat === 19){
		if(!width || !height ) return [0, 'Ничего'];
		
		const SQUARE = width * height / 1000000;
		const X1_1 = squareCost[INTERVALS.plastik.findIndex((elem) => SQUARE >= elem[0] && SQUARE < elem[1])]
		RESULT = Math.round(X1_1 * SQUARE * number * 100) / 100
	}else{
		RESULT = FORMAT_TO_COST[aformat] * number;

	}

    // 8_ Расчет описания
    const RESULT_DESCRIPTION = `Товар: печать на пластике;
								Цена: ${RESULT} рублей;
                                ${aformat !== 19 ? 'Размер: ' + FORMAT_TO_NAME[aformat] : 'Ширина: ' + width + 'мм; Высота: ' + height + 'мм;'}
								Кол-во: ${number} шт`;

    return [
        RESULT <= 200 ? 200 : RESULT,
        RESULT_DESCRIPTION,
    ]
}