import { DoomButton } from "../DoomButton/DoomButton";
import { SynthButton } from "../SynthButton/SynthButton";
import headerStyles from "./Header.module.css";
export function Header() {
  return (
    <header className={headerStyles.header}>
      <div className={headerStyles.img_wrapper} />
      <nav className={headerStyles.nav}>
        <div className={headerStyles.buttons_nav}>
          <SynthButton />
          <DoomButton />
        </div>
      </nav>
    </header>
  );
}
