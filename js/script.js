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

let chart = "";
let data = "";

/* 
========================================== 
Select event and load data on refresh
========================================== 
*/
drawTracker(firstTracker, 'css/tracker1.css');
const countriesList = document.getElementById("countriesList");
document.addEventListener( "DOMContentLoaded", getData);
countriesList.addEventListener('change', populateTracker1);

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
    populateTracker1();
    populateGlobal();
    populateSection();
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
function populateTracker1(){
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
Get world data and add to common aside
========================================== 
*/
function populateSection(){
    document.querySelector(".total .numeros").innerHTML = worldObj.cases;
    document.querySelector(".total .containerMas").innerHTML = worldObj.todayCases;
    document.querySelector(".activeCases .numeros").innerHTML = worldObj.active ;
    document.querySelector(".recovered .numeros").innerHTML = worldObj.recovered;
    document.querySelector(".recovered .containerMas").innerHTML = worldObj.todayRecovered ;
    document.querySelector(".deaths .numeros").innerHTML = worldObj.deaths;
    document.querySelector(".deaths .containerMas").innerHTML = worldObj.todayDeaths;
    let covidObjOrder = covidObj.slice();
    covidObjOrder.sort(function(a, b) {
        return b.cases - a.cases;
    });
    for(let i = 0; i < 10; i++){
        let div = document.createElement("div");
        let divFlag = document.createElement("div"); 
        let flag = document.createElement("img");
        let country = document.createElement("p");
        let data = document.createElement("p");
        document.getElementById("topTen").appendChild(div);
        div.setAttribute('class', 'topTenCountry');
        div.setAttribute('id', covidObjOrder[i].countryInfo.iso3);
        document.getElementById(covidObjOrder[i].countryInfo.iso3).appendChild(divFlag);
        divFlag.setAttribute('class', 'flag');
        document.querySelector('#' + covidObjOrder[i].countryInfo.iso3 + ' .flag').appendChild(flag);
        flag.setAttribute('src', covidObjOrder[i].countryInfo.flag);
        document.getElementById(covidObjOrder[i].countryInfo.iso3).appendChild(country);
        country.setAttribute('class', 'country');
        document.querySelector('#' + covidObjOrder[i].countryInfo.iso3 + ' .country').innerHTML = covidObjOrder[i].country;
        document.getElementById(covidObjOrder[i].countryInfo.iso3).appendChild(data);
        data.setAttribute('class', 'numbers');
        document.querySelector('#' + covidObjOrder[i].countryInfo.iso3 + ' .numbers').innerHTML = covidObjOrder[i].cases;
    }
}

/* 
========================================== 
Function that gives data to table
========================================== 
*/

function populateTracker2(){
    document.getElementById("tableBody").innerHTML = "";
    const elm = document.getElementById("entries");
    const indexValue = elm.options[elm.selectedIndex].value;
    var t = "";
    for(let i = 0; i < indexValue; i++){
        var tr = "<tr>";
          tr += "<td><div class='flag'><img src='"+covidObj[i].countryInfo.flag+"'></div></td>";
          tr += "<td>"+covidObj[i].country+"</td>";
          tr += "<td>"+covidObj[i].cases+"</td>";
          tr += "<td>"+covidObj[i].todayCases+"</td>";
          tr += "<td>"+covidObj[i].deaths+"</td>";
          tr += "<td>"+covidObj[i].todayDeaths+"</td>";
          tr += "<td>"+covidObj[i].recovered+"</td>";
          tr += "<td>"+covidObj[i].active+"</td>";
          tr += "<td>"+covidObj[i].critical+"</td>";
          tr += "<td>"+covidObj[i].tests +"</td>";
          tr += "</tr>";
          t += tr;
        
    }
    document.getElementById("tableBody").innerHTML += t;          
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
    data = google.visualization.arrayToDataTable(objData);
    /* color depending on data numbers*/
    let options = {
    colorAxis: {colors: ['#eee8f3', '#ddd1e7','#ccbadc','#bba3d0','#aa8cc5','#9975b9','#885ead', '#7647a2', '#663096', '#551a8b']},
    };

    /* draw on asigned div map*/
    chart = new google.visualization.GeoChart(document.getElementById('chartDiv'));
    chart.draw(data, options);
    /*google.visualization.events.addListener(geochart, 'select', selectHandler);*/
}

/* 
========================================== 
Function that changes css and aside cotent
========================================== 
*/

function drawTracker(code, css){
   document.getElementById("myCss").setAttribute('href', css);
   document.getElementById("aside").innerHTML = code;      
}

/* 
========================================== 
Functions called by nav
========================================== 
*/

function goTracker1(code, css){
   activeNav("nav1");
   drawTracker(code, css)
   populateTracker1();
   populateGlobal();    
}

function goTracker2(code, css){
   activeNav("nav2");  
   drawTracker(code, css);
   document.getElementById("entries").addEventListener('change', populateTracker2);
   populateTracker2(); 
   document.getElementById("site-search").addEventListener('change', search); 
}

function activeNav(nav){
   document.querySelector(".active").removeAttribute("class", "active");
   document.getElementById(nav).setAttribute("class", "active"); 
   document.getElementById("aside").innerHTML = "";
}