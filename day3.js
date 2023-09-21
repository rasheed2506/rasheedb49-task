let obj1 = { name: "Person 1", age: 5 };
let obj2 = { age: 5, name: "Person 1" };

// Convert the JSON objects to strings and sort them
const sortedObj1 = JSON.stringify(obj1, Object.keys(obj1).sort());
const sortedObj2 = JSON.stringify(obj2, Object.keys(obj2).sort());

// Compare the sorted strings
if (sortedObj1 === sortedObj2) {
  console.log("The JSON objects are equal.");
} else {
  console.log("The JSON objects are not equal.");
}



// Fetch data from the restcountries.com API
fetch("https://restcountries.com/v3.1/all")
  .then((response) => response.json())
  .then((data) => {
    // Iterate through the data and log the country flags to the console
    data.forEach((country) => {
      if (country.flags) {
        console.log(`Country: ${country.name.common}, Flag: ${country.flags.png}`);
      }
    });
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });


fetch("https://restcountries.com/v3.1/all")
  .then((response) => response.json())
  .then((data) => {
    // Iterate through the data and print country information
    data.forEach((country) => {
      console.log(`Country: ${country.name.common}`);
      console.log(`Region: ${country.region}`);
      console.log(`Sub-region: ${country.subregion}`);
      console.log(`Population: ${country.population}`);
      console.log("---------------------------");
    });
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
