const { atom } = require("recoil");

const cameraInstanceState = atom({
  key: "cameraInstanceState",
  default: null,
});

const isDualScreenModeAppliedState = atom({
  key: "isDualScreenModeAppliedState",
  default: false,
});

const isFaceFilterAppliedState = atom({
  key: "isFaceFilterAppliedState",
  default: false,
});
const isBackgroundFilterAppliedState = atom({
  key: "isBackgroundFilterAppliedState",
  default: false,
});
const isScreenLockAppliedState = atom({
  key: "isScreenLockAppliedState",
  default: false,
});

export {
  cameraInstanceState,
  isDualScreenModeAppliedState,
  isFaceFilterAppliedState,
  isBackgroundFilterAppliedState,
  isScreenLockAppliedState,
};
