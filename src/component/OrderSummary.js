import {useNavigate} from 'react-router-dom'
export const OrderSummary = () => {
     const navigate = useNavigate();
  return (
   
    <>
      <div>Ordered Confirmed</div>
      <button onClick={()=>navigate(-1)}>Goback</button>
    </>
  );
};
