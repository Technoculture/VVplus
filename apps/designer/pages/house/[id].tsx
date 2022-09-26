import NextError from 'next/error';
import { useRouter } from 'next/router';
import {NextPageWithLayout} from '../_app';
import {trpc} from '../../util/trpc';


const HouseViewPage :NextPageWithLayout=()=>{
    const id = useRouter().query.id as string;
    const houseQuery = trpc.house.byId.useQuery({id});
    if(houseQuery.error){
        return (
            <NextError
             title={houseQuery.error.message}
             statusCode={houseQuery.error.data?.httpStatus??500}
             />
        );
    }
    if(houseQuery.statusCode!=='success'){
        return <>Loading...</>
    }
    const {data} = houseQuery;
    return(
        <>
         <h1>{JSON.stringify(data,null,4)}</h1>
        </>
    );
};

export default HouseViewPage;