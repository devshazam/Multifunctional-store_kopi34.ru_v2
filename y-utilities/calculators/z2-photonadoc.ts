import { TCardData, TObjectOfCost } from '@/w-types/cardsTypes';

export function photonadocCalc(objectOfInput: TCardData, objectOfCost: TObjectOfCost) : [number, string] {
// console.log(11, objectOfInput, objectOfCost);

    // 1_ Константы
    const PHOTO_TYPE = ['Паспорт РФ цвет. (3,4х4,5)', 'Загран. РФ цвет. (3,4х4,5)', 'Виза цвет. (3,4х4,5)', 'Виза США цвет. (5х5)', 'Личное дело цвет. (4х6)', 'Личное дело цвет. (9х12)', 'Фотография цвет. (3х4)', 'Личное дело ч/б. (4х6)', 'Личное дело ч/б. (9х12)', 'Фотография ч/б. (3х4)']
    // 2_ Деструктуризация с подстраховкой
    const { number, type = 0, cloth = 0} = objectOfInput;
    const { photonadocCost } = objectOfCost;

    if( !number || !photonadocCost ) return [0, 'Ничего'];
    
    // 3_ Расчет стоимости ткани флага
    const X1 = !!cloth ? photonadocCost[1] : 0;
    let RESULT = X1;
    if(number <= 4){
        RESULT += photonadocCost[0];
    }else{
        RESULT += photonadocCost[0] + (number - 4) * 10;
    }


    // 8_ Расчет описания
    const RESULT_DESCRIPTION = `Товар: фото на документы;
								Цена: ${RESULT} рублей;
                                Кол-во фотографий: ${number} шт;
                                Тип: ${PHOTO_TYPE[type]};
                                Тип печати: ${(type ? "Струйная" : "Лазерная")};
                                Сторонность: ${(cloth ? "С монтажем одежды" : "Без монтажа обежды")}`;

    return [ RESULT, RESULT_DESCRIPTION ]
}