import React from "react";
import { trpc } from "../../util/trpc";

const SaveModel = () => {
  const modelData: {
    model_id: string;
    user_id: string;
    main_gate: string;
    boundary: string;
    balcony: string;
    structure_gf: string;
    structure_ff: string;
    structure_sf: string;
  } = {
    model_id: "test",
    user_id: "test",
    main_gate: "test",
    boundary: "test",
    balcony: "test",
    structure_gf: "test",
    structure_ff: "test",
    structure_sf: "test",
  };
  const addHouseModel = trpc.house.addHouse.useMutation({});

  async function saveHouse() {
    try {
      await addHouseModel.mutateAsync(modelData);
    } catch {
      throw new Error("Error:The house is not saved yet");
    }
  }
  return (
    <div className="flex flex-col items-center justify-between gap-10">
      <h1 className="text-2xl font-normal font-Roboto">
        Save house model component
      </h1>
    </div>
  );
};
export default SaveModel;
