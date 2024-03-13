import paperAirplaneIcon from "../assets/images/paper-plane-regular.svg";

const DownloadBtn = ({ mobileScreenWidth }) => {
  return (
    <a href="#signup">
      <button className={` btn ${mobileScreenWidth && "btn-small"}`}>
        {mobileScreenWidth ? (
          <img
            src={paperAirplaneIcon}
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
