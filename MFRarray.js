// 1.Solving problems using array functions on rest countries data.

// a.Get all the countries from Asia continent /region using Filter function
var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all")
request.responseType="json"
request.onload=()=>{
    const data=request.response;
    // console.log(data)
// a.Get all the countries from Asia continent /region using Filter function
     const country=data.filter((countries)=>countries.region=="Asia")
    console.log(country)

// b.Get all the countries with a population of less than 2 lakhs using Filter function
    const countrydata=data.filter((countries)=>countries.population<200000)
    console.log(countrydata)
   
// c.Print the following details name, capital, flag using forEach function
    data.forEach((item,index) => {
        console.log(data[index].name.common,data[index].capital,data[index].flag)
   });

// d.Print the total population of countries using reduce function
        const totalpop=data.reduce((sum,curr)=>sum+curr.population,0)
        console.log(totalpop)

// e.Print the country which uses US Dollars as currency
    let UsDollar = data.filter((data) => { 
        for (let curr in data.currencies) {
             if (data.currencies[curr].name == 'United States dollar')
              { return true;
             } }
             }).map((data) => data.name.common);
    console.log(UsDollar)
 }
request.send();