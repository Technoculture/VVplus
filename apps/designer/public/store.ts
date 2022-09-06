import create from 'zustand'

type Store = {
    floor: number;
    changeFloor: (event: any)=>void;
}

const useStore = create<Store>((set)=>({
    floor: 0,
    changeFloor(val){
        set((state)=>({floor: val}))
    }
}))

export default useStore