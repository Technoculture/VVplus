import create from "zustand";
type store  = {
  openWelcome : boolean;
  handleClick : Function;
  myNavbar: boolean;
  welcomeClick: Function;
  isActive: boolean;
  toggleButton : boolean;
  myToggleButton : Function;
  newButtonClick : Function;
}
const useStore = create<store>((set)=>({
  openWelcome : false,
  handleClick:()=>{
    set(()=>({
      openWelcome: true,
    }))
  },

  isActive: false,
  myNavbar : false,
  welcomeClick :()=>{
    set(()=>({
      myNavbar: true,
      isActive: true
    }))
  },

  toggleButton:false,
  myToggleButton :(val : boolean)  =>{
    set((state)=>({
      toggleButton : !val
    }))
  },
  newButtonClick : ()=>{
    set(()=>({
      isActive: false,
      myNavbar : false

    }))
  }
  

}))
export default useStore;

