
import { Footer, FooterCopyright, FooterIcon, FooterLink, FooterLinkGroup, FooterTitle } from "flowbite-react";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import VisaCard from '../../../public/common/icons8-visa-card-100.png'
import MasterCard from '../../../public/common/mastercard (1).png'

export function FooterElement() {
    return (
        <Footer bgDark>
            <div className="w-full">
                <div className="grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">
                    <div>
                        <FooterTitle title="Online Customer Care hotline" />
                        <FooterLinkGroup col>
                            <p>
                                Phone  :  078 4365545 <br />
                                Operating Hours : Monday - Friday : 9.30am to 5.30pm
                                Email : welcometoclothyfi@gmail.com
                            </p>
                        </FooterLinkGroup>
                    </div>
                    <div>
                        <FooterTitle title="Navigations" />
                        <FooterLinkGroup col>
                            <FooterLink href="#">About us</FooterLink>
                            <FooterLink href="#">Contact us</FooterLink>
                            <FooterLink href="#">Help center</FooterLink>
                            <FooterLink href="#">Blogs</FooterLink>
                        </FooterLinkGroup>
                    </div>
                    <div>
                        <FooterTitle title="Legal" />
                        <FooterLinkGroup col>
                            <FooterLink href="#">Privacy Policy</FooterLink>
                            <FooterLink href="#">Terms and services</FooterLink>
                            <FooterLink href="#">Returns</FooterLink>
                        </FooterLinkGroup>
                    </div>
                    <div>
                        <FooterTitle title="About us" />
                        <FooterLinkGroup col>
                            <p>
                                Clothify: Where fashion meets conscience. Our island-inspired brand combines the latest trends with ethical manufacturing. From global sourcing to in-house factories, we deliver quality products that reflect our commitment to style and responsibility. Join us on this stylish journey! 🌟👗🌏
                            </p>
                        </FooterLinkGroup>
                    </div>
                </div>
                <div className="w-full bg-gray-700 px-4 py-6 sm:flex sm:items-center sm:justify-between">
                    <FooterCopyright href="#" by="Clothify™" year={2024} />
                    <div className="mt-3 flex space-x-6 sm:mt-0 sm:justify-center">
                        <label htmlFor="" className="font-bold text-lg -mt-1 text-gray-500">Follow us on</label>
                        <FooterIcon href="#" icon={BsFacebook} />
                        <FooterIcon href="#" icon={BsInstagram} />
                        <FooterIcon href="#" icon={BsTwitter} />
                    </div>
                </div>
                <div className="bg-new-gray flex justify-center">
                    <img src={VisaCard} alt="" className="size-10 tablet-or-mobile:size-6"/>
                    <img src={MasterCard} alt="" className="size-16 -mt-3 tablet-or-mobile:size-10 tablet-or-mobile:-mt-2" />
                </div>
            </div>
        </Footer>
    );
}
export default FooterElement;
