import { useParams } from "react-router";
export const Userdetails = () => {
    const params=useParams()
    const userId=params.userId
    //const {userId}=useParams()
    
  return <div>userdetails od {userId}</div>;
};
