import styles from "../style";
import Button from "./Button";

const NineArea = () => (
    <section data-aos="fade-up-right" className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} 
    sm:flex-row flex-col box-shadow bg-black-gradient rounded-[40px]`}>
        
        <div className="flex-1 flex flex-col" data-aos="fade-up">
            <h2 className={styles.heading2}>Let’s try our service now!</h2>
            <p className="font-poppins font-normal text-dimWhite text-[18px] max-w-[440px] mt-8">
                Everything you need to accept card payments and grow your business
                anywhere on the planet.
            </p>
        </div>

        <div className={`${styles.flexCenter} sm:ml-10`}>
            <Button />
        </div>
    </section>
);

export default NineArea;