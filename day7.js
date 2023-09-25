fetch('https://restcountries.com/v3.1/all')
  .then((response) => response.json())
  .then((data) => {
    // You can now work with the data and implement the tasks.
  })
  .catch((error) => console.error('Error fetching data: ', error));


const asiaCountries = data.filter((country) => country.region === 'Asia');
console.log('Countries in Asia:', asiaCountries);

const countriesWithLowPopulation = data.filter((country) => country.population < 200000);
console.log('Countries with population less than 2 lakhs:', countriesWithLowPopulation);

data.forEach((country) => {
  console.log('Name:', country.name.common);
  console.log('Capital:', country.capital);
  console.log('Flag:', country.flags[0]);
  console.log('---');
});

const totalPopulation = data.reduce((acc, country) => acc + country.population, 0);
console.log('Total population of all countries:', totalPopulation);


const usDollarCountries = data.filter((country) =>
  country.currencies && country.currencies.USD
);
console.log('Countries using US Dollars as currency:', usDollarCountries);

