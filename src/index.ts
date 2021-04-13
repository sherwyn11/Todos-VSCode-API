import dotenv from 'dotenv';
import app from './app';

dotenv.config();

const PORT: number = Number(process.env.PORT) || 8000;

app.listen((PORT), () => {
  console.log(`Server is up on ${PORT}!`);
});