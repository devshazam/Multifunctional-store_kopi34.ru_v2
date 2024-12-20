import { TCardData, TObjectOfCost } from '@/w-types/cardsTypes';
import { findIndexTillN } from '../tempFormulas'
export function rizografCalc(objectOfInput: TCardData, objectOfCost: TObjectOfCost) : [number, string] {
// console.log(11, objectOfInput, objectOfCost);

    // 1_ Константы
    const PAGES_LIMITS = [1000, 2000, 5000, 10000, 20000, Infinity]

    // 2_ Деструктуризация с подстраховкой
    const { number, aformat = 0, sides = 0, color = 0 } = objectOfInput;
    const { rizografCost, colorCost } = objectOfCost;

    if( !number || !rizografCost || !rizografCost || !colorCost ) return [0, 'Ничего'];
    
    // 3_ Расчет стоимости 
    const X1 = rizografCost[aformat][sides][findIndexTillN(PAGES_LIMITS, number)];

    const X2 = !!color ? colorCost[aformat] : 0;

    const RESULT = Math.round((X1 + X2) * 100 * number) / 100

    // 8_ Расчет описания
    const RESULT_DESCRIPTION = `Товар: ризограф;
								Цена: ${RESULT} рублей;
                                Кол-во чертежей: ${number} шт;
                                Формат: ${(aformat ? "А3" : "А4")};
                                Цветность: ${(color ? "Цветной" : "Черно/белый")};
                                Фальцовка: ${(sides ? "Двусторонние" : "Односторонний")}`;
    
    return [
        RESULT <= 200 ? 200 : RESULT,
        RESULT_DESCRIPTION,
    ]
}