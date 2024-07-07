import Image from "next/image";
import { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/utils";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";




const scenarios = [
  "Walking",
  "Hiking",
  "Cooking",
  "Driving",
  "Riding on bus",
  "Babysitting your newborn",
  "Laying down in the dark bedroom",
]

const diggings = [
  "Keyword searching inside the audio",
  "Easy audio navigation via summary + breakdowns",
  "Share aspiring highlight to social media",
  "Export to your knolwedge apps, (notions, etc)",
  "✨ Interactive Q&A about the audio (coming soon!)",
]

const Feature = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="max-w-screen-xl mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto"
      id="feature"
    >
      <h1 className="text-xl lg:text-2xl font-medium text-black-500 text-center">
        Our mission:
      </h1>
      <h2 className="text-2xl lg:text-3xl font-medium text-black-600 text-center">
        Make audio knowledge easy to access, and easy to share.
      </h2>
      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 py-8 my-12">
        <ScrollAnimationWrapper className="flex w-full justify-end">
          <motion.div className="h-full w-full p-4" variants={scrollAnimation}>
            <Image
              src="/assets/walk-2.png"
              alt="VPN Illustrasi"
              layout="responsive"
              quality={100}
              height={414}
              width={508}
            />
          </motion.div>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper>

          <motion.div className="flex flex-col text-left items-end justify-center ml-auto w-full lg:w-9/12" variants={scrollAnimation}>
            <h3 className="text-2xl lg:text-3xl font-normal leading-relaxed text-black-600">
              When hearing something great
            </h3>
            <p className="my-4 text-black-500">
              You can higlight the audio without even unblock the screen. So you don't miss it when:
            </p>
            <ul className="text-black-500 self-start list-inside ml-8">
              {scenarios.map((feature, index) => (
                <motion.li
                  className="relative circle-check custom-list"
                  custom={{ duration: 2 + index }}
                  variants={scrollAnimation}
                  key={feature}
                  whileHover={{
                    scale: 1.1,
                    transition: {
                      duration: .2
                    }
                  }}>
                  {feature}
                </motion.li>
              )
              )}
            </ul>
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 p  y-8 my-12">
        <ScrollAnimationWrapper>

          <motion.div className="flex flex-col items-end justify-center ml-auto w-full lg:w-9/12" variants={scrollAnimation}>
            <h3 className="text-2xl lg:text-3xl font-normal leading-relaxed text-black-600">
              We light up inside audio so it is not a black box anymore
            </h3>
            <p className="my-2 text-black-500">
              You can dig into knowledge and export easily with these features:
            </p>
            <ul className="text-black-500 self-start list-inside ml-8">
              {diggings.map((feature, index) => (
                <motion.li
                  className="relative circle-check custom-list"
                  custom={{ duration: 2 + index }}
                  variants={scrollAnimation}
                  key={feature}
                  whileHover={{
                    scale: 1.1,
                    transition: {
                      duration: .2
                    }
                  }}>
                  {feature}
                </motion.li>
              )
              )}
            </ul>
          </motion.div>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper className="flex w-full justify-end">
          <motion.div className="h-full w-full p-4" variants={scrollAnimation}>
            <Image
              src="/assets/lookinto.svg"
              alt="VPN Illustrasi"
              layout="responsive"
              quality={100}
              height={414}
              width={508}
            />
          </motion.div>
        </ScrollAnimationWrapper>

      </div>
    </div>
  );
};

export default Feature;
