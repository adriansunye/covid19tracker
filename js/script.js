const HISTORICAl = "https://disease.sh/v3/covid-19/historical/all?lastdays=all";
const WORLD = "https://disease.sh/v3/covid-19/all";
const COUNTRIES = "https://disease.sh/v3/covid-19/countries/";
const VACCINES = "https://disease.sh/v3/covid-19/vaccine/coverage/countries?lastdays=1";

const covidObj = [];
let historyObj = {};
let worldObj = {};
let vaccinesObj = {};

const countriesList = document.getElementById("countriesList");
document.addEventListener( "DOMContentLoaded", getData);
countriesList.addEventListener('change', populateCard);


async function getData(){
    for(let i = 0; i < countriesList.length; i++){
           const covidData = await fetch (COUNTRIES + countriesList.options[i].value, {
                headers: {
                'Accept': 'application/json',
                }
            });
            covidObj[i] = await covidData.json();
    }
    
    const covidVaccines = await fetch (VACCINES, {
                headers: {
                'Accept': 'application/json',
                }
            });
            vaccinesObj = await covidVaccines.json();
    
    const covidHistory = await fetch (HISTORICAl, {
                headers: {
                'Accept': 'application/json',
                }
            });
            historyObj = await covidHistory.json();
    
    const covidWorld = await fetch (WORLD, {
                headers: {
                'Accept': 'application/json',
                }
            });
            worldObj = await covidWorld.json();
            
    
    populateCard();
    /*updated();*/
    callGoogle();   
}

function populateCard(){
    if(document.querySelector(".div3 p")){
        let p = document.querySelectorAll(".parent p");
            p.forEach(el => {
            el.remove();
        });
    }
    document.querySelector(".div3 .data").appendChild(document.createElement("p")).innerHTML = covidObj[countriesList.selectedIndex].cases;
    document.querySelector(".div4 .data").appendChild(document.createElement("p")).innerHTML = covidObj[countriesList.selectedIndex].deaths;
    document.querySelector(".div6 .data").appendChild(document.createElement("p")).innerHTML = covidObj[countriesList.selectedIndex].recovered;
    document.querySelector(".div7 .data").appendChild(document.createElement("p")).innerHTML = covidObj[countriesList.selectedIndex].active;
    document.querySelector(".div8 .data").appendChild(document.createElement("p")).innerHTML = covidObj[countriesList.selectedIndex].todayCases;
    document.querySelector(".div9 .data").appendChild(document.createElement("p")).innerHTML = covidObj[countriesList.selectedIndex].todayDeaths;
}

function updated(){
    var d = new Date(worldObj.updated); // The 0 there is the key, which sets the date to the epoch
    document.querySelector(".input-group label").innerHTML = "1";
}

function callGoogle(){
    google.charts.load('current', {'packages':['geochart', 'corechart']});
    google.charts.setOnLoadCallback(drawRegionsMap);
}

function drawRegionsMap() {
    let objData = [];
    for(let i = -1; i < covidObj.length; i++){
        if (i == -1){
           objData[i+1] = ['Country', 'Cases', 'Deaths'];
        }
        else{
            switch(covidObj[i].country){
                case('USA'):
                   objData[i+1] = ['United States', covidObj[i].cases, covidObj[i].deaths];
                   break;
                case('UK'):
                    objData[i+1] = ['United Kingdom', covidObj[i].cases, covidObj[i].deaths]; 
                    break;
                default:
                    objData[i+1] = [covidObj[i].country, covidObj[i].cases, covidObj[i].deaths];    
            }
        }
 }
 var data = google.visualization.arrayToDataTable(objData);

var options = {
colorAxis: {colors: ['#eee8f3', '#ddd1e7','#ccbadc','#bba3d0','#aa8cc5','#9975b9','#885ead', '#7647a2', '#663096', '#551a8b']},
};

var chart = new google.visualization.GeoChart(document.getElementById('chartDiv'));
chart.draw(data, options);
}