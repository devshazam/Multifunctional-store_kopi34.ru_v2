import { TCardData, TObjectOfCost } from '@/w-types/cardsTypes';
import { INTERVALS } from '@/z-config/siteConfig';

export function ploterkaCalc(objectOfInput: TCardData, objectOfCost: TObjectOfCost) : [number, string] {
   
	// 1_ Константы
	const COLOR_NAMES = ['Белый', 'Красный', 'Оранжевый', 'Желтый', 'Зеленый', 'Синий', 'Фиолетовый', 'Серебристо-блестящий', 'Залотисто-блестящий'];
	const TYPE_NAMES = ['Плоттерная резка', 'Тоже + снятие излишков', 'Тоже + монтажная пленка'];

	// 2_ Деструктуризация с подстраховкой
    const { width, height, number, type = 0, color = 0 } = objectOfInput;
    const { ploterkaCost } = objectOfCost;

    if( !width || !height || !number || !ploterkaCost ) return [0, 'Ничего'];
    
    // 3_ Расчет стоимости 
	const x1 = width * height / 1000000;
    const x2 = ploterkaCost[INTERVALS.samokleyki.findIndex((elem) => x1 >= elem[0] && x1 < elem[1])][type];

    const RESULT = Math.round(x1 * x2 * 100 * number) / 100

    // 8_ Расчет описания
    const RESULT_DESCRIPTION = `Товар: плотерка;
								Цена: ${RESULT} рублей;
								Ширина: ${width};
								Высота: ${height};
                                Кол-во: ${number} шт;
                                Глубина: ${TYPE_NAMES[type]};
                                Цвеь: ${COLOR_NAMES[color]}`;
    
    return [
        RESULT <= 200 ? 200 : RESULT,
        RESULT_DESCRIPTION,
    ]
}