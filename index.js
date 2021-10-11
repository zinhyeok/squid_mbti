const startButton = document.querySelector("#startButton");
const startPage = document.querySelector(".startPage");
const questionPage = document.querySelector(".questionPage");



startButton.onclick = function displayChange(){
    console.log("작동");
    questionPage.style.display ='flex';
    startPage.style.display='none';
}

