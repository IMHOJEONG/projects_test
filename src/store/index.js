import { create } from 'zustand'; 

const useTanstackQueryDataStore = create((set) => {
    example1Data: {} 
    example2Data: {}
    setExample1Data: (example1Data) => set((state) => { example1Data: example1Data })
    setExample2Data: (example2Data) => set((state) => { example2Data: example2Data })
})

export const useTanstackQueryDatExample1 = () => useTanstackQueryDataStore((state)=> state.example1Data) 
export const useTanstackQueryDatExample2 = () => useTanstackQueryDataStore((state)=> state.example1Data) 