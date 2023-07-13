import { features } from "../constants/index"; // here we have the features that we have to import
import styles, { layout } from "../style";
import Button from "./Button";


const FeatureCard = ({ id, icon, title, content }) => (
<div className={`flex flex-row p-6 rounded-[20px] ${id !== features.length - 1 ? "mb-6" : "mb-0"} feature-card fedaInLeft`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

// this is the main fun here, we add the titles and then the putton after that we do do small icons with its things

const FourArea = () =>  (
  <section id="features" className={layout.section}> {/*  */}
    <div  data-aos="fade-right" className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        You do the business, <br className="sm:block hidden" /> we’ll handle {/* for small devices */}
        the money.
      </h2>
      <p data-aos="fade-right" className={`${styles.paragraph} max-w-[470px] mt-5`}>
        With the right credit card, you can improve your financial life by
        building credit, earning rewards and saving money. But with hundreds
        of credit cards on the market.
      </p>
      
      <Button styles={`mt-5`} />
    </div>

    <div data-aos="fade-left" className={`${layout.sectionImg} flex-col`}>     {/* this is for printing the imgs, but we call the function above */}
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default FourArea;