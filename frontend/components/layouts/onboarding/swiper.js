import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css/bundle";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Button, Card, Text, Spacer } from "@nextui-org/react";
import { useRouter } from "next/router";
import ImageSrc3 from "../../../public/images/profile/medals/Award_2.png";
import Image from "next/image";

const res = {
  data: [
    {
      title: "Welcome to LinkCare",
      description: "Senior Healthcare Software",
      image: ImageSrc3,
    },
    {
      title: "Welcome to LinkCare",
      description: "Senior Healthcare Software",
      image: ImageSrc3,
    },
    {
      title: "Welcome to LinkCare",
      description: "Senior Healthcare Software",
      image: ImageSrc3,
    },
    {
      title: "Welcome to LinkCare",
      description: "Senior Healthcare Software",
      image: ImageSrc3,
    },
  ],
};

export default function OnboardingSwiper() {
  const router = useRouter();

  function SectionCard(props) {
    return (
      <div className="flex flex-col w-full h-[100vh] justify-center">
        <Spacer y={2}></Spacer>
        <div className="w-[80vw] h-[30vw] mx-auto bg-red-300 rounded-2xl flex flex-col items-center justify-center">
          <Text>{props.description}</Text>
          <Text className="font-bold text-2xl">{props.title}</Text>
        </div>
        <Spacer y={1}></Spacer>
        <div className="w-[80vw] h-[90vw] mx-auto bg-red-300 rounded-2xl flex flex-col items-center justify-center">
          <Image src={ImageSrc3}></Image>
        </div>
        <Spacer y={2}></Spacer>
      </div>
    );
  }

  const SwiperButtonNext = ({ children }) => {
    const swiper = useSwiper();
    function handlerOnPress() {
      swiper.slideNext();
    }
    return (
      <Button auto style={{ height: "6vh" }} onPress={handlerOnPress}>
        <Text className="text-2xl text-[#0072F5]">{children}</Text>
      </Button>
    );
  };

  return (
    <Swiper
      centeredSlides
      pagination={true}
      modules={[Pagination]}
      className="mySwiper w-full h-full"
    >
      {res.data.map((e, i) => {
        return (
          <SwiperSlide key={i}>
            <SectionCard
              title={e.title}
              description={e.description}
              image={e.image}
            ></SectionCard>
          </SwiperSlide>
        );
      })}
      <div className="absolute bottom-[4vh] w-full">
        <div className="w-[80vw] mx-auto flex flex-row justify-between">
          <Button
            auto
            style={{ height: "6vh" }}
            onPress={() => router.push("/home")}
          >
            <Text className="text-2xl text-[#F31260]">Skip</Text>
          </Button>
          <SwiperButtonNext>Next</SwiperButtonNext>
        </div>
        <Spacer y={1 / 2}></Spacer>
      </div>
    </Swiper>
  );
}
