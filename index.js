const questionList = { 
    1: {"qnum": "Q1", "question": "약속장소에 가고있는 당신, 약속 5분전, 약속장소 앞에서 평소에 좋아하던 셀럽이! 나는", 
    "ans1":"모든 건 다 행복하려고 하는거다. 내 스타를 향해 달려간다. ", 
    "ans2":"선약이 더 중요하다. 눈물을 머금고 약속장소로 향한다. ", 
    "ans3":"남은 시간과 몰려드는 인파를 계산하고 선택한다."},
    2: {"qnum": "Q2", "question": "1층에 도착한 당신, 엘리베이터를 막 타고 올라가려는데 저 멀리 사람이 뛰어오고 있다. 나는", 
    "ans1":"버튼을 누르고 탈 때까지 기다린다..", 
    "ans2":"빠르게 닫힘버튼을 연타한다. ", 
    "ans3":"엘리베이터 안 다른 사람의 행동을 기다린다."},
    3: {"qnum": "Q3", "question": "팀 회의에서 할 일을 나누기로 했다. 나는", 
    "ans1":"먼저 말한 사람이 하는거지! 나! 나!! 빠르게 하고 싶은 걸 말한다 ", 
    "ans2":"모두의 능력을 고려해서 가장 효율적으로 역할을 분배한다", 
    "ans3":"조용히 있다가, 마지막에 남는 역할을 고른다. "},
    4: {"qnum": "Q4", "question": "회의 5분 전, 한 명이 계속 연락을 받지 않는다. 나는", 
    "ans1":"아니 왜 연락을 안 받는거지? 화가 나서 받을 때까지 연락한다.", 
    "ans2":"적합한 절차를 머릿속으로 생각한다.",  
    "ans3":"마음 속으로 조용히 이 일을 기억한다."},
    5: {"qnum": "Q5", "question": "드디어 시작된 회의 나는", 
    "ans1":"주로 회의를 주도하고 대화를 이끌어나간다.", 
    "ans2":"조용히 필기를 하며 주로 상대방의 이야기를 듣는다. ",  
    "ans3":"나한테 말시키지는 않겠지? 하며 언제 끝날까 머리속으로 생각한다."},
    6: {"qnum": "Q6", "question": "팀원 중 한명이 연인과 이별했다 나는 ", 
    "ans1":"내 과거가 생각나며 마음이 아프다. 팀원을 도와준다. ", 
    "ans2":"업무효울이 떨어진다. 기간 내에 맞추기 위해 팀원을 도와준다.", 
    "ans3":"내 일도 바쁘지만 평판을 관리하기 위해 팀원을 도와준다."},
    7: {"qnum": "Q7", "question": "다른 팀 자료가 책상에 놓여있다. 나는", 
    "ans1":"잃어버린 사람은 얼마나 슬플까, 빨리 가져다 준다.", 
    "ans2":"안에 뭐가 들었는지 궁금하다. 빨리 열어본다.", 
    "ans3":"저 팀만 없으면 우리가 1등이다. 빠르게 챙긴다."},
    8: {"qnum": "Q8", "question": "드디어 최종평가날 나는", 
    "ans1":"드디어 끝났다! 행복하다", 
    "ans2":"마지막까지 긴장을 놓치지 않으면서 자료를 점검한다.", 
    "ans3":"아무 생각이 없다. 아무 생각이 없기 때문이다."},
    9: {"qnum": "Q9", "question": "모든 것이 끝났다. 집으로 돌아가기 전 나는", 
    "ans1":"다들 고생했으니까, 다 같이 회식이다~!", 
    "ans2":"일은 일이고, 이제 집에서 혼자 쉬고 싶다.", 
    "ans3":"팀원들 분위기에 맞춰서 따라간다."},
    10: {"qnum": "Q10", "question": "걸어가던 당신에게 도착한 초대장에는 ○△□가 적혀있다 나는", 
    "ans1":"게임에 참여한다.", 
    "ans2":"게임에 참여한다.", 
    "ans3":"게임에 참여한다."},
}

const startButton = document.querySelector("#startButton");
const startPage = document.querySelector(".startPage");
const questionPage = document.querySelector(".questionPage");
const qnum = document.querySelector("#qnum")
const question = document.querySelector("#question")
const ans1Btn = document.querySelector("#ans1");
const ans2Btn = document.querySelector("#ans2");
const ans3Btn = document.querySelector("#ans3");
let num = 1;


function changeQuestion(event){
    qnum.innerHTML= questionList[num]["qnum"];
    question.innerHTML= questionList[num]["question"];
    ans1.innerHTML=questionList[num]["ans1"];
    ans2.innerHTML=questionList[num]["ans2"];
    ans3.innerHTML=questionList[num]["ans3"];
    num++;
}

function changeDisplay(){
    questionPage.style.display ='flex';
    startPage.style.display='none';
    changeQuestion();
}

function init(){
    startButton.addEventListener("click", changeDisplay);
    ans1Btn.addEventListener("click", changeQuestion);
    ans2Btn.addEventListener("click", changeQuestion);
    ans3Btn.addEventListener("click", changeQuestion);
}

init();

