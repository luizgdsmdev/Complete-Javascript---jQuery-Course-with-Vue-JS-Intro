

let button = document.getElementById("convert");

button.onclick = () => {
    let htmlOutput = document.getElementById("temp_fahr");
    let temp_celsius = document.getElementById("temp_celsius").value;
    temp_celsiusConverted = (9 * temp_celsius/5) + 32;

    htmlOutput.innerText = temp_celsiusConverted
}


let calcWordCup = () => {
    let yearCount = [2022];
    let startIn = 2022;

    do{
        startIn += 4;
        yearCount.push(startIn)
    }while(startIn < 2050)
    
    let anos_copa_list = document.getElementById("anos_copa");
    anos_copa_list.innerHTML = ""; //Clear any previuos HTML isnertion from frontEnd
    yearCount.forEach((WordCupYear) => {
        anos_copa_list.innerHTML += `<li>${WordCupYear}</li>`; //FrontEnd list insertion
    });
}

calcWordCup()