import { TCardData, TObjectOfCost } from '@/w-types/cardsTypes';
import { findIndexTillN } from '../tempFormulas';

export function broschurovkaCalc(objectOfInput: TCardData, objectOfCost: TObjectOfCost) : [number, string] {
// console.log(11, objectOfInput, objectOfCost);

    // 1_ Константы
    const BROSHUROVKA_ARRAY = [15, 35, 45, 60, 80, 100, 120, 160, 180, 200, 220, 270, 300, 330, 400];

    // 2_ Деструктуризация с подстраховкой
    const { number, stuff = 0 } = objectOfInput;
    const { broschurovkaCost } = objectOfCost;

    if( !number || !broschurovkaCost ) return [0, 'Ничего'];
    
    // 3_ Расчет стоимости ткани флага
    const X_1 = findIndexTillN(BROSHUROVKA_ARRAY, number);

    const X1_1 = broschurovkaCost[stuff][X_1]

    const RESULT = Math.round(X1_1 * 100) / 100

    // 8_ Расчет описания
    const RESULT_DESCRIPTION = `Товар: брошюровка;
								Цена: ${RESULT} рублей;
                                Кол-во листов: ${number} шт;
                                Материал: ${(stuff ? "Железо" : "Пластик")}`;

    return [
        RESULT <= 200 ? 200 : RESULT,
        RESULT_DESCRIPTION,
    ]
}