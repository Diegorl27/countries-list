import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

interface BorderCountry {
  commonName: string;
  officialName: string;
  countryCode: string;
  region: string;
  borders: string | null;
}

interface PopulationCount {
  year: number;
  value: number;
}

interface CountryInfo {
  name: string;
  flagData: string | any;
  borders: BorderCountry[];
  countryInfo: {
    region: string;
    commonName: string;
    countryCode: string;
    borders: BorderCountry[];
  };
  populationData: {
    country: string;
    code: string;
    iso3: string;
    populationCounts: PopulationCount[];
  };
}

const useCountryInfo = (code: string | string[] | undefined) => {
  const [countryInfo, setCountryInfo] = useState<CountryInfo | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchCountryInfo = async () => {
      if (code) {
        try {
          const response = await fetch(`http://localhost:5001/api/country/${code}`);
          if (!response.ok) throw new Error('Failed to fetch country information.');
          const data = await response.json();
          setCountryInfo(data);
        } catch (err: any) {
          setError(err.message || 'An error occurred');
        } finally {
          setLoading(false);
        }
      }
    };
    fetchCountryInfo();
  }, [code]);

  return { countryInfo, error, loading };
};

export default useCountryInfo;