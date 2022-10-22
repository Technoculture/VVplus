import { useRouter } from "next/router";
import { NextPageWithLayout } from "../_app";
import { trpc } from "../../util/trpc";

const HouseViewPage = () => {
  /// here i need to decalre the type for the server side rendering
  const model_id = useRouter().query.model_id as string;
  const houseQuery = trpc.house.byId.useQuery({ model_id });
  if (houseQuery.status === "error") {
    return (
      <h1>
        Error house id is not found in the location pages/trpc/house/[id].tsx
      </h1>
    );
  }

  if (houseQuery.status !== "success") {
    return <>Loading...</>;
  }
  const { data } = houseQuery;
  return (
    <>
      <h1>{data.model_id}</h1>
      <em>Created {data.user_id}</em>

      <p>{data.balcony}</p>

      <h2>Raw data:</h2>
      <pre>{JSON.stringify(data, null, 4)}</pre>
    </>
  );
};

export default HouseViewPage;
