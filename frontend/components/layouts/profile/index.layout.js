import Calendar from "react-calendar";
import { Card, Spacer, Text, Button } from "@nextui-org/react";
import { useTheme } from "@nextui-org/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { animate, motion, useMotionValue } from "framer-motion";
import {
  IconAssistant,
  IconHelp,
  IconHistory,
  IconInfo,
  IconLevel,
  IconPose,
  IconSetting,
} from "@/components/commons/icons";
import ImageSrc3 from "../../../public/images/profile/medals/Award_2.png";
import Image from "next/image";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.5,
    },
  },
};
const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

function TitleInfo(props) {
  const { theme } = useTheme();
  const router = useRouter();
  return (
    <Card
      variant="bordered"
      style={{ borderColor: "transparent", backgroundColor: "transparent" }}
    >
      <Card.Body>
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-row justify-center items-center">
            <div>
              <Text className="text-5xl">{props.title}</Text>
            </div>
          </div>
          <div className="flex flex-row justify-center items-center">
            <Button
              auto
              icon={<IconSetting></IconSetting>}
              // color="primary"
              color={theme.colors.red50.value}
              onPress={() => router.push("/profile/setting")}
            />
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

function CalendarView(params) {
  const [isDomLoaded, setIsDomLoaded] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsDomLoaded(true);
    }
  }, []);

  return (
    <Card
      css={{ p: "$2", borderColor: "transparent", backgroundColor: "#0975F4" }}
      variant="bordered"
    >
      <Card.Body>
        <div className="w-full flex flex-col justify-center items-center">
          {isDomLoaded && (
            <Calendar
              calendarType="US"
              locale="en-EN"
              showNeighboringMonth={false}
              defaultValue={new Date()}
              // formatShortWeekday={(locale, date) => formatDate(date, "dd")}
            ></Calendar>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

function ProfileInfoCardCompo() {
  const rotateY = useMotionValue(0);
  const [isFliped, setisFliped] = useState(false);

  function handlerCardFlip() {
    animate(rotateY, isFliped ? 0 : 180, {
      type: "spring",
      damping: 12.5,
      stiffness: 100,
    });
    setisFliped(!isFliped);
  }

  function Achievements() {
    return (
      <>
        {isFliped ? (
          <Card
            style={{
              transform: "scaleX(-1)",
              backgroundColor: "transparent",
              borderWidth: 0,
            }}
            className="drop-shadow-none transform-gpu"
          >
            <div className="flex flex-col justify-center items-center">
              <Image src={ImageSrc3} height={75}></Image>
              <Text className="font-semibold text-lg">Daily Workout Week</Text>
            </div>
          </Card>
        ) : (
          <Card
            style={{
              transform: "scaleX(-1)",
            }}
            className="drop-shadow-none transform-gpu"
          >
            <Card.Body>
              <div
                className="flex flex-col justify-center items-center text-justify"
                style={{
                  transform: "scaleX(-1)",
                }}
              >
                <Text className="font-md text-md">
                  You need to do at least seven workouts in a single week, each
                  of them at least 15 minutes long.
                </Text>
              </div>
            </Card.Body>
          </Card>
        )}
      </>
    );
  }

  return (
    <motion.div variants={container} initial="hidden" animate="show">
      <Card
        className="flex flex-col"
        css={{ p: "$2", borderColor: "transparent" }}
        variant="flat"
      >
        <Card.Header>
          <div className="flex flex-row justify-center items-center">
            <Text className="text-2xl font-semibold">Recent Achievements</Text>
          </div>
        </Card.Header>
        <div className="w-[80vw] mx-auto">
          <Card.Divider />
        </div>
        <Card.Body className="w-[80vw] mx-auto min-h-[20vh] flex flex-col justify-center items-center">
          <motion.div
            style={{ rotateY: rotateY }}
            initial={handlerCardFlip}
            onTap={handlerCardFlip}
          >
            <Achievements></Achievements>
          </motion.div>
        </Card.Body>
      </Card>
    </motion.div>
  );
}

function ManagerInfoCardCompo() {
  return (
    <motion.div variants={container} initial="hidden" animate="show">
      <Card
        className="flex flex-col"
        css={{ p: "$2", borderColor: "transparent" }}
        variant="flat"
      >
        <Card.Header>
          <div className="flex flex-row justify-center items-center">
            <Text className="text-2xl font-bold ">하루공부 요약</Text>
          </div>
        </Card.Header>
        <div className="w-[80vw] mx-auto bg-white">
          <Card.Divider />
        </div>
        <Card.Body className=" w-[85vw] mx-auto">
          <div>
            <div className="flex flex-row justify-between items-center">
              <div className="flex flex-col justify-center items-center">
                <Text className="text-sm font-light ">최대 집중시간</Text>
                <Text className="text-2xl font-semibold ">90분</Text>
              </div>
              <div className="flex flex-col justify-center items-center">
                <Text className="text-sm font-light ">누적 공부횟수</Text>
                <Text className="text-2xl font-semibold ">5회</Text>
              </div>
              <div className="flex flex-col justify-center items-center">
                <Text className="text-sm font-light ">누적 공부시간</Text>
                <Text className="text-2xl font-semibold ">230분</Text>
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>
    </motion.div>
  );
}

function FunctionCardsGroupCompo() {
  const { isDark } = useTheme();
  const res = {
    data: [
      {
        name: "Train Level",
        icon: (
          <IconLevel
            width={36}
            height={36}
            fill={isDark ? "#92B2F2" : "#4285F4"}
          ></IconLevel>
        ),
        textColorLight: "#4285F4",
        textColorBlack: "#92B2F2",
        backgroundColorLight: "#005EFF19",
        backgroundColorBlack: "#313F57",
        isActive: true,
        handlerOnClick: () =>
          router.push({
            pathname: "/profile/chart/detail",
            query: { from: "학습시간 측정" },
          }),
      },
      {
        name: "Recent History",
        icon: (
          <IconHistory
            width={36}
            height={36}
            fill={isDark ? "#ED8484" : "#EA4335"}
          ></IconHistory>
        ),
        textColorLight: "#EA4335",
        textColorBlack: "#ED8484",
        backgroundColorLight: "#FF000011",
        backgroundColorBlack: "#FF484840",
        isActive: true,
        handlerOnClick: () =>
          router.push({
            pathname: "/profile/chart/detail",
            query: { from: "집중시간 측정" },
          }),
      },
      {
        name: "Pose Report",
        icon: (
          <IconPose
            width={36}
            height={36}
            fill={isDark ? "#91C799" : "#008914"}
          ></IconPose>
        ),
        textColorLight: "#008914",
        textColorBlack: "#91C799",
        backgroundColorLight: "#00891427",
        backgroundColorBlack: "#324438",
        isActive: true,
        handlerOnClick: () =>
          router.push({
            pathname: "/profile/chart/detail",
            query: { from: "학습자세 트래킹" },
          }),
      },
      {
        name: "Care Asistant",
        icon: (
          <IconAssistant
            width={36}
            height={36}
            fill={isDark ? "#F6D775" : "#CA8A2A"}
          ></IconAssistant>
        ),
        textColorLight: "#CA8A2A",
        textColorBlack: "#F6D775",
        backgroundColorLight: "#FAFF0015",
        backgroundColorBlack: "#574B2F",
        isActive: true,
        handlerOnClick: () =>
          router.push({
            pathname: "/profile/chart/detail",
            query: { from: "졸음감지 트래킹" },
          }),
      },
      {
        name: "Info",
        icon: (
          <IconInfo
            width={36}
            height={36}
            fill={isDark ? "#8FD6E9" : "#334B52"}
          ></IconInfo>
        ),
        textColorLight: "#334B52",
        textColorBlack: "#8FD6E9",
        backgroundColorLight: "#8FD6E950",
        backgroundColorBlack: "#334B52",
        isActive: false,
        handlerOnClick: () =>
          router.push({
            pathname: "/profile/chart/detail",
            query: { from: "AI 스터디플래너" },
          }),
      },
      {
        name: "Help",
        icon: (
          <IconHelp
            width={36}
            height={36}
            fill={isDark ? "#AB83E3" : "#4B00B5"}
          ></IconHelp>
        ),
        textColorLight: "#4B00B5",
        textColorBlack: "#AB83E3",
        backgroundColorLight: "#713BB525",
        backgroundColorBlack: "#713BB550",
        isActive: true,
        handlerOnClick: () =>
          router.push({
            pathname: "/profile/chart/detail",
            query: { from: "페이스필터 모드" },
          }),
      },
    ],
  };
  const router = useRouter();

  return (
    <motion.div
      className="grid grid-cols-2 gap-3"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {res.data.map((e, i) => {
        return (
          <motion.div key={i} variants={item}>
            <Card
              isPressable
              onPress={e.handlerOnClick}
              variant="bordered"
              style={{
                borderColor: "transparent",
                backgroundColor: isDark
                  ? e.backgroundColorBlack
                  : e.backgroundColorLight,
                height: "15vh",
              }}
            >
              <Card.Body>
                <div className="flex flex-col justify-between items-start h-full">
                  <div className="flex flex-col items-start w-full">
                    {e.icon}
                  </div>
                  <div className="flex flex-col items-start w-full px-2">
                    <Text
                      css={{
                        color: isDark ? e.textColorBlack : e.textColorLight,
                      }}
                      className="font-semibold text-lg"
                    >
                      {e.name}
                    </Text>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </motion.div>
        );
      })}
    </motion.div>
  );
}

export default function ManagerIndexLayout() {
  return (
    <div className="w-[90vw] mx-auto relative min-h-screen bg-[#]">
      <Spacer y={4}></Spacer>
      <TitleInfo title={"Profile"}></TitleInfo>
      <Spacer y={1}></Spacer>
      <ProfileInfoCardCompo></ProfileInfoCardCompo>
      <Spacer y={1}></Spacer>
      <FunctionCardsGroupCompo></FunctionCardsGroupCompo>
      <Spacer y={6}></Spacer>
    </div>
  );
}
