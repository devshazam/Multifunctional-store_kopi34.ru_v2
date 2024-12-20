import { TCardData, TObjectOfCost } from '@/w-types/cardsTypes';


export function laminaciaCalc(objectOfInput: TCardData, objectOfCost: TObjectOfCost) : [number, string] {


    // 2_ Деструктуризация с подстраховкой
    const { number, aformat = 0, coating = 0, depth = 0 } = objectOfInput;
    const { laminaciaCost } = objectOfCost;

    if( !number || !laminaciaCost ) return [0, 'Ничего'];
    
    // 3_ Расчет стоимости ткани флага
    const X1_1 = laminaciaCost[depth][aformat][coating];

    const RESULT = Math.round(X1_1 * number * 100) / 100

    // 8_ Расчет описания
    const RESULT_DESCRIPTION = `Товар: ламинирование;
								Цена: ${RESULT} рублей;
                                Кол-во: ${number} шт;
                                Формат: ${aformat} мм;
                                Толщина: ${depth};
                                Покрытие: ${coating}`;

    return [ RESULT, RESULT_DESCRIPTION ]
}