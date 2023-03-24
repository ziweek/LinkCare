import React from "react";

import Lottie from "react-lottie-player";
// Alternatively:
// import Lottie from 'react-lottie-player/dist/LottiePlayerLight'

import lottiSuccessCheckJson from "../../public/lotties/success-check.json";
import lottieGoogleVoiceAssistJson from "../../public/lotties/google-voice-assist.json";

function LottieSuccessCheck(props) {
  return (
    <Lottie
      loop={false}
      animationData={lottiSuccessCheckJson}
      play
      style={{ width: 150, height: 150 }}
      onComplete={props.onComplete}
    />
  );
}

function LottieGoogleVoiceAssist(props) {
  return (
    <Lottie
      loop={true}
      animationData={lottieGoogleVoiceAssistJson}
      play
      style={{ width: 150, height: 150 }}
      onComplete={props.onComplete}
    />
  );
}

export { LottieSuccessCheck, LottieGoogleVoiceAssist };
