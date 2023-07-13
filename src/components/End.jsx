import styles from "../style";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const End = () => (
  <section className={`${styles.flexCenter, styles.paddingY}`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div data-aos="fade-up-right" className="flex flex-col justify-start mr-10">
        <img
          src={logo}
          alt="hoobank" className="w-[250px] h-[75px]"
        />
        <p className={`${styles.paragraph} mt-4 max-w-[312px]`}>
          A new way to make the payments easy, reliable and secure.
        </p>
      </div>

      <div className="flex-[1.5] w-full flex justify-between md:mt-0 mt-10 ">
        {footerLinks.map((footerlink) => (
          <div key={footerlink.title} className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}>
            
            <h4 className="font-poppins text-[18px] text-white">{footerlink.title}</h4>
            
            <ul className="list-none mt-4">
              {footerlink.links.map((link, index) => (
                <li key={link.name}
                  className={`font-poppins text-[16px] text-dimWhite hover:text-secondary cursor-pointer ${
                    index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                  }`}>
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-4 border-t-[1px] border-t-[#3F3E45]">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-dimWhite">
        Copyright Ⓒ 2022 HooBank. All Rights Reserved.
      </p>

      <div className="animate-pulse flex flex-row md:mt-0 mt-6">
        {socialMedia.map((social, index) => (
          <img key={social.id}
               src={social.icon}
               alt={social.id}
               className={`w-[21px] h-[21px] cursor-pointer transition ease-in-out transform 
               hover:-translate-y-3 hover:scale-150 ${
               index !== socialMedia.length - 1 ? "mr-12" : "mr-0"
            }`}
            onClick={() => window.open(social.link)}
          />
        ))}
      </div>
    </div>
  </section>
);

export default End;