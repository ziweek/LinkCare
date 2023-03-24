import { Card, Spacer, Text, Avatar, Button } from "@nextui-org/react";
import Image from "next/image";

import SettingIcon from "../../../public/images/profile/fi-rr-settings.png";
import InfoIcon from "../../../public/images/profile/fi-rr-shield-interrogation.png";
import { useTheme } from "@nextui-org/react";
import { useRouter } from "next/router";

function UserInfo() {
  const { theme } = useTheme();

  const MicrophoneIcon = ({
    fill = "currentColor",
    filled,
    size,
    height,
    width,
    label,
    ...props
  }) => {
    return (
      <svg
        width={size || width}
        height={size || height}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M9.89535 11.23C9.45785 11.23 9.11192 11.57 9.11192 12C9.11192 12.42 9.45785 12.77 9.89535 12.77H16V17.55C16 20 13.9753 22 11.4724 22H6.51744C4.02471 22 2 20.01 2 17.56V6.45C2 3.99 4.03488 2 6.52762 2H11.4927C13.9753 2 16 3.99 16 6.44V11.23H9.89535ZM19.6302 8.5402L22.5502 11.4502C22.7002 11.6002 22.7802 11.7902 22.7802 12.0002C22.7802 12.2002 22.7002 12.4002 22.5502 12.5402L19.6302 15.4502C19.4802 15.6002 19.2802 15.6802 19.0902 15.6802C18.8902 15.6802 18.6902 15.6002 18.5402 15.4502C18.2402 15.1502 18.2402 14.6602 18.5402 14.3602L20.1402 12.7702H16.0002V11.2302H20.1402L18.5402 9.6402C18.2402 9.3402 18.2402 8.8502 18.5402 8.5502C18.8402 8.2402 19.3302 8.2402 19.6302 8.5402Z"
          fill={fill}
        />
      </svg>
    );
  };

  return (
    <Card variant="bordered" style={{ borderColor: "transparent" }}>
      <Card.Body>
        <div className="flex flex-row justify-between items-center px-2">
          <div className="flex flex-row justify-center items-center">
            {/* <Avatar squared text="Junior" size="xl" /> */}
            {/* <Spacer x={2 / 3}></Spacer> */}
            <div>
              <Text className="text-2xl font-black">불타는오징어</Text>
              <Text className="text-sm" css={{ color: "$accents8", pl: "$1" }}>
                alex.jiuk.kim@gmail.com
              </Text>
            </div>
          </div>
          <div className="flex flex-row justify-center items-center">
            <Button
              auto
              icon={<MicrophoneIcon size={28} fill="currentColor" />}
              // color="primary"
              color={theme.colors.red50.value}
            />
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

function UserOptionContainer() {
  const router = useRouter();
  const optionList = {
    data: [
      // {
      //   optionIcon: UserIcon,
      //   optionText: "프로필 수정",
      //   link: "setting/update",
      // },
      {
        optionIcon: SettingIcon,
        optionText: "앱 설정",
        link: "/setting/setting",
      },
      {
        optionIcon: InfoIcon,
        optionText: "스튜디오 정보",
        link: "/setting/studio",
      },
      // { optionIcon: DangerIcon, optionText: "실험실", link: "setting/lab" },
    ],
  };
  return (
    <div className="grid gap-1">
      <Card css={{ borderColor: "transparent" }} variant="bordered">
        <Card.Body>
          {optionList.data.map((e, i) => {
            return (
              <Card
                isPressable
                onPress={() => {
                  console.log(e.link);
                  router.push(e.link);
                }}
                key={i}
                variant="bordered"
                style={{
                  backgroundColor: "transparent",
                  borderColor: "transparent",
                }}
              >
                <Card.Body>
                  <div className="flex flex-row justify-between items-center">
                    <div className="flex flex-row justify-center items-center">
                      <Image src={e.optionIcon} width={35}></Image>
                      <Spacer x={2 / 3}></Spacer>
                      <Text className="font-bold text-xl">{e.optionText}</Text>
                    </div>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.2667 6.58594L7.20733 3.52861C7.0804 3.41384 6.91418 3.35227 6.74311 3.35667C6.57203 3.36106 6.4092 3.43107 6.28831 3.55221C6.16743 3.67335 6.09777 3.83633 6.09374 4.00741C6.08971 4.1785 6.15162 4.34458 6.26667 4.47128L9.324 7.52861C9.44898 7.65363 9.51919 7.82317 9.51919 7.99994C9.51919 8.17672 9.44898 8.34626 9.324 8.47128L6.26667 11.5286C6.14166 11.6537 6.07147 11.8233 6.07153 12.0002C6.0716 12.177 6.14191 12.3466 6.267 12.4716C6.3921 12.5966 6.56172 12.6668 6.73857 12.6667C6.91542 12.6667 7.085 12.5964 7.21 12.4713L10.2667 9.41394C10.6416 9.03889 10.8522 8.53027 10.8522 7.99994C10.8522 7.46961 10.6416 6.961 10.2667 6.58594Z"
                        fill="#64748B"
                      />
                    </svg>
                  </div>
                </Card.Body>
              </Card>
            );
          })}
        </Card.Body>
      </Card>
    </div>
  );
}

export default function SettingCompoGroup() {
  return (
    <div className="w-[90vw] mx-auto min-h-[81.5vh]">
      <Spacer y={2}></Spacer>
      <UserInfo></UserInfo>
      <Spacer y={1}></Spacer>
      <UserOptionContainer></UserOptionContainer>
    </div>
  );
}
