import { TCardData, TObjectOfCost } from '@/w-types/cardsTypes';
import { INTERVALS } from '@/z-config/siteConfig';

export function flagiCalc(objectOfInput: TCardData, objectOfCost: TObjectOfCost) : [number, string] {
// console.log(11, objectOfInput, objectOfCost);
    // 1_ Константы

    // 2_ Деструктуризация с подстраховкой
    const { width, height, number, drevko = 0, overlock = 0 } = objectOfInput;
    const { formatToPrice, drevkoCost, overlokCost } = objectOfCost;

    if(!width || !height || !number || !formatToPrice || !drevkoCost || !overlokCost ) return [0, 'Ничего'];
    

    const SQUARE = width * height / 1000000;

    const PERIMETR = (width + height) * 2 / 1000;

    // 3_ Расчет стоимости ткани флага
    const X1_1 = formatToPrice[INTERVALS.flagi.findIndex((elem) => SQUARE >= elem)] * SQUARE;

    // 4_ Расчет стоимости древка
    const X2_1 = (drevko && drevkoCost);

    // 5_ Расчет стоимости оверлока
    const X3_1 = (overlock && (PERIMETR * overlokCost));

    const RESULT = Math.round((X1_1 + X2_1 + X3_1) * number * 100) / 100


    // 8_ Расчет описания
    const RESULT_DESCRIPTION = `Товар: флаг;
								Цена: ${RESULT} рублей;
                                Ширина: ${width} мм; 
                                Высота: ${height} мм;
                                Кол-во: ${number} шт;
                                Натяжка: ${(drevko ? "ДА" : "НЕТ")};
                                Оверлок: ${(overlock ? "ДА" : "НЕТ")};`;

    return [
        RESULT <= 200 ? 200 : RESULT,
        RESULT_DESCRIPTION,
    ]
}