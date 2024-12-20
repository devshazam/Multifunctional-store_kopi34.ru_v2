import { TCardData, TObjectOfCost } from '@/w-types/cardsTypes';
import { bagetArray } from "@/z-config/bagets";

export function bagetyCalc(objectOfInput: TCardData, objectOfCost: TObjectOfCost) : [number, string] {
// console.log(11, objectOfInput, objectOfCost);

    // 1_ Константы        


    // 2_ Деструктуризация с подстраховкой
    const { width, height, number, type = 0, pet = 0, back = 0, glass = 0} = objectOfInput;

    // const { bagetyCost } = objectOfCost;
    // if( !width || !height || !bagetyCost ) return [0, 'Ничего'];

    if(!width || !height || !number) return [0, 'Ничего'];
    
    // 3_ Расчет стоимости 
    const x1 = bagetArray.findIndex((elem) => ((width + height) / 10 <= elem[0]));

    const x2 = bagetArray[x1][type + 1];
    const x3 = (pet && bagetArray[x1][9])
    const x4 = (back === 1 ? bagetArray[x1][10] : 0)
    const x5 = (back === 2 ? bagetArray[x1][11] : 0)
    const y6 = (glass && bagetArray[x1][8])

    const RESULT = Math.round((x2 + x3 + x4 + x5 - y6) * 100 * number) / 100

    // 8_ Расчет описания
    const RESULT_DESCRIPTION = `Товар: Багет;
								Цена: ${RESULT} рублей;
                                Кол-во: ${number} шт`;
    
    console.log(RESULT, RESULT_DESCRIPTION)
    return [
        RESULT <= 200 ? 200 : RESULT,
        RESULT_DESCRIPTION,
    ]
}