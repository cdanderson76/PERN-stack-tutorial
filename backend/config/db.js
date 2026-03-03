import { neon } from '@neondatabase/serverless';
import dotenv from 'dotenv';

dotenv.configDotenv();

//DESTRUCTURE VARIABLES FROM 'process.env'

//THIS CREATES A SQL CONNECTION

const { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env;

export const sql = neon(
  `postgresql://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}?sslmode=require`
);