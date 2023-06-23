"use strict";

const teamsList = document.getElementById("teamsList");

const button = document.getElementById("button");

const teamPara = document.getElementById("teamPara");


let teams = [
    { code: "DAL", name: "Dallas Cowboys", plays: "Arlington, TX" },
    { code: "DEN", name: "Denver Broncos", plays: "Denver, CO" },
    { code: "HOU", name: "Houston Texans", plays: "Houston, TX" },
    { code: "KAN", name: "Kansas City Chiefs", plays: "Kansas City, MO" },
];



window.onload = function () {
    // load the dropdown list
    button.onclick = onButtonClick;


    let text = ["Dallas Cowboys", "Denver Broncos", "Houston Texans", "Kansas City Chiefs"];

    let value = ["DAL", "DEN", "HOU", "KAN"];


    let length = text.length;
    for (let i = 0; i < length; i++) {
        // create the option element and set the text and
        // value at the same time
        let theOption = document.createElement("option");
        theOption.innerText = text[i];
        theOption.value = value[i];
        console.log(theOption);
        // append the option as a child of (inside) the 
        // select element
        teamsList.appendChild(theOption);

        console.log("Hello");
    }

};





function onButtonClick() {


    const selectedValue = teamsList.value;

    console.log(selectedValue);

    if (teamsList.selectedIndex >= 0) {
        alert(`You selected a value`);
    }

    const selectedTeam = teams.find(team => team.code === selectedValue);

    let message = `You selected the ${selectedTeam.name} (${selectedValue}) who play in ${selectedTeam.plays}.`;
    console.log(selectedTeam.name);

    teamPara.innerHTML = message;


}