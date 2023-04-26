const CountryInfoText = ({ title, answer }) => {
    return (
      <div className="border-b-[1px] p-4 w-fulll flex-wrap flex justify-between hover:bg-slate-100">
        <h1 className="font-bold text-md text-gray-700 ">{title}</h1>
        <p className="text-md text-gray-500 ">{answer}</p>
      </div>
    );
  };
  
  export default CountryInfoText;
  