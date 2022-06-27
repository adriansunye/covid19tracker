const HISTORICAl = "https://disease.sh/v3/covid-19/historical/all?lastdays=all";
const WORLD = "https://disease.sh/v3/covid-19/all";
const COUNTRIES = "https://disease.sh/v3/covid-19/countries/";
const VACCINES = "https://disease.sh/v3/covid-19/vaccine/coverage/countries?lastdays=1";

const countriesList = document.getElementById("countriesList");
document.addEventListener( "DOMContentLoaded", getData);
countriesList.addEventListener('change', getData);

async function getData(){
    try{ 
        const covidData = await fetch (COUNTRIES + countriesList.options[countriesList.selectedIndex].value, {
        headers: {
            'Accept': 'application/json',
            }
        });
        if(!covidData.ok) throw "empty";
        const covidObj = await covidData.json(); 
        
        populateCard(covidObj);
        } catch(err) {
            console.log("Input is " + err);
        }
}

function populateCard(obj){
    if(document.querySelector(".div3 p")){
        let p = document.querySelectorAll(".parent p");
            p.forEach(el => {
            el.remove();
        });
    }
    document.querySelector(".div3").appendChild(document.createElement("p")).innerHTML = obj.cases;
    document.querySelector(".div4").appendChild(document.createElement("p")).innerHTML = obj.deaths;
    document.querySelector(".div6").appendChild(document.createElement("p")).innerHTML = obj.recovered;
    document.querySelector(".div7").appendChild(document.createElement("p")).innerHTML = obj.active;
    document.querySelector(".div8").appendChild(document.createElement("p")).innerHTML = obj.todayCases;
    document.querySelector(".div9").appendChild(document.createElement("p")).innerHTML = obj.todayDeaths;    
}