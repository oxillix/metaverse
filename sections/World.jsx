"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { staggerContainer, fadeIn, planetVariants } from "../utils/motion";
import styles from "../styles/index";
import { NewFeatures, StartSteps, TitleText, TypingText } from "../components";
import { newFeatures } from "../constants";

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: "false", amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title="| People on the world" textStyles="text-center" />
      <TitleText
        title={
          <>
            Track friends around you and invite them to play together in the
            same world
          </>
        }
        textStyles="text-center"
      />

      <motion.div
        variants={fadeIn("up", "tween", 0.3, 1)}
        className="relative mt-[68px] flex w-full"
      >
        <img src="/map.png" alt="Map" className="w-full h-full object-cover" />

        {/* People */}
        <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="/people-01.png" alt="people" className="w-full h-full" />
        </div>

        <div className="absolute top-[15%] left-[10%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="/people-02.png" alt="people" className="w-full h-full" />
        </div>

        <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <img src="/people-03.png" alt="people" className="w-full h-full" />
        </div>

        {/* Cards */}
        <div className="absolute top-[40%] left-[10%] w-[195px] h-[150px] p-[6px] rounded-[24px] bg-[#5D6680] invisible md:visible">
          <img
            src="/world_event_card_1.png"
            alt="world"
            className="w-full h-full rounded-[24px] object-cover"
          />
          <div className="flex flex-col absolute text-red top-0 left-0 w-full h-full rounded-xl mx-4 justify-end align-middle gap-4">
            <div className="relative flex w-auto h-[24px] text-center items-center">
            <img
                src="/people-02.png"
                alt="people"
                className="w-[24px] h-[24px] rounded-full z-[3]"
              />
              <img
                src="/people-01.png"
                alt="people"
                className="w-[24px] h-[24px] ml-[-12px] rounded-full relative z-[2]"
              />
              <img
                src="/people-03.png"
                alt="people"
                className="w-[24px] h-[24px] ml-[-12px] rounded-full relative z-[1]"
              />
              <h5 className="text-white text-[12px] ml-2">+264 has joined</h5>
            </div>
            <h3 className="text-white font-semibold text-lg pb-4">The upside down</h3>
          </div>
        </div>

        <div className="absolute top-[15%] right-[20%] w-[200px] h-[150px] p-[6px] rounded-3xl bg-[#5d6680] invisible md:visible">
          <img
            src="/world_event_card_2.png"
            alt="The upside down"
            className="w-full h-full rounded-3xl"
          />
          <div className="flex flex-col absolute text-red top-0 left-0 w-full h-full rounded-xl mx-4 justify-end align-middle gap-4">
            <div className="relative flex w-auto h-[24px] text-center items-center">
            <img
                src="/people-02.png"
                alt="people"
                className="w-[24px] h-[24px] rounded-full z-[3]"
              />
              <img
                src="/people-01.png"
                alt="people"
                className="w-[24px] h-[24px] ml-[-12px] rounded-full relative z-[2]"
              />
              <img
                src="/people-03.png"
                alt="people"
                className="w-[24px] h-[24px] ml-[-12px] rounded-full relative z-[1]"
              />
              <h5 className="text-white text-[12px] ml-2">+264 has joined</h5>
            </div>
            <h3 className="text-white font-bold text-lg pb-4">Hawkins Labs</h3>
          </div>
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
