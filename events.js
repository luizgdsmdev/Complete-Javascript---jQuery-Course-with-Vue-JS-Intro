

//Interact with keyBoard events
let keyBoardList = "";
let eventsJsHtml = document.getElementById("events-js");
document.onkeydown = (event) => {
    
    switch (event.key) {
        case "Backspace":
            keyBoardList = keyBoardList.slice(0, -1)
            break;
        
        case "Enter":
            let br = document.createElement("p");
            eventsJsHtml.appendChild(br);
            break;
    
        default:
            keyBoardList += event.key
            break;
    }
    
    
    
    eventsJsHtml.innerText = keyBoardList;
 }


 let teste = "abcd";
teste.slice(0, -1)
console.log(teste)