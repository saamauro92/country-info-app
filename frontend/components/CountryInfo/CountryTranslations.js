const CountryTranslations = (data) => {
  const { translations } = data;
  return (
    <div className="flex flex-col flex-wrap  justify-center md:px-20  ">
        <h2 className="text-2xl font-medium"> Translations</h2>
        {translations &&
          Object.entries(translations).map(([key, value]) => (
            <div key={key} className="flex flex-col sm:flex-row justify-between border-b-[1px] py-4  hover:bg-slate-100">
              <p className="font-medium text-gray-700">{key}</p>
              <p className="text-gray-500"> {value.official}</p>
            </div>
          ))}

    </div>
  );
};

export default CountryTranslations;
