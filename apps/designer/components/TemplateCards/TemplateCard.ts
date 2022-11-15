import { onBoardUiStore as boardStore}  from "../../globalStore/Navigation-Store/templateCardStore/onBoardUiStore";
const {
  openEuropaCard,
  openJayantiCard,
  openYamunaCard,
} = boardStore();
const cards: Array<{
  name: string;
  id: number;
  size: string;
  price: string;
  myfunc: () => void;
  styleWhenEuropaCardOpen: string;
  styleWhenYamunaCardOpen: string;
  styleWhenJayantiCardOpen: string;
  url: string;
}> = [
  {
    name: "Europa",
    id: 1,
    size: "4 bhk",
    price: "4 L",
    myfunc: openEuropaCard,
    styleWhenEuropaCardOpen: "z-20 md:animate-none animate-fade-card ",
    styleWhenYamunaCardOpen: "md:h-[364px] translate-y-[85px] h-[330px]",
    styleWhenJayantiCardOpen: "md:h-[364px] translate-y-[50px] z-10 h-[330px]",
    url: "",
  },
  {
    name: "Yamuna",
    id: 2,
    size: "3 bhk",
    price: "25 L",
    myfunc: openYamunaCard,
    styleWhenEuropaCardOpen:
      " md:h-[364px] z-10  translate-y-[50px]  h-[330px] ",
    styleWhenYamunaCardOpen:
      "md:h-[364px] z-20 translate-y-[0px] md:animate-none animate-fade-card",
    styleWhenJayantiCardOpen: "md:h-[364px] translate-y-[84px] h-[330px]",
    url: "",
  },
  {
    name: "Jayanti",
    id: 3,
    size: "4 bhk",
    price: "4 L",
    myfunc: openJayantiCard,
    styleWhenEuropaCardOpen: "md:h-[364px] h-[330px] translate-y-[85px]",
    styleWhenYamunaCardOpen: "md:h-[364px] h-[330px]  translate-y-[50px]",
    styleWhenJayantiCardOpen: "mt-0 z-20 md:animate-none animate-fade-card ",
    url: "",
  },
];
export default cards;
