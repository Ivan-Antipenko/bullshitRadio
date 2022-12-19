import radioStyles from "./RadioItem.module.css";
import cartridge from "../../images/cartridge.png";
import { useState } from "react";

export function RadioItem() {
  const [isLoad, setLoad] = useState(false);
  const pl = document.getElementById("sc");

  function onYouTubeIframeAPIReady() {
    let player = new YT.Player("player", {
      height: "360",
      width: "640",
      videoId: "M7lc1UVf-VE",
      events: {
        onReady: onPlayerReady,
        onStateChange: onPlayerStateChange,
      },
    });
  }
  onYouTubeIframeAPIReady();

  return (
    <section className={radioStyles.frame_section}>
      <div className={radioStyles.frame_wrapper}>
        <div id="player" className={radioStyles.frame}></div>
      </div>
      <div className={radioStyles.player_box}>
        <img className={radioStyles.cartridge} src={cartridge} />
        <button>Play</button>
        <button>Stop</button>
      </div>
    </section>
  );
}
