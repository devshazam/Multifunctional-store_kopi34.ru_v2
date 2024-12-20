import { TCardData, TObjectOfCost } from '@/w-types/cardsTypes';
import { INTERVALS } from '@/z-config/siteConfig';

export function vizitkiCalc(objectOfInput: TCardData, objectOfCost: TObjectOfCost): [number, string] {
    console.log(objectOfInput, objectOfCost);

    // 1_ Константы
	const X_NUMBER = [96, 200, 500, 1000, ];

	// 2_ Деструктуризация с подстраховкой
    const X_SIDES = ["Односторонние", "Двусторонние"];
    const X_BUMAGA = ["Матовая", "Глянцевая"];
    const X_LAMINACIA = ["Без ламинации", "Глянцевая", "Матовая"];
    const { sides = 0, bumaga = 0, laminacia = 0, number } = objectOfInput;

    const { vizitkiCost } = objectOfCost;

    if(!number || !vizitkiCost) return [0, 'Ничего'];

	let vizitnumber = INTERVALS.vizitki.findIndex((elem) => number < elem);
    const RESULT = vizitkiCost[sides][bumaga][laminacia][vizitnumber] / X_NUMBER[vizitnumber] * number;

    // 8_ Расчет описания
    const RESULT_DESCRIPTION = `Товар: визитки;
								Цена: ${RESULT};
								Кол-во: ${number};
								Кол-во сторон: ${X_SIDES[sides]}; 
								Бумага: ${X_BUMAGA[bumaga]}; 
								Ламинация: ${X_LAMINACIA[laminacia]}`;


	return [ RESULT, RESULT_DESCRIPTION ]
}
