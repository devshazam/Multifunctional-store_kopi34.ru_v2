import { TCardData, TObjectOfCost } from '@/w-types/cardsTypes';
import { INTERVALS } from '@/z-config/siteConfig';

export function bannerCalc(objectOfInput: TCardData, objectOfCost: TObjectOfCost) : [number, string] {

    // 1_ Константы
    const LUVERS_STEPS = [0, 200, 300, 400, 500];
    const DENSITY_ARRAY = ['400-440', '500'];
    const PROKLEIKA_ARRAY = ['Без проклейки', 'Проклейка по периметру'];

    // 2_ Деструктуризация с подстраховкой
    const { width, height, number, density = 0, luversovanie = 0, luversy = 0, prokleika = 0, perforacia = 0} = objectOfInput;

    const {bannerCost, luversCost, glueCost, perforaciaCost} = objectOfCost;

    if(!width || !height || !number || !bannerCost || !luversCost || !glueCost || !perforaciaCost) return [0, 'Ничего'];
    
    // 3_ Расчет стоимости баннера
    const X1_1 = (width * height * number) / 1000000;
    const X1_2 = INTERVALS.banner.findIndex((elem) => X1_1 >= elem[0] && X1_1 < elem[1])
    const X1_3 = X1_1 * bannerCost[X1_2][density];

    // 4_ Расчет стоимости люверсов
    const X2_1 = (luversovanie && ((width + height) * number * 2) / LUVERS_STEPS[luversovanie] * luversCost)  + (luversy && luversy * luversCost);

    // 5_ Расчет стоимости проклейки
    const X3_1 = (prokleika && (((width + height) * number * 2) / 1000) * glueCost );
    
    // 6_ Расчет стоимости перфорации
    const X4_1 = (perforacia && perforacia * perforaciaCost)

    // 7_ Расчет общей стоимости
    const RESULT = Math.round((X1_3 + X2_1 + X3_1 + X4_1) * 100) / 100

    // 8_ Расчет описания
    const RESULT_DESCRIPTION = `Товар: баннер;
								Цена: ${RESULT} руб;
                                Ширина: ${width} мм; 
                                Высота: ${height} мм;
                                Кол-во: ${number} шт;
                                Плотность: ${DENSITY_ARRAY[density]} гр; 
                                Шаг люверсов: ${LUVERS_STEPS[luversovanie]}; 
                                Дополнительные люверсы: ${luversy} шт; 
                                Проклейка: ${PROKLEIKA_ARRAY[prokleika]}; 
                                Перфорация: ${perforacia}шт;`;

    console.log(RESULT, RESULT_DESCRIPTION);
    return [
        RESULT <= 200 ? 200 : RESULT,
        RESULT_DESCRIPTION,
    ]
}
//    нужно выводить 
//    1_ цену
//    2_ описание заказа
//    3_ 
