import { TCardData, TObjectOfCost } from '@/w-types/cardsTypes';


export function shtenderiCalc(objectOfInput: TCardData, objectOfCost: TObjectOfCost) : [number, string] {
// console.log(11, objectOfInput, objectOfCost);

    // 1_ Константы        
    const COLORS = ['Белая', 'Синий', 'Красный', 'Черный', 'Желтый', 'Зеленый',]
    const ST_FORM = ['Info-Sain', 'City-Sain', 'View-Point'];

    // 2_ Деструктуризация с подстраховкой
    const { number, aformat = 0, color = 0 } = objectOfInput;
    const { shtenderiCost } = objectOfCost;

    if( !number || !shtenderiCost ) return [0, 'Ничего'];
    
    // 3_ Расчет стоимости 
    const X1 = shtenderiCost[aformat];

    const RESULT = Math.round(X1 * 100 * number) / 100

    // 8_ Расчет описания
    const RESULT_DESCRIPTION = `Товар: штендер;
								Цена: ${RESULT} рублей;
                                Кол-во: ${number} шт;
                                Формат: ${ST_FORM[aformat]};
                                Цвет: ${COLORS[color]}`;
    
    console.log(RESULT, RESULT_DESCRIPTION)
    return [
        RESULT <= 200 ? 200 : RESULT,
        RESULT_DESCRIPTION,
    ]
}