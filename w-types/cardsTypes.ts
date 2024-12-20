
// главный тип, кототрый объединяет все виды товаров
export type TCardData = 
  {
    // name?: string,
    width?: number,
    height?: number,
    number: number,
    // Баннер
    density?: number,
    luversovanie?: number,
    luversy?: number,
    prokleika?: number,
    perforacia?: number,
    // Визитки
    sides?: number,
    bumaga?: number,
    laminacia?: number,
    vizitnumber?: number,
    // Самоклейка
    porezka?: number,
    plastick?: number,
    type?: number,
    // Холста
    strach?: number,
    // Флаги
    drevko?: number ,
    overlock?: number,
    // Ксерокопия
    aformat?: number,
    color?: number,
    // Ламинация
    coating?: number,
    depth?: number, 
    // Брошюровка
    stuff?: number,
    cloth?: number,
    // Фальцовка
    falc?: number,
    // Багеты
    pet?: number,
    back?: number,
    glass?: number,
    subtype?: number,

    descriptionCard: string,
    office: number,
  };

export type TObjectOfCost= 
  {
    bannerCost?: number[][],
    luversCost?: number,
    glueCost?: number,
    perforaciaCost?: number,

    vizitkiCost?: number[][][][],

    samokleykiCost?: number[][],
    porezkaCoast: number[],
    plastickCost?: number[]

    podramnikCost?: number,
    holstCost?: number,
    jobCost?: number,

    formatToPrice?: number[],
    salesArray?: number[],
    drevkoCost?: number,
    overlokCost?: number,

    squareCost?: number[],

    laminaciaCost?: number[][][],

    broschurovkaCost?: number[][],

    pechatnabumageCost?: number[][][][][],
    kserokopyaCost?: number[][][],

    skanirovanieCost?: number[][][],

    photonadocCost?: number[],
    chertejiCost?: number[][][],
    falcovkaCost?: number[],
    rizografCost?: number[][][],
    colorCost?: number[],
	magnitikiCost?: number[][],
    shtenderiCost?: number[],
	ploterkaCost?: number[][],
  };

export type TItemOfConfig = 
  {
    label: string,
    pH: string, // Ширина
    name: string,
	limits?: number[],
    defaultValue: string | number,
    arrValues?: {
      value: number,
      label: string,
    }[],
	dependsOn?: string,
	multiple?: boolean
  };

  export type TCommonConfig = 
  {
	rus: string,
    mandatory: TItemOfConfig[], 
    optional?: TItemOfConfig[], 
    numbersMarks: {[key: number]: string}, 
    image: boolean, 
	conditional?: boolean,
	conditionalInput?: TItemOfConfig[],
	metaData: {
		title: string,
		description: string,
		h1: string,
		text: string
	}
  }