import style from "@/styles/MainHeader.module.scss";
import { ImUser, ImLock, ImEnlarge2 } from "react-icons/im";

export const MainHeader: React.FC = () => {
  return (
    <header className={style.header}>
      <div className={style.header_container}>
        <button className={style.user_icon_container}>
          <ImUser size={20} />
          <div className={style.users}>28</div>
        </button>
        <div className={style.icon_buttons_container}>
          <button className={style.icon}>
            <ImLock size={15} />
          </button>
          <button className={style.icon}>
            <ImEnlarge2 size={15} />
          </button>
        </div>
      </div>
    </header>
  );
};
