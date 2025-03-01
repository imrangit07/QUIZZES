const Questions = [
    {
        que: 'Which of the following is a markup language?',
        'a': 'HTML',
        'b': 'CSS',
        'c': 'JavaScript',
        'd': 'All above',
        correct: 'a'
    },
    {
        que: 'What does HTML stand for?',
        a: 'Hyperlinks and Text Markup Language',
        b: 'Home Tool Markup Language',
        c: 'Hyper Text Markup Language',
        d: 'Hyper Text Machine Language',
        correct: 'c'
    },
    {
        que: 'Which tag is used to create a hyperlink in HTML?',
        a: '<link>',
        b: '<a>',
        c: '<href>',
        d: '<hyperlink>',
        correct: 'b'
    },
    {
        que: 'Which tag is used to define an unordered list in HTML?',
        a: '<ol>',
        b: '<ul>',
        c: '<li>',
        d: '<list>',
        correct: 'b'
    },
    {
        que: 'Which attribute is used to define inline styles in HTML?',
        a: 'class',
        b: 'style',
        c: 'id',
        d: 'font',
        correct: 'b'
    },
    {
        que: 'Which tag is used to insert an image in HTML?',
        a: '<img>',
        b: '<image>',
        c: '<picture>',
        d: '<src>',
        correct: 'a'
    },
    {
        que: 'Which tag is used to define a table row in HTML?',
        a: '<tr>',
        b: '<td>',
        c: '<th>',
        d: '<table>',
        correct: 'a'
    },
    {
        que: 'Which tag is used to define the header of an HTML document?',
        a: '<head>',
        b: '<header>',
        c: '<h1>',
        d: '<title>',
        correct: 'a'
    },
    {
        que: 'Which tag is used to define a paragraph in HTML?',
        a: '<p>',
        b: '<para>',
        c: '<paragraph>',
        d: '<text>',
        correct: 'a'
    },
    {
        que: 'Which tag is used to define the footer of an HTML document?',
        a: '<footer>',
        b: '<bottom>',
        c: '<foot>',
        d: '<end>',
        correct: 'a'
    }
];

let total = Questions.length;
let selectedAnswers = new Array(total).fill(null);
let answeredQue = new Array(total).fill(false);
let index = 0;
let rightAns = 0;
let wrongAns = 0;
//   console.log(total);

let quizQustions = document.querySelector('#quiz-qustions');
let allOptions = document.querySelectorAll('.options')

//This is for Loading Questions
const loadQuestion = () => {
    if (index === (total - 1)) {
        const nextBtn = document.querySelector(".btn");
        nextBtn.innerText = "Submit";
    }

    if (index === total) {
        endQuiz();
        return;
    }
    Reset();
    // console.log(`${typeof index} =  ${typeof total}`);

    const data = Questions[index];
    // console.log(data);

    quizQustions.innerText = `${index + 1}: ${data.que}`;
    allOptions[0].nextElementSibling.innerText = data.a;
    allOptions[1].nextElementSibling.innerText = data.b;
    allOptions[2].nextElementSibling.innerText = data.c;
    allOptions[3].nextElementSibling.innerText = data.d;


    if (selectedAnswers[index] !== null) {
        allOptions[selectedAnswers[index]].checked = true;
    }
}


//This is for calculating answers

const getAnswer = () => {

    let answer;
    allOptions.forEach((input, idx) => {
        if (input.checked) {
            answer = input.value;
            selectedAnswers[index] = idx;
            console.log(idx);

            // console.log(answer);
        }
    })
    return answer;
}


//This is for next or submitQuiz

const submitQuiz = () => {

    const data = Questions[index];
    const cheakAns = getAnswer();
    {
        // console.log(cheakAns + '=' + data.correct);

        if (!answeredQue[index]) {
            if (cheakAns == data.correct) {
                rightAns++;

            } else {
                wrongAns++;
            }
            answeredQue[index] = true;
        }


        index++;
        loadQuestion();
    }

}

//This is for Previous button
const Previous = () => {
    if (index === 0) {
        alert("No More Previous Qustions");
        return;
    }
    index--;
    loadQuestion();
}
const Reset = () => {
    allOptions.forEach((input) => {
        input.checked = false;
    })
}


//This is for End Result after submitQuize
const endQuiz = () => {
    document.querySelector('.quizzes-box').innerHTML = `
    <div>
    <h1 style="color: var(--dot-color); text-shadow:1px 1px 2px #fff; ">Your Answer Has Been Submitted</h1><br>
    <h2 style="color:greenyellow; text-shadow:1px 1px 2px #fff;">Marks : ${rightAns} </h2><br>
    <h2 style="color:orange; text-shadow:1px 1px 2px #fff;">Out of : ${total} </h2>
    </div>`

    // console.log(`called endQuize ${rightAns} = ${total}`);

}
loadQuestion();
