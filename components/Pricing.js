import { useMemo } from "react";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import { motion } from "framer-motion";
import ButtonOutline from "./misc/ButtonOutline.";
import Testimoni from "./Testimoni";

const Pricing = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  const PricePlans = ({ name, price, discount = null, extraFeatures = [], }) => {
    return (
      <ScrollAnimationWrapper className="flex justify-center">
        <motion.div
          variants={scrollAnimation}
          className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-16"
          whileHover={{
            scale: 1.1,
            transition: {
              duration: .2
            }
          }}
        >
          {/* <div className="p-4 lg:p-0 mt-6 lg:mt-16">
            <Image
              src="/assets/Free.png"
              width={145}
              height={165}
              alt={name}
            />
          </div> */}

          <p className="text-lg text-black-600 font-medium capitalize mb-2 sm:mb-7">
            {name}
          </p>
          <ul className="flex flex-col list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
            <li className="relative check custom-list my-2">
              Unlimited feature access
            </li>
            <li className="relative check custom-list my-2">
              Purchase never expire
            </li>
            <li className="relative check custom-list my-2">
              Freely transfer hours to friends and families
            </li>

            {extraFeatures.map((feature, index) => (
              <li
                className="relative check custom-list my-2"
                key={index}
              >
                {feature}
              </li>
            ))}
          </ul>
          <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
            <div className="text-3xl text-black-600 font-medium mt-2 sm:mt-7">
              <span className={`${discount ? 'line-through font-thin text-xl' : ''}`}>
                <p>
                  {price}
                </p>
              </span>
              {discount && (
                <span>
                  <p>
                    {discount}
                  </p>
                  <p className="text-sm font-light mx-1">
                    {name == "Pay as you go" ? 'during public preview' : '10 books + lifetime discount, limited seats'}
                  </p>
                </span>
              )
              }
            </div>
            <ButtonOutline>Select</ButtonOutline>
            {/* <div className="py-5 justify-self-center align-middle bg-green-500">
              <Image className="justify-self-center" src="/assets/guarantee.png" alt="Free" width={50} height={50} />
            </div> */}
            <p className="text-xs my-2">
              100% satisfaction guarantee. Cancel anytime, full refund in 30 days.
            </p>
          </div>
        </motion.div>
      </ScrollAnimationWrapper >
    )
  }
  return (
    <div
      className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14"
      id="pricing"
    >
      <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        {/* <div className="flex flex-col w-full">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed"
            >
              Public beta, free for all!
            </motion.h3>
          </ScrollAnimationWrapper>
        </div> */}
        <div className="flex flex-col w-full">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed"
            >
              Get limited lifetime deal before it is sold out!
            </motion.h3>
            <motion.p
              variants={scrollAnimation}
              className="leading-normal w-10/12 sm:w-7/12 lg:w-6/12 mx-auto my-2 text-center"
            >
              During public preview, we are happy to offer lifetime deals for early birds.
            </motion.p>
          </ScrollAnimationWrapper>
          <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-12 py-8 lg:py-12 px-6 sm:px-6 lg:px-6">
            <PricePlans name="Pay as you go" price={"$2/h"} discount={"🎁 $1/book"} extraFeatures={[
              "🎁 One free book upon signup",
              "$2/h for extra book"
            ]} />
            <PricePlans name="Monthly" price="$15/month" discount={"🎁 $1/book"} extraFeatures={[
              "🎁 1 book credit every month, rollover, never expire",
              "$1.5/h for extra book"
            ]} />
            <PricePlans name="Yearly" price="$10/month" discount={"🎁 $1/book"} extraFeatures={[
              "🎁 12 book credits every year, rollover, never expire",
              "$1/h for extra book",
            ]} />
          </div>
        </div>

        <div className="flex flex-col w-full my-16" id="testimoni">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-normal w-9/12 sm: lg:w-4/12 mx-auto">
              Loved by early customers{" "}
            </motion.h3>
            <motion.p
              variants={scrollAnimation}
              className="leading-normal mx-auto mb-2 mt-4 w-10/12 sm:w-7/12 lg:w-6/12"
            >
              Hear the stories from our early customers.
            </motion.p>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper className="w-full flex flex-col py-12">
            <motion.div variants={scrollAnimation}>
              <Testimoni />
            </motion.div>
          </ScrollAnimationWrapper>
          {/* <ScrollAnimationWrapper className="relative w-full mt-16">
            <motion.div variants={scrollAnimation} custom={{ duration: 3 }}>
              <div className="absolute rounded-xl  py-8 sm:py-14 px-6 sm:px-12 lg:px-16 w-full flex flex-col sm:flex-row justify-between items-center z-10 bg-white-500">
                <div className="flex flex-col text-left w-10/12 sm:w-7/12 lg:w-5/12 mb-6 sm:mb-0">
                  <h5 className="text-black-600 text-xl sm:text-2xl lg:text-3xl leading-relaxed font-medium">
                    Subscribe Now for <br /> Get Special Features!
                  </h5>
                  <p>Let's subscribe with us and find the fun.</p>
                </div>
                <ButtonPrimary>Get Started</ButtonPrimary>
              </div>
              <div
                className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-60 sm:h-56 top-0 mt-8 mx-auto left-0 right-0"
                style={{ filter: "blur(114px)" }}
              ></div>
            </motion.div>
          </ScrollAnimationWrapper> */}
        </div>

      </div>
    </div>
  );
};

export default Pricing;
