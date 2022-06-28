/* 
========================================== 
API links and empty objects to store data
========================================== 
*/

const HISTORICAl = "https://disease.sh/v3/covid-19/historical/all?lastdays=all";
const WORLD = "https://disease.sh/v3/covid-19/all";
const COUNTRIES = "https://disease.sh/v3/covid-19/countries/";
const VACCINES = "https://disease.sh/v3/covid-19/vaccine/coverage/countries?lastdays=1";

const covidObj = [];
let historyObj = {};
let worldObj = {};
let vaccinesObj = {};

/* 
========================================== 
Select event and load data on refresh
========================================== 
*/
drawTracker(firstTracker);
const countriesList = document.getElementById("countriesList");
document.addEventListener( "DOMContentLoaded", getData);
countriesList.addEventListener('change', populateCard);

/* 
================================================ 
Data function called once and store in objects
================================================ 
*/
async function getData(){
    for(let i = 0; i < countriesList.length; i++){
           const covidData = await fetch (COUNTRIES + countriesList.options[i].value, {
                headers: {
                'Accept': 'application/json',
                }
            });
            covidObj[i] = await covidData.json();
    } 
    
    const covidWorld = await fetch (WORLD, {
                headers: {
                'Accept': 'application/json',
                }
            });
            worldObj = await covidWorld.json();
    /* first object created generate html to reduce load time*/
    populateCard();
    populateGlobal();
    callGoogle();
    document.querySelector("main").removeAttribute("class", "noShow");
    document.querySelector("main").setAttribute("class", "show");
    
    /* continue creating objects from api*/
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
}

/* 
========================================== 
Get data from objects and add to html 
========================================== 
*/
function populateCard(){
    document.querySelector(".div3 .data").innerHTML = covidObj[countriesList.selectedIndex].cases;
    document.querySelector(".div4 .data").innerHTML = covidObj[countriesList.selectedIndex].deaths;
    document.querySelector(".div6 .data").innerHTML = covidObj[countriesList.selectedIndex].recovered;
    document.querySelector(".div7 .data").innerHTML = covidObj[countriesList.selectedIndex].active;
    document.querySelector(".div8 .data").innerHTML = covidObj[countriesList.selectedIndex].todayCases;
    document.querySelector(".div9 .data").innerHTML = covidObj[countriesList.selectedIndex].todayDeaths;
}

/* 
========================================== 
Get world data and add to html div10
========================================== 
*/
function populateGlobal(){
    document.querySelector(".globalItem1 .data").innerHTML = worldObj.cases;
    document.querySelector(".globalItem2 .data").innerHTML = worldObj.recovered;
    document.querySelector(".globalItem3 .data").innerHTML = worldObj.deaths;
    document.querySelector(".globalItem4 .data").innerHTML = worldObj.todayDeaths;
}

/* 
========================================== 
Use google charts to generate map
========================================== 
*/
function callGoogle(){
    google.charts.load('current', {'packages':['geochart', 'corechart']});
    google.charts.setOnLoadCallback(drawRegionsMap);
}

function drawRegionsMap() {
    let objData = [];
    /* add data to chart using object*/
    for(let i = -1; i < covidObj.length; i++){
        if (i == -1){
           objData[i+1] = ['Country', 'Cases', 'Deaths'];
        }
        else{
            /* exceptions for "USA" and "UK"*/
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
    /* color depending on data numbers*/
    var options = {
    colorAxis: {colors: ['#eee8f3', '#ddd1e7','#ccbadc','#bba3d0','#aa8cc5','#9975b9','#885ead', '#7647a2', '#663096', '#551a8b']},
    };

    /* draw on asigned div map*/
    var chart = new google.visualization.GeoChart(document.getElementById('chartDiv'));
    chart.draw(data, options);
    google.visualization.events.addListener(geochart, 'select', selectHandler);
}

function drawTracker(code){
   document.getElementById("main").innerHTML = code;
}