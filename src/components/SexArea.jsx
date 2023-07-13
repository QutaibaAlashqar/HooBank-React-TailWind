import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

// its quit similer to the FourArea

const SexArea = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 data-aos="flip-left" className={styles.heading2}>
        Find a better card deal <br className="sm:block hidden" /> in few easy
        steps.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
        aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
      </p>

      <Button styles={`mt-10`} />
    </div>
    
    <div data-aos="flip-up" className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default SexArea;