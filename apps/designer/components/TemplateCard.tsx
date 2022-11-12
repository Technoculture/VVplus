import React, { useState } from "react";
import CardNavigationButton from "./Buttons/CardNavigationButton";
import Image from "next/image";
import house from "./../assets/house.jpg";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import { onBoardUiStore } from "../globalStore/Navigation-Store/templateCardStore/onBoardUiStore";

interface NewDesignProps {
  handleClickOnNewDesign: () => void;
}

const TemplateCard = ({ handleClickOnNewDesign }: NewDesignProps) => {
  const {
    isEuropaCardOpen,
    isJayantiCardOpen,
    isYamunaCardOpen,
    openEuropaCard,
    openJayantiCard,
    openYamunaCard,
  } = onBoardUiStore();
  const cards: Array<{
    name: string;
    id: number;
    size: string;
    price: string;
    myfunc: () => void;
    styleWhenEuropaCardOpen: string;
    styleWhenYamunaCardOpen: string;
    styleWhenJayantiCardOpen: string;
    src: string;
  }> = [
    {
      name: "Europa",
      id: 1,
      size: "4 bhk",
      price: "4 L",
      myfunc: openEuropaCard,
      styleWhenEuropaCardOpen: "z-20 md:animate-none  animate-fade-card ",
      styleWhenYamunaCardOpen: "md:h-[364px] translate-y-[85px] h-[340px]",
      styleWhenJayantiCardOpen:
        "md:h-[364px] translate-y-[50px] z-10 h-[340px] ",
      src: "",
    },
    {
      name: "Yamuna",
      id: 2,
      size: "3 bhk",
      price: "25 L",
      myfunc: openYamunaCard,
      styleWhenEuropaCardOpen:
        " md:h-[364px] z-10  translate-y-[50px]  h-[340px] ",
      styleWhenYamunaCardOpen:
        "md:h-[364px] z-20  md:animate-none animate-fade-card",
      styleWhenJayantiCardOpen: "md:h-[364px] translate-y-[84px] h-[340px]",
      src: "",
    },
    {
      name: "Jayanti",
      id: 3,
      size: "4 bhk",
      price: "4 L",
      myfunc: openJayantiCard,
      styleWhenEuropaCardOpen: "md:h-[364px] h-[320px] translate-y-[95px]",
      styleWhenYamunaCardOpen: "md:h-[364px] h-[340px]  translate-y-[50px]",
      styleWhenJayantiCardOpen: "mt-0 z-20 md:animate-none animate-fade-card ",
      src: "",
    },
  ];
  const [state, setState] = useState(cards);
  const reOrderCards = (cards: any, startIndex: any, endIndex: any) => {
    const newCardsList = Array.from(cards);
    const [removed] = newCardsList.splice(startIndex, 1);
    newCardsList.splice(endIndex, 0, removed);
    return newCardsList;
  };

  const onDragEnd = (result: any) => {
    const { source, destination } = result;
    if (!destination) return;
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    const { cards }: any = state;
    const newCards = reOrderCards(cards, source.index, destination.index);
    const newState = {
      ...state,
      cards: newCards,
    };
    setState(newState);
  };
  const onDragUpdate = (result: any) => {
    const { source, destination } = result;
  };
  const onDragStart = (result: any) => {
    const { source, destination } = result;
  };

  return (
    <main className="flex flex-col relative  left-[50%] translate-x-[-50%]   md:my-8 md:gap-4 my-0 gap-2  justify-center items-center ">
      <h1 className="text-[25px] select-none font-medium font-Roboto text-[#000000] leading-[29px] ">
        Choose your Base model
      </h1>
      <p className="text-[14px] select-none font-light leading-[16px]  text-center">
        Your dream home is a special place.
        <br /> Dream your dream house with just a few clicks!
      </p>
      <div>
        <DragDropContext
          onDragStart={onDragStart}
          onDragUpdate={onDragUpdate}
          onDragEnd={onDragEnd}
        >
          <Droppable droppableId="card">
            {(droppableProvided) => (
              <div
                {...droppableProvided.droppableProps}
                ref={droppableProvided.innerRef}
                className={`h-96  md:w-[700px]  md:border-[1px] gap-[10px] select-none relative flex md:flex-row flex-col  overflow-hidden justify-center text-center items-center  md:border-zinc-300 from-[180deg_rgba(255_255_255_0.7)_0%] to-[rgba(255_245_245_0.35)_100%] rounded-[20px] shadow-xl
          
          `}
              >
                {cards.map((e, index) => (
                  <Draggable
                    key={e.id}
                    draggableId={e.name.toString()}
                    index={index}
                  >
                    {(draggableProvided, draggableSnapshot) => (
                      <div
                        {...draggableProvided.draggableProps}
                        {...draggableProvided.dragHandleProps}
                        ref={draggableProvided.innerRef}
                        key={e.id}
                        className={`h-[364px] touch-pan-y   w-[220px] md:translate-y-0  md:static  duration-500 transition-all fixed border-[1px] items-center py-[10px] md:shadow-md shadow-xl md:mt-0 flex flex-col bg-white border-amber-300  rounded-[15px]
         ${isEuropaCardOpen === true ? e.styleWhenEuropaCardOpen : ""}
         ${isYamunaCardOpen === true ? e.styleWhenYamunaCardOpen : ""}
         ${isJayantiCardOpen === true ? e.styleWhenJayantiCardOpen : ""}
        
         `}
                      >
                        <div
                          className="w-[190px] relative  object-fill overflow-hidden bg-zinc-300 h-[300px] border-[1px] border-amber-300 rounded-[12px]"
                          onClick={handleClickOnNewDesign}
                        >
                          <Image
                            src={house}
                            className="object-cover object-[top_0px_left_-100px]  w-full"
                            alt=""
                            layout="fill"
                          />
                        </div>
                        <div
                          onClick={e.myfunc}
                          className={`flex select-none items-center justify-between mt-4 cursor-pointer w-44
            
     
             `}
                        >
                          <h2 className="font-Bodoni select-none text-xl font-light leading-[18px] ">
                            {e.name}
                          </h2>
                          <p className="font-Roboto select-none text-[15px] font-light leading-[18px]">
                            {e.size}
                          </p>
                          <p className="font-Roboto select-none text-[15px] font-thin leading-[18px]">
                            {e.price}
                          </p>
                        </div>
                      </div>
                    )}
                  </Draggable>
                ))}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
      {isEuropaCardOpen === false && <CardNavigationButton />}
      <div
        className={`text-[15px]  md:mt-0  font-light leading-[18px]
      ${isEuropaCardOpen === true ? "mt-[9vh]" : ""}
      `}
      >
        <span className="italic font-Roboto text-sky-500">Learn more</span>{" "}
        <span className="font-Roboto">about this model</span>
      </div>
    </main>
  );
};

export default TemplateCard;
