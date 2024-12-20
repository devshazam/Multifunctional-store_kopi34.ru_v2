import { TCardData, TObjectOfCost } from '@/w-types/cardsTypes';

export function pechatnabumageCalc(objectOfInput: TCardData, objectOfCost: TObjectOfCost) : [number, string] {
// console.log(11, objectOfInput, objectOfCost);

    // 1_ Константы
    const DENSITY_ARRAY = ['100-130(гр.)', '140-150(гр.)', '160-170(гр.)', '180-190(гр.)', '200-210(гр.)', '220-230(гр.)', '250-280(гр.)', '300-330(гр.)' ]

    // 2_ Деструктуризация с подстраховкой
    const { number, aformat = 0, type = 0, coating = 0, sides = 0, density = 0} = objectOfInput;
    const { pechatnabumageCost } = objectOfCost;

    if( !number || !pechatnabumageCost ) return [0, 'Ничего'];
    
    // 3_ Расчет стоимости ткани флага
    const X1_1 = pechatnabumageCost[type][aformat][coating][sides][density];
    const RESULT = Math.round(X1_1 * 100 * number) / 100

    // 8_ Расчет описания
    const RESULT_DESCRIPTION = `Товар: печать на бумаге;
								Цена: ${RESULT} рублей;
                                Кол-во листов: ${number} шт;
                                Формат: ${(aformat ? "А3" : "А4")};
                                Тип печати: ${(type ? "Струйная" : "Лазерная")};
                                Сторонность: ${(sides ? "2 стороны" : "1 сторона")};
                                Плотность:  ${(density ? "2 стороны" : "")};
                                Материал: ${DENSITY_ARRAY[density]}`;

    return [ RESULT, RESULT_DESCRIPTION ]
}