import { promises as fs } from 'fs';
import path from 'path';

export const readJSON = async <T>(relativePath: string): Promise<T> => {
  const filePath = path.resolve(process.cwd(), relativePath);
  const data = await fs.readFile(filePath, 'utf-8');
  return JSON.parse(data) as T;
};

export const writeJSON = async (relativePath: string, data: unknown): Promise<void> => {
  const filePath = path.resolve(process.cwd(), relativePath);
  await fs.writeFile(filePath, JSON.stringify(data, null, 2), 'utf-8');
};
