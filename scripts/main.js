// let myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello world!';

// // 事件 - 点击事件
// document.querySelector("html").addEventListener("click", function() {
//     alert("别戳我,我怕疼.");
// });

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/run.png') {
        myImage.setAttribute('src', 'images/computer.jpg')
    } else {
        myImage.setAttribute('src', 'images/run.png')
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('请输入你的名字: ');
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = "Mozilla is cool, " + myName;
    }
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}