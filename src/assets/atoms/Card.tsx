

interface CardProps{
    image : string
    description : string;
    price : string
}

const CardElement:React.FC<CardProps> = ({description,price,image}) => {
  return (
    <div className='grid justify-center mt-4 tablet-or-mobile:ml-2'>
        <button><img src={image} alt="" className='w-60 h-80 tablet-or-mobile:w-44 tablet-or-mobile:h-56 rounded-xl border-2 border-white shadow-2xl hover:animate-bounce hover:inset-x-5 hover:shadow-black' /></button>
        <label htmlFor="" className='flex ml-5 mr-5 justify-center mt-2  font-serif text-xl font-semibold text-white tablet-or-mobile:text-xs ' > {description} </label>
        <label htmlFor="" className='flex ml-5 mr-5 justify-center mt-2  font-serif text-xl font-semibold text-white tablet-or-mobile:text-xs' > {price} LKR</label>
    </div>
  );
}
export default CardElement;