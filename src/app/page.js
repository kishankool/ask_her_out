import Image from "next/image";
import Game from "./chain/Game/Game";
import Wrong from "./chain/Wrong/Wrong";

export default function Home() {
  return (
    <>
      <Game />
      <Wrong />
    </>
  );
}
