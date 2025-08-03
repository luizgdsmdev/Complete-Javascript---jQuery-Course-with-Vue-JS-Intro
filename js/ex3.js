
// //List of Exercises # 3

// //#1
// let button = document.getElementById("convert");
// button.onclick = () => {
//     let htmlOutput = document.getElementById("temp_fahr");
//     let temp_celsius = document.getElementById("temp_celsius").value;
//     temp_celsiusConverted = (9 * temp_celsius/5) + 32;

//     htmlOutput.innerText = temp_celsiusConverted
// }

// //#2
// let calcWordCup = () => {
//     let yearCount = [2022];
//     let startIn = 2022;

//     do{
//         startIn += 4;
//         yearCount.push(startIn)
//     }while(startIn < 2050)
    
//     let anos_copa_list = document.getElementById("anos_copa");
//     anos_copa_list.innerHTML = ""; //Clear any previuos HTML isnertion from frontEnd
//     yearCount.forEach((WordCupYear) => {
//         anos_copa_list.innerHTML += `<li>${WordCupYear}</li>`; //FrontEnd list insertion
//     });
// }
// calcWordCup();


// //#3
// document.getElementById("calculate").onclick = () =>{
//     let grade1 = parseFloat(document.getElementById("grade1").value);
//     let grade2 = parseFloat(document.getElementById("grade2").value);
//     let absences = parseFloat(document.getElementById("absences").value);


//     let valGrade = false;
//     let valAbs = false;
//     let message = "FAIL";
    
//     (grade1 + grade2) >= 6.5 ? valGrade = true : "";
//     absences >= (0.7 * 20) ? valAbs = true : "";
//     valGrade && valAbs ? message = "APPROVED": "";

//     let htmlMessage = `
//         <p>Student result: <b>${message}</b></p> 
//         <ul>
//             <li>Total grade: <b>${(grade1 + grade2) > 0 ? (grade1 + grade2) : 0}</b></li>
//             <li>Min-required: <span style="text-decoration:underline">6.5</span></li> 
//         </ul>
//         <ul>
//             <li>Total grade: Absences: <b>${absences > 0 ? absences : 0}</b></li>
//             <li>Min-required: <span style="text-decoration:underline">${(0.7 * 20)}</span></li> 
//         </ul>
//     `
//     document.getElementById("result").innerHTML = htmlMessage
// }


//#4
var sales = [

        {
            'student': 'Jason Gomes',
            'date': '10/06/2018',
            'amount': 34.99,
            'refundRequested': null
            
        },

        {
            'student': 'Carlos Blue',
            'date': '10/06/2018',
            'amount': 29.99,
            'refundRequested': null
            
        },

        {
            'student': 'Martin Heyes',
            'date': '11/06/2018',
            'amount': 39.99,
            'refundRequested': '13/06/2018'
            
        },

        {
            'student': 'Isabella Hopkins',
            'date': '11/06/2018',
            'amount': 29.99,
            'refundRequested': null
            
        },

        {
            'student': 'Andrew Walt',
            'date': '12/06/2018',
            'amount': 34.99,
            'refundRequested': null
            
        }
    
    ];

let course_salesTR = document.getElementById("course_sales");
course_salesTR.innerHTML = "";
let TotalSales = 0;
sales.forEach((saleinfo) => {
    TotalSales += saleinfo.amount;
    if(!saleinfo.refundRequested){
        course_salesTR.innerHTML += `
            <tr>
                <td>${saleinfo.student}</td>
                <td>${saleinfo.date}</td>
                <td>${saleinfo.amount}</td>
            </tr>
        `;
    }
});

document.getElementById("total_sold").innerText = TotalSales.toFixed(2);
