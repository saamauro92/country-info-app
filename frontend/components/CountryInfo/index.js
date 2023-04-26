import { Tab } from "@headlessui/react";
import CountryTranslations from "./CountryTranslations";
import CountryGeneral from "./CountryGeneral";
import CountryMap from "./CountryMap";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const CountryInfo = ({ data }) => {
  let TabCategories = ["General", "Map", "Translations"];
  const { translations, latlng } = data;
  if (data)
    return (
      <div className="w-full  px-2 pb-16 sm:px-0 flex gap-10 flex-wrap md:flex-nowrap  ">
        <Tab.Group>
          <Tab.List className="flex space-x-1 min-w-[300px] rounded-xl  p-1 flex-col ">
            {TabCategories.map((category) => (
              <Tab
                key={category}
                className={({ selected }) =>
                  classNames(
                    "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700",
                    "ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2 text-start pl-2",
                    selected
                      ? "bg-slate-300 shadow"
                      : "text-blue-100 hover:bg-white/[0.12] hover:text-slate-300"
                  )
                }
              >
                {category}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="w-full ">
            <Tab.Panel className="flex-grow">
              <CountryGeneral data={data} />
            </Tab.Panel>
            <Tab.Panel className="w-full ">
              <CountryMap data={latlng} />
            </Tab.Panel>
            <Tab.Panel className="w-full">
              <CountryTranslations translations={translations} />
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    );
};

export default CountryInfo;
