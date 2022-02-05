import { BallTriangle } from "react-loader-spinner";
import css from "./Loader.module.css";
const Loader = () => {
  return (
    <div className={css.LoaderBox}>
      <BallTriangle color="#00BFFF" height={200} width={200} />;
    </div>
  );
};
export default Loader;
