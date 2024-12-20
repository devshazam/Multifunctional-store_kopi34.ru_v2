import { create } from 'zustand'
import * as configuration from '@/x-config';
import { TCardData } from '@/w-types/cardsTypes';
import { TItemOfConfig } from '@/w-types/cardsTypes';

type TCardState = {
    cardData: TCardData,
    finishPrice: number,
    discount: number,
    orderDescription: string,
    initializeCardData: ( name: string ) => void,
    changeCardData: (key: string, value: number | string) => void,
    changePrice: (newPrice: number) => void,
    changeDiscount: (newDiscount: number) => void
    changeDescription: (newDescription: string) => void
}

export const useCardStore = create<TCardState>((set) => ({
  cardData: { number: 1, office: 0, descriptionCard: '' },
  finishPrice: 0,
  discount: 5,
  orderDescription: '',
  
  initializeCardData: ( name ) => set((state) => ({ cardData: { ...state.cardData, ...Object.fromEntries(configuration[name as keyof typeof configuration].mandatory.map((item: TItemOfConfig) => [ item.name, item.defaultValue ]))}})),
  changeCardData: (key, value) => set((state) => ({ cardData: { ...state.cardData, [key]: value } })),
  changePrice: (newPrice) => set({ finishPrice: newPrice }),
  changeDiscount: (newDiscount) => set({ discount: newDiscount }),
  changeDescription: (newDescription) => set({ orderDescription: newDescription }),
}))

