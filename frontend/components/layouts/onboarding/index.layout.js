import { Button, Card, Spacer, Text, useTheme } from "@nextui-org/react";
import "swiper/css/bundle";
import OnboardingSwiper from "./swiper";

export default function OnboardingIndexLayout() {
  return (
    <div className="relative h-screen flex flex-col justify-center">
      <OnboardingSwiper></OnboardingSwiper>
    </div>
  );
}
