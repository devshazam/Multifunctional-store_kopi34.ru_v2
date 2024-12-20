import { TCardData, TObjectOfCost } from '@/w-types/cardsTypes';
import { INTERVALS } from '@/z-config/siteConfig';

export function kserokopyaCalc(objectOfInput: TCardData, objectOfCost: TObjectOfCost) : [number, string] {


    // 2_ Деструктуризация с подстраховкой
    const { number, aformat = 0, color = 0 } = objectOfInput;
    const { kserokopyaCost } = objectOfCost;

    if( !number || !kserokopyaCost ) return [0, 'Ничего'];
    
    // 3_ Расчет стоимости ткани флага
    const X1_1 = kserokopyaCost[INTERVALS.kserokopya.findIndex((elem) => number > elem[0] && number <= elem[1])][aformat][color];

    const RESULT = Math.round(X1_1 * number * 100) / 100

    // 8_ Расчет описания
    const RESULT_DESCRIPTION = `Товар: распечатка;
								Цена: ${RESULT} рублей;
                                Кол-во: ${number} шт;
                                Формат: ${aformat} мм;
                                Цветность: ${color}`;

    return [ RESULT, RESULT_DESCRIPTION ]
}