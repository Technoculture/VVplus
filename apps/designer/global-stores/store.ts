import create from 'zustand'

type Store = {
    floor: number;
    changeFloor: (val: number)=>void;
}

const useStore = create<Store>((set)=>({
    floor: 4,
    changeFloor(val){
        set(()=>({floor: val}))
    }
}))

export default useStore