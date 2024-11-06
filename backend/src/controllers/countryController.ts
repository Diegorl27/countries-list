import { Request, Response } from 'express';
import { getAvailableCountries, getCountryInfo } from '../services/countryService';

export const getCountries = async (req: Request, res: Response) => {
  try {
    const countries = await getAvailableCountries();
    res.json(countries);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching available countries' });
  }
};

export const getCountryDetails = async (req: Request, res: Response) => {
  const { code } = req.params;
  try {
    const countryDetails = await getCountryInfo(code);
    res.json(countryDetails);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching country details' });
  }
};