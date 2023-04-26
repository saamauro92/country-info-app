const CountryInfoWidget = ({ title, answer }) => {
  return (
    <div className="flex flex-col items-center justify-center rounded-[10px] shadow-lg p-4  space-y-1 text-center flex-grow">
      <h1 className="font-bold text-xl text-gray-700 ">{title}</h1>
      <p className="text-xl text-gray-500 ">{answer}</p>
    </div>
  );
};

export default CountryInfoWidget;
