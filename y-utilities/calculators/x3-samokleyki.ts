import { TCardData, TObjectOfCost } from '@/w-types/cardsTypes';
import { INTERVALS } from '@/z-config/siteConfig';

export function samokleykiCalc(objectOfInput: TCardData, objectOfCost: TObjectOfCost): [number, string] {
    console.log(objectOfInput, objectOfCost);

    // 1_ Константы
    const PLASTIK_RUS = ['Без пластика', 'A0', 'A1', 'A2', 'A3', 'A4'];
    const TYPE_RUS = [ "белая", "черная", "цветная", "дизайнерская", "фотолюминесцентная", "перфорированная", "прозрачная", "светоотражающая", ];
    const porezkaName = ["Без порезки", "A6", "A5", "A4", "A3", "A2", "A1"];

    // 2_ Деструктуризация с подстраховкой
    const { width,  height , number, porezka = 0, plastick = 0, type = 0} = objectOfInput;
    const { samokleykiCost, porezkaCoast, plastickCost } = objectOfCost;
    if(!width || !height || !number || !samokleykiCost || !porezkaCoast || !plastickCost) return [0, ''];

    // 3_ Расчет стоимости
    const X1_1 = (width * height) / 1000000;
    const X1_2 = INTERVALS.samokleyki.findIndex((elem) => X1_1 >= elem[0] && X1_1 < elem[1])
    const X1_3 = X1_1 * samokleykiCost[type][X1_2];
    const RESULT = Math.round((X1_3 + porezkaCoast[porezka] + plastickCost[plastick]) * number * 100) / 100

    // 8_ Расчет описания
    const RESULT_DESCRIPTION = `Товар: Самоклейка;
								Цена: ${RESULT} руб;
                                Ширина: ${width} мм; 
                                Высота: ${height} мм;
                                Кол-во: ${number} шт;
                                Вид самоклейки: ${TYPE_RUS[type]}; 
                                Порезка: ${porezkaName[porezka]}; 
                                Пластик ПВХ: ${PLASTIK_RUS[plastick]}`;


    return [ RESULT <= 200 ? 200 : RESULT, RESULT_DESCRIPTION ]
}
