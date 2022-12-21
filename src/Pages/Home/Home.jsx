import React, { useEffect, useState } from "react";
import AdvertisedItems from "../../components/AdvertisedItems/AdvertisedItems";
import CategoryHome from "../../components/CategoryHome/CategoryHome";
import Hero from "../../components/Hero/Hero";
import SearchHero from "../../components/SearchHero/SearchHero";
import AboutService from "../../components/Subsections/AboutService";
import SubService from "../../components/Subsections/SubService";

function Home() {
  const [adsData, setAdsData] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/product/advertise`)
      .then((res) => res.json())
      .then((data) => setAdsData(data));
  }, []);
  useEffect(() => {
    document.title = "bikikini: Home";
  }, []);

  console.log(adsData);
  return (
    <>
      <div>
        <div>
          <SearchHero />
        </div>
        <div className="max-w-5xl mx-auto">
          <Hero />
          <CategoryHome />
          {/* <AdvertisedItems /> */}
          {adsData && <AdvertisedItems adsData={adsData} />}

          <AboutService />
          <SubService />
        </div>
      </div>
    </>
  );
}

export default Home;
