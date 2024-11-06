import express from 'express';
import { getCountries, getCountryDetails } from '../controllers/countryController';

const router = express.Router();

router.get('/countries', getCountries);
router.get('/country/:code', getCountryDetails);

export default router;