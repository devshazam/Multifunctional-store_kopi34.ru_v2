export function findIndexTillN(pageLimit:number[], pages: number): number {
    // Находит индекс 
    const RESULT = pageLimit.findIndex((elem) => pages <= elem)
    return RESULT;
}