const DisplayMessage = ({ displayMessage }) => {
  return (
    <div className="text-xl flex justify-center pt-5">
      <h2 className="">Sorry! {displayMessage}</h2>
    </div>
  );
};

export default DisplayMessage;
