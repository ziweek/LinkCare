import { Card, Spacer, Text, Switch } from "@nextui-org/react";
import Image from "next/image";
import Footer from "../../commons/footer";
import Header from "../../commons/header";

function SettingOptionContainer() {
  const optionList = {
    data: [
      { type: "switch", optionText: "푸쉬알림 수신동의" },
      { type: "switch", optionText: "데이터사용 절약모드" },
    ],
  };
  return (
    <div className="grid gap-1">
      {optionList.data.map((e, i) => {
        return (
          <Card
            // isPressable
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
                  <Text className="font-bold text-xl">{e.optionText}</Text>
                </div>
                <Switch></Switch>
              </div>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
}

export default function ProfileSettingLayout() {
  return (
    <div>
      <div className="w-[90vw] mx-auto min-h-[93vh]">
        <Header></Header>
        <Spacer y={1}></Spacer>
        <SettingOptionContainer></SettingOptionContainer>
      </div>
      <div className="sticky bottom-0">
        <Footer isBackgroundBlack={true}></Footer>
      </div>
    </div>
  );
}
