import { Carousel } from "flowbite-react";
import Image1 from '../../../public/Home/Image1.jpg'
import Image2 from '../../../public/Home/Image2.jpg'
import Image3 from '../../../public/Home/Image3.jpg'
import Image4 from '../../../public/Home/Image4.jpg'
import Image5 from '../../../public/Home/Image5.jpg'

export function Carosoul() {
  return (
    <div className="h-[250px] sm:h-[250px] rounded-3xl xl:h-[350px] 2xl:h-[450px]">
      <Carousel>
        <img src={Image1} alt="..." className="mt-20 tablet-or-mobile:mt-0" />
        <img src={Image2} alt="..." className="tablet-or-mobile:h-64" />
        <img src={Image3} alt="..." className="mt-40 tablet-or-mobile:mt-0" />
        <img src={Image4} alt="..."  className="mt-40 tablet-or-mobile:mt-0"/>
        <img src={Image5} alt="..."  className="mt-40 tablet-or-mobile:mt-0"/>
      </Carousel>
    </div>
  );
}
export default Carosoul;
