import { TCardData, TObjectOfCost } from '@/w-types/cardsTypes';
import { findIndexTillN } from '../tempFormulas'
export function chertejiCalc(objectOfInput: TCardData, objectOfCost: TObjectOfCost) : [number, string] {
// console.log(11, objectOfInput, objectOfCost);

    // 1_ Константы
    const PAGES_LIMITS = [10, 50, 100, 200, 500, Infinity]
    const FORMAT_CHERTEJ = ['A4', 'A3', 'A2', 'A1', 'A0', 'B0' ]

    // 2_ Деструктуризация с подстраховкой
    const { number, aformat = 0, falc = 0, color = 0 } = objectOfInput;
    const { chertejiCost, falcovkaCost } = objectOfCost;

    if( !number || !chertejiCost || !falcovkaCost ) return [0, 'Ничего'];
    
    // 3_ Расчет стоимости 
    console.log(findIndexTillN(PAGES_LIMITS, number))
    const X1 = chertejiCost[aformat][color][findIndexTillN(PAGES_LIMITS, number)];

    const X2 = !!falc ? falcovkaCost[aformat] : 0;

    const RESULT = Math.round((X1 + X2) * 100 * number) / 100

    // 8_ Расчет описания
    const RESULT_DESCRIPTION = `Товар: чертежи;
								Цена: ${RESULT} рублей;
                                Кол-во чертежей: ${number} шт;
                                Формат: ${FORMAT_CHERTEJ[aformat]};
                                Цветность: ${(color ? "Цветной" : "Черно/белый")};
                                Фальцовка: ${(falc ? "Фальцовать" : "Без фальцовки")}`;
    
    return [ RESULT, RESULT_DESCRIPTION ]
}