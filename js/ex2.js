


let temp = document.getElementById("celsius_1").innerText;
let temp1 = document.getElementById("celsius_2").innerText;
let temp2 = document.getElementById("celsius_3").innerText;
let fahr_1 = document.getElementById("fahr_1");
let fahr_2 = document.getElementById("fahr_2");
let fahr_3 = document.getElementById("fahr_3");

let objTemp = {
    [temp]: fahr_1,
    [temp1]: fahr_2,
    [temp2]: fahr_3
};


function convertTemp(objTemp){
    for(let key in objTemp){
        let tempConverted = (9 * key/5) + 32;
        objTemp[key].innerText = tempConverted;
    }
}

convertTemp(objTemp);

//-----------------------------------------------------------------------------------------------

var classification = [ "John Hill" , "Mary Jane", "Gary Vee", "Paricia Mills", "Helen Hall", "Paul Green" ]; 
document.getElementById("best_students").innerText = classification.slice(-3, );

//-----------------------------------------------------------------------------------------------


var course = {
    'title': "Learn to Code in Python 3",
    'categories': ['programming', 'technology', 'python'],
    '5_stars_reviews': 420,
    '4_stars_reviews': 80,
    '3_stars_reviews': 33,
    '2_stars_reviews': 20,
    '1_stars_reviews': 4
};

let objValuesToPlace = {
    "title": "course_title",
    "main_category": "main_category",
    "5_stars+percentage": "reviews_5_stars"
};


function updateFrontEndView(courseList, objValuesToPlace){
    document.getElementById(objValuesToPlace.title).innerText = courseList.title;

    document.getElementById(objValuesToPlace.main_category).innerText = courseList.categories[0];

    let totalReview = parseInt(courseList['5_stars_reviews']) + parseInt(courseList['4_stars_reviews']) + parseInt(courseList['3_stars_reviews']) + parseInt(courseList['2_stars_reviews']) + parseInt(courseList['1_stars_reviews'])
    let fiveStarsReview = parseInt(courseList['5_stars_reviews'])

    let finalFiveStarsReview = (fiveStarsReview * 100) / totalReview;
    document.getElementById(objValuesToPlace["5_stars+percentage"]).innerText = Math.round(finalFiveStarsReview);



}
updateFrontEndView(course, objValuesToPlace);

//-----------------------------------------------------------------------------------------------

var shoppingList = ["Milk", "Butter", "Juice", "Bread", "Beer", "Rice", "Potatoes", "Chocolate"];
let finalItem = shoppingList.pop();
shoppingList.unshift(finalItem);
shoppingList.push("Cheese", "Eggs");
shoppingList.forEach((item) =>{
    console.log(item)
});
