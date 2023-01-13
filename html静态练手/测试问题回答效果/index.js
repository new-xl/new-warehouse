const quizDatas = [
    {
        question: "How did Harry Potter's parents die?",
        a: "Killed by a Hyppogriff",
        b: "Killed in a broom accident",
        c: "Killed by the dark lord",
        d: "Shot by a scared muggle",
        correct: "c",
    },
    {
        question: "What position does Harry play on his Quidditch team?",
        a: "Keeper",
        b: "Seeker",
        c: "Beater",
        d: "Chaser",
        correct: "b",
    },
    {
        question: "Why doesn't Draco like Harry?",
        a: "He did not share his food with him",
        b: "He did not accept his handshake",
        c: "He mocked him and his father",
        d: "He tripped over him",
        correct: "b",
    },
    {
        question: "What year did Harry defeat the Basilisk?",
        a: "First",
        b: "Second",
        c: "Third",
        d: "Forth",
        correct: "b",
    },
    {
        question: "Which houses did the sorting hat consider putting Harry in?",
        a: "Hufflepuff and Gryffindor",
        b: "Slytherin and Hufflepuff",
        c: "Gryffindor and Slytherin",
        d: "Gryffindor and Ravenclaw",
        correct: "c",
    },
    {
        question: "In the first book, what creature was released in the girl's lavatory?",
        a: "Dragon",
        b: "Three-headed dog",
        c: "Basilisk",
        d: "Troll",
        correct: "d",
    },
    {
        question: "What was Luna Lovegood's Patronus?",
        a: "A bunny",
        b: "A cat",
        c: "A badger",
        d: "A fox",
        correct: "a",
    },
    {
        question: "What was Lord Voldemort's original name?",
        a: "Volten Riddle",
        b: "Timothy Riddle",
        c: "Vixen Riddle",
        d: "Tom Riddle",
        correct: "d",
    },
    {
        question: "What did Hermione use to get to all her classes in the third book?",
        a: "Time Turner",
        b: "Time Mover",
        c: "Time Machine",
        d: "Time Teaser",
        correct: "a",
    },
    {
        question: "What sacrifice did Pettigrew use to bring Voldemort to human form?",
        a: "His hand",
        b: "His eye",
        c: "His foot",
        d: "His ear",
        correct: "a",
    },
];


const problem_text = document.querySelector('.problem_text')
const option = document.querySelector('.option')
const but = document.querySelector('.but')
const but_father = document.querySelector('.but_father')
let num = 0

function option_fill() {
    option.innerHTML = ''
    let quiz_data = quizDatas[num]
    problem_text.innerHTML = quiz_data.question
    let arrs = []
    for (const key in quiz_data) {
        if (key == 'a' ||key == 'b' ||key =='c' ||key =='d') {
            arrs.push({[key]:quiz_data[key]})
        }
    }
    let Boolean = ''
    arrs.forEach((arr,index)=>{
        if (index == 0) {
            Boolean = 'checked'
        }else{
            Boolean = ''
        }
        console.log(Boolean);
        const single = document.createElement('div')
        single.classList.add('single')
        single.innerHTML =`
        <input type="radio" id="${Object.keys(arr)[0]}" name="select" ${Boolean} >
        <label for="${Object.keys(arr)[0]}">${Object.values(arr)}</label>
        `
        option.appendChild(single)
    })
}

option_fill()

but.addEventListener('click',function () {
    if (num == quizDatas.length -1 ) {
        problem_text.innerHTML = ''
        option.innerHTML = ''
        option.innerHTML = `
        <h3>已经完成全部问题回答</h3>
        `
        but_father.innerHTML = ''
    }else{
        num++
        option_fill()
    }
})