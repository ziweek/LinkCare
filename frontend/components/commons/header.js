import { useTheme } from "@nextui-org/react";

export default function Header(props) {
  const { isDark } = useTheme();
  return (
    <div
      className="w-full h-[10vh]"
      style={{
        backgroundColor:
          props.pageName == "home" ? "transparent" : isDark ? "#000" : "#fff",
      }}
    ></div>
  );
}
