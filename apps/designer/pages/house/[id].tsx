import NextError from "next/error";
import { useRouter } from "next/router";
import { NextPageWithLayout } from "../../pages/_app";
import { trpc } from "../../util/trpc";

const HouseViewPage: NextPageWithLayout = () => {
  const model_id = useRouter().query.model_id as string;
  const houseQuery = trpc.house.byId.useQuery({ model_id });

  if (houseQuery.error) {
    return (
      <NextError
        title={houseQuery.error.message}
        statusCode={houseQuery.error.data?.httpStatus ?? 500}
      />
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
