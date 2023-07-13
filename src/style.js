const styles = {
    boxWidth: "xl:max-w-[1280px] w-full", // xl 
  
    heading2: "font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full",
    paragraph: "font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]",
  
    flexCenter: "flex justify-center items-center", // flex to flex it, justify-center to lay the flex component at the center 
    flexStart: "flex justify-center items-start", // items-start, Items are positioned at the beginning of their individual grid cells
  
    paddingX: "sm:px-16 px-6", // Control the horizontal padding of an element using the px-{size} utilities. (sm) used for small devices  
    paddingY: "sm:py-16 py-6", // Control the  padding of an element using the px-{size} utilities
    padding: "sm:px-16 px-6 sm:py-12 py-4",
  
    marginX: "sm:mx-16 mx-6",
    marginY: "sm:my-16 my-6",
  };
  
  export const layout = {
    section: `flex md:flex-row flex-col ${styles.paddingY}`,
    sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,
  
    sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
    sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,
  
    sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
  };
  


/*
const observer = new IntersectionObserver((entries) => { 
  entries.forEach((entry) => {
    console.log(entry);

    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
    else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll('.hiddenH');
hiddenElements.forEach((el) => observer.observe(el));
*/
/*

const targets = document.querySelectorAll(".js-show-on-scroll");
targets.forEach(function (target) {
  target.classList.add("opacity-0");
  observer.observe(target);
});

*/



  export default styles;