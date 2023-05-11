"use strict";


let teams = [
    { code: "DAL", name: "Dallas Cowboys", plays: "Arlington, TX" },
    { code: "DEN", name: "Denver Broncos", plays: "Denver, CO" },
    { code: "HOU", name: "Houston Texans", plays: "Houston, TX" },
    { code: "KAN", name: "Kansas City Chiefs", plays: "Kansas City, MO" },
];

window.onload = function () {
    // load the dropdown list
    initTeamsDropdown();
    // other stuff
    console.log("hello");
};
function initTeamsDropdown() {
    // load the dropdown list
    let teams = ["Dallas Cowboys", "Denver Broncos", "Houston Texans", "Kansas City Chiefs" ];
    let code = ["DAL", "DEN", "HOU", "KAN" ];
    const teamsList = document.getElementById("teamsList");
    let length = teams.length;
    for (let i = 0; i < length; i++) {
        // create the option element and set the text and
        // value at the same time
        let theOption = new Option(teams[i], code[i]);
        // append the option as a child of (inside) the 
        // select element
        teamsList.appendChild(theOption);
    }
}