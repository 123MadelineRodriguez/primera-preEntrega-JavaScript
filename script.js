const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');

// mostrar una pregunta y sus opciones 
function showQuestion(question) {
    questionElement.innerText = question.question;
    answerButtons.innerHTML = '';
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        button.addEventListener('click', () => selectAnswer(answer));
        answerButtons.appendChild(button);
    });
}

//  manejar la selección de respuesta
function selectAnswer(answer) {
    if (answer.correct) {
        score++;
    }
    currentQuestionIndex++;
    
    if (currentQuestionIndex < questions.length) {
        showQuestion(questions[currentQuestionIndex]);
    } else {
        showResults();
    }
}

// mostrar los resultados finales
function showResults() {
    questionElement.innerText = '¡Trivia completada!';
    answerButtons.innerHTML = '';
    const resultText = document.createElement('p');
    resultText.innerText = `Puntuación: ${score} de ${questions.length}`;
    answerButtons.appendChild(resultText);
}

// preguntas ordenadas 
let currentQuestionIndex = 0;
const questions = [
    {
        question: "¿Quién pintó la 'Mona Lisa'?",
        answers: [
            { text: "Pablo Picasso", correct: false },
            { text: "Vincent van Gogh", correct: false },
            { text: "Leonardo da Vinci", correct: true },
            { text: "Salvador Dalí", correct: false }
        ]
    },
    {
        question: "¿Cuál es el río más largo del mundo?",
        answers: [
            { text: "Nilo", correct: true },
            { text: "Amazonas", correct: false },
            { text: "Yangtsé", correct: false },
            { text: "Misisipi", correct: false }
        ]
    },
    {
        question: "¿Cuál es el elemento químico más abundante en la Tierra?",
        answers: [
            { text: "Oxígeno", correct: true },
            { text: "Hidrógeno", correct: false },
            { text: "Carbono", correct: false },
            { text: "Hierro", correct: false }
        ]
    },
    {
        question: "¿En qué año ocurrió el primer alunizaje tripulado en la Luna?",
        answers: [
            { text: "1969", correct: true },
            { text: "1975", correct: false },
            { text: "1982", correct: false },
            { text: "1990", correct: false }
        ]
    },
    {
        question: "¿Cuál es el autor de la novela 'Cien años de soledad'?",
        answers: [
            { text: "Gabriel García Márquez", correct: true },
            { text: "Mario Vargas Llosa", correct: false },
            { text: "Julio Cortázar", correct: false },
            { text: "Isabel Allende", correct: false }
        ]
    },
    {
        question: "¿En qué país se encuentra la Gran Muralla China?",
        answers: [
            { text: "China", correct: true },
            { text: "Japón", correct: false },
            { text: "Corea del Sur", correct: false },
            { text: "India", correct: false }
        ]
    },
    {
        question: "¿Cuál es el planeta más grande del sistema solar?",
        answers: [
            { text: "Júpiter", correct: true },
            { text: "Saturno", correct: false },
            { text: "Neptuno", correct: false },
            { text: "Marte", correct: false }
        ]
    },
    {
        question: "¿Cuál es la capital de Australia?",
        answers: [
            { text: "Sídney", correct: false },
            { text: "Melbourne", correct: false },
            { text: "Brisbane", correct: false },
            { text: "Canberra", correct: true }
        ]
    },
    {
        question: "¿En qué año comenzó la Segunda Guerra Mundial?",
        answers: [
            { text: "1939", correct: true },
            { text: "1918", correct: false },
            { text: "1945", correct: false },
            { text: "1941", correct: false }
        ]
    },
    {
        question: "¿Qué famosa pintura tiene una mujer sosteniendo una antorcha y una tabla de la ley?",
        answers: [
            { text: "La última cena", correct: false },
            { text: "El Grito", correct: false },
            { text: "La creación de Adán", correct: false },
            { text: "La libertad guiando al pueblo", correct: true }
        ]
    },
    {
        question: "¿Quién escribió 'Romeo y Julieta'?",
        answers: [
            { text: "Charles Dickens", correct: false },
            { text: "William Shakespeare", correct: true },
            { text: "Jane Austen", correct: false },
            { text: "Mark Twain", correct: false }
        ]
    },
    {
        question: "¿Qué gas es necesario para la fotosíntesis de las plantas?",
        answers: [
            { text: "Dióxido de carbono", correct: true },
            { text: "Oxígeno", correct: false },
            { text: "Nitrógeno", correct: false },
            { text: "Hidrógeno", correct: false }
        ]
    }
];



let score = 0;


showQuestion(questions[currentQuestionIndex]);
