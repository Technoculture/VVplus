import create from "zustand";
type store  = {
  openWelcome : Boolean;
  handleClick : Function;
  myNavbar: Boolean;
  welcomeClick: Function;
  isActive: Boolean;
  toggleButton : Boolean;
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
  myToggleButton :(val : Boolean)  =>{
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

