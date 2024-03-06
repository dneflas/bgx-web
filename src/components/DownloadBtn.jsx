import circleDownIcon from "../assets/images/circle-down-solid.svg";

const DownloadBtn = ({ mobileScreenWidth }) => {
  return (
    <a href="#signup">
      <button className={` btn ${mobileScreenWidth && "btn-small"}`}>
        {mobileScreenWidth ? (
          <img
            src={circleDownIcon}
            alt="arrow down inside circle icon"
            width="15px"
          />
        ) : (
          "Get Started"
        )}
      </button>
    </a>
  );
};

export default DownloadBtn;
