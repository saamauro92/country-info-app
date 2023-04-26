import axios from "axios";
import { useState } from "react";
import DisplayMessage from "../components/DisplayMessage";
import Loading from "../components/Loading";
import CountryInfo from "../components/CountryInfo";
import Layout from "../components/_App/Layout";
import Search from "../components/Search";

export default function Home() {
  const [searchInput, setSearchInput] = useState("");
  const [countryData, setCountryData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [displayMessage, setDisplayMessage] = useState("");

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/country/${searchInput}`
    );

    if (response.data.status === 200) {
      const { data } = response.data;
      setCountryData(data);
      setDisplayMessage("");
      setIsLoading(false);
    } else if (response.data.status !== 200) {
      setIsLoading(false);
      setCountryData(null);
      setDisplayMessage(`${response.data.error}`);
    }
  };

  return (

    <Layout
     handleSubmit={handleSubmit}
    handleInputChange={handleInputChange}
    searchInput={searchInput}
    >

      {isLoading ? (
        <Loading/>
      ) : countryData ? (
        <CountryInfo data={...countryData}/>
      ) : (
      
        <DisplayMessage displayMessage={displayMessage} />
      )}

       </Layout>
  );
}
