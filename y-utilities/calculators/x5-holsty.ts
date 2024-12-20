import { TCardData, TObjectOfCost } from '@/w-types/cardsTypes';


export function holstyCalc(objectOfInput: TCardData, objectOfCost: TObjectOfCost) : [number, string] {
// console.log(11, objectOfInput, objectOfCost);

    // 1_ Константы


    // 2_ Деструктуризация с подстраховкой
    const { width, height, number, strach = 0 } = objectOfInput;
    const { podramnikCost, holstCost, jobCost } = objectOfCost;

    if(!width || !height || !number || !jobCost || !podramnikCost || !holstCost ) return [0, 'Ничего'];
    

    // 3_ Расчет стоимости баннера
    const PERIMETR = (width + height) * 2 / 1000;
    const SQUARE = width * height / 1000000;

    // 4_ Расчет стоимости Холста
    const X1_1 = SQUARE * holstCost;

    // 5_ Расчет стоимости подрамника
    const X2_1 = (strach && (PERIMETR * podramnikCost));

    // 6_ Расчет стоимости работы
    const X3_1 = (strach && (PERIMETR * jobCost));

    // 7_ Расчет общей стоимости
    const RESULT = Math.round((X1_1 + X2_1 + X3_1) * number * 100) / 100

    // 8_ Расчет описания
    const RESULT_DESCRIPTION = `Товар: холст;
								Цена: ${RESULT} рублей;
                                Ширина: ${width} мм; 
                                Высота: ${height} мм;
                                Кол-во: ${number} шт;
                                Натяжка: ${(strach ? "ДА" : "НЕТ")}`;

    return [
        RESULT <= 200 ? 200 : RESULT,
        RESULT_DESCRIPTION,
    ]
}