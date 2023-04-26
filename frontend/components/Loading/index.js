import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";

const Loading = () => {
  return (
    <>
      <div className="flex justify-center  p-[10%]">
        <FontAwesomeIcon
          icon={faCircleNotch}
          className="text-8xl animate-spin text-gray-600"
        />
      </div>
    </>
  );
};

export default Loading;
