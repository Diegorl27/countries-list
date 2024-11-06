export const getAvailableCountries = async () => {
  try {
    const response = await fetch('https://date.nager.at/api/v3/AvailableCountries');
    if (!response.ok) {
      throw new Error(`Error fetching countries: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getCountryInfo = async (code: string) => {
  try {
    const [countryInfoResponse, populationDataResponse, flagDataResponse] = await Promise.all([
      fetch(`https://date.nager.at/api/v3/CountryInfo/${code}`),
      fetch('https://countriesnow.space/api/v0.1/countries/population'),
      fetch('https://countriesnow.space/api/v0.1/countries/flag/images')
    ]);

    if (!countryInfoResponse.ok || !populationDataResponse.ok || !flagDataResponse.ok) {
      throw new Error(`Error fetching country data`);
    }

    const countryInfo = await countryInfoResponse.json();
        const flagData = (await flagDataResponse.json()).data.find(
          (country: { iso2: string }) => country.iso2 === code
        );
    const populationData = (await populationDataResponse.json()).data.find(
      (country: { country: string }) => country.country === flagData.name
    );

    return {
      countryInfo,
      populationData,
      flagData
    };
  } catch (error) {
    console.error(error);
    throw error;
  }
};