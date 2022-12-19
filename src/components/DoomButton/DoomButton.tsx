import doomStyles from "./DoomButton.module.css";

export function DoomButton() {
  return (
    <>
      <button className={doomStyles.button}>
        <span>DOOM FM</span>
      </button>
    </>
  );
}
