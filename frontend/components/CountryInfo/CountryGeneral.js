import { formatList } from "../../utils/utils";
import CountryInfoWidget from "./CountryInfoWidget";
import CountryInfoText from "./CountryInfoText";
import { NumericFormat } from "react-number-format";

const CountryGeneral = ({ data }) => {
  const {
    name,
    capital,
    continents,
    population,
    languages,
    timezones,
    currencies,
    flags,
  } = data;
  return (
    <>
      <div className="flex flex-col flex-wrap justify-center md:px-20 ">
        <h2 className="text-2xl font-medium"> General Information</h2>
        <div className="flex flex-wrap justify-center gap-10">
          <CountryInfoWidget title="Official Name" answer={name.official} />
          <CountryInfoWidget title="Capital" answer={capital} />
          <CountryInfoWidget
            title="Population"
            answer={
              <NumericFormat
                value={population}
                allowLeadingZeros
                thousandSeparator=","
                displayType="text"
              />
            }
          />
          <img src={flags.png} alt={flags.alt} className="h-36" />
        </div>
        <div className="my-5">
          <CountryInfoText title="Languages" answer={formatList(languages)} />
          <CountryInfoText title="Continents" answer={continents.join(", ")} />
          <CountryInfoText title="Currencies" answer={formatList(currencies)} />
          <CountryInfoText title="Timezone" answer={timezones.join(", ")} />
        </div>
      </div>
    </>
  );
};

export default CountryGeneral;
