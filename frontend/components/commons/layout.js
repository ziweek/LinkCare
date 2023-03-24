import { Spacer } from "@nextui-org/react";
import Footer from "./footer";
import Header from "./header";

export default function Layout(props) {
  return (
    <>
      <div className="max-w-[100vw] bg-white dark:bg-black">
        {props.isTopBarHidden ? null : (
          <div className="fixed w-full z-20">
            <Header pageName={props.pageName}></Header>
          </div>
        )}
        <div
          className={
            props.isBlack
              ? "mx-auto bg-black flex flex-col justify-start h-full"
              : "mx-auto bg-white dark:bg-black flex flex-col justify-start h-full"
          }
        >
          {props.isTopBarHidden ? props.children : <>{props.children}</>}
        </div>
        {props.isBottomBarHidden ? null : (
          <div className="fixed bottom-0 w-full z-20">
            <Footer pageName={props.pageName} isBlack={props.isBlack}></Footer>
          </div>
        )}
      </div>
    </>
  );
}
