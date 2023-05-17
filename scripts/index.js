"use strict";

let teams = [
    { code: "DAL", name: "Dallas Cowboys", plays: "Arlington, TX" },
    { code: "DEN", name: "Denver Broncos", plays: "Denver, CO" },
    { code: "HOU", name: "Houston Texans", plays: "Houston, TX" },
    { code: "KAN", name: "Kansas City Chiefs", plays: "Kansas City, MO" },
];



window.onload = function () {
    // load the dropdown list
    let text = ["Dallas Cowboys", "Denver Broncos", "Houston Texans", "Kansas City Chiefs"];
    let value = ["DAL", "DEN", "HOU", "KAN"];
    const teamsList = document.getElementById("teamsList");
    let length = text.length;
    for (let i = 0; i < length; i++) {
        // create the option element and set the text and
        // value at the same time
        let theOption = new Option(text[i], value[i]);
        // append the option as a child of (inside) the 
        // select element
        teamsList.appendChild(theOption);

        console.log("Hello");
    }

    const button = document.getElementById("button");
    button.onclick = onButtonClick;
    console.log("click");
};

function onButtonClick() {
    const teamsList = document.getElementById("teamsList");
    const selectedTeamCode = teamsList.value;
    const selectedTeam = teams.find(team => team.code === selectedTeamCode);
    const teamPara = document.getElementById("teamPara");
    console.log(selectedTeam.text);
    let texasDescription = "The Dallas Cowboys are a professional American football team";
    let texasmessage = texasDescription
    teamPara.innerHTML = texasmessage;
  

}