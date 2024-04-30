

interface CardProps{
    image : string
    description : string;
    price : string
}

const CardElement:React.FC<CardProps> = ({description,price,image}) => {
  return (
    <div className='grid justify-center'>
        <button><img src={image} alt="" className='w-60 h-80  rounded-xl border-2 border-white shadow-2xl' /></button>
        <label htmlFor="" className='flex ml-5 mr-5 justify-center mt-2  font-serif text-xl font-semibold text-white' > {description} </label>
        <label htmlFor="" className='flex ml-5 mr-5 justify-center mt-2  font-serif text-xl font-semibold text-white' > {price} LKR</label>
    </div>
  );
}
export default CardElement;