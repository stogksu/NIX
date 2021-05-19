// task 1

const item = document.querySelector('.item-1');
const stop = document.querySelector('.stop');
let box = item.getBoundingClientRect();
let leftCoord = box.left;
let widthItem = box.width;
let intervalID;


item.addEventListener('click', () => {
    intervalID = setInterval(moveItem, 10);
});

stop.addEventListener('click', () => {
    clearInterval(intervalID);
});

function moveItem(){
    if(window.innerWidth - leftCoord != widthItem) {
        ++leftCoord;
        item.style.left = leftCoord + 'px';
    } else {
        leftCoord = 0;
    }
    
}

//task 2

const link = document.querySelector('.link');
const reset = document.querySelector('.reset');
const contentItem = document.querySelector('.content');
const textItem = document.querySelector('.text');

link.addEventListener('click', showContent);

reset.addEventListener('click', () => {
    contentItem.style.display = "block";
    textItem.style.display = "none";
    link.removeEventListener('click', showContent);
});

function showContent (e) {
    e.preventDefault();
    if (contentItem.style.display === "none") {
        contentItem.style.display = "block";
        textItem.style.display = "block";
    } else {
        contentItem.style.display = "none";
    }

}

//task 3

function getDay(year, month, day){
    let date = new Date(year,month,day);
    let dayWeek = date.getDay();

    (dayWeek == 0) ? console.log(7) : console.log(dayWeek);
}
     
getDay(2021,04,23);

// task 4
let task_list = document.querySelector('.task_list');
let message = prompt('Введите любую фразу');
let res = message.match(/[аa]/gi);

let list = message.split(' ');
for (let i = 0; i< list.length; i++) {
    let li = document.createElement('li');
    if (i == 0) {
        li.innerHTML = list[i].toUpperCase();
    } else if (i == list.length - 1 || i == list.length - 2) {
        li.innerHTML = list[i].toLowerCase();
    } else {
        li.innerHTML = list[i];
    }
    task_list.append(li);
}

alert(`Количество букв а = ${res.length}`);