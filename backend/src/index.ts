import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import countryRoutes from './routes/countryRoutes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());
app.use('/api', countryRoutes);

app.listen(PORT, () => {
  console.log(`Backend server is running on http://localhost:${PORT}`);
});