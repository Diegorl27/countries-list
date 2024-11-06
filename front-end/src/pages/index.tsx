import { useEffect, useState } from 'react';
import Link from 'next/link';

interface Country {
  countryCode: string;
  name: string;
}

const Home = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/countries`);
        if (!response.ok) {
          throw new Error('Error fetching countries');
        }
        const data = await response.json();
        setCountries(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  if (loading) {
    return <p>Loading countries...</p>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-[#000]">Country List</h1>
      <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {countries.map((country) => (
          <Link href={`/country/${country.countryCode}`} key={country.countryCode}>
            <div className="p-4 bg-white rounded-lg shadow hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200 cursor-pointer text-center">
              <span className="text-md font-semibold text-[#000]">{country.name}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;