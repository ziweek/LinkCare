import { Button, useTheme, Spacer } from "@nextui-org/react";
import { useRouter } from "next/router";
import { useState } from "react";
import { IconHome, IconManager, IconUser } from "./icons";

export default function Footer(props) {
  const res = {
    data: [
      {
        name: "home",
        icon: (
          <IconHome
            isActivated={props.pageName == "home" ? true : false}
            isBlack={props.isBlack}
          ></IconHome>
        ),
      },
      {
        name: "profile",
        icon: (
          <IconUser
            isActivated={props.pageName == "profile" ? true : false}
            isBlack={props.isBlack}
          ></IconUser>
        ),
      },
    ],
  };
  const router = useRouter();

  function onPressHandler(name) {
    if (name == "home") {
      router.push("/home");
    } else if (name == "profile") {
      router.push("/profile");
    }
  }

  return (
    <>
      {props.isTopBarHidden ? null : (
        <div
          className={
            props.isBlack
              ? "bg-black w-full"
              : "bg-white dark:bg-black w-full rounded-t-2xl"
          }
        >
          <div className="flex flex-row justify-around items-end h-[10vh]">
            {res.data.map((e, i) => (
              <Button
                auto
                ripple={false}
                key={i}
                icon={e.icon}
                onPress={() => {
                  onPressHandler(e.name);
                }}
                className="h-full flex flex-col justify-center"
              ></Button>
            ))}
          </div>
          <Spacer y={1 / 2}></Spacer>
        </div>
      )}
    </>
  );
}
