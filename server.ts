import app from './src/app.js'

const PORT =   process.env.PORT ? parseInt(process.env.PORT, 10) : 6000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
