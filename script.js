const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')

const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex
let score = 0

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => { 
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    console.log('Game Started')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    score = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) { 
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)  
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    
    if (correct) {
        score++
    }

    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        questionElement.innerText = `🎯 You scored ${score} out of ${shuffledQuestions.length}!`
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
  // SYSTEM SOFTWARE
  {
    question: "What is the main function of an assembler?",
    answers: [
      { text: "A. To translate assembly language into machine code", correct: true },
      { text: "B. To convert machine code into assembly", correct: false },
      { text: "C. To execute assembly programs", correct: false },
      { text: "D. To edit assembly programs", correct: false }
    ]
  },
  {
    question: "Which directive specifies the starting address of a program in SIC assembler?",
    answers: [
      { text: "A. ORG", correct: false },
      { text: "B. END", correct: false },
      { text: "C. START", correct: true },
      { text: "D. BASE", correct: false }
    ]
  },

  // COMPUTER NETWORKS
  {
    question: "Which layer in the OSI model is responsible for routing?",
    answers: [
      { text: "A. Network layer", correct: true },
      { text: "B. Data link layer", correct: false },
      { text: "C. Transport layer", correct: false },
      { text: "D. Session layer", correct: false }
    ]
  },
  {
    question: "Which protocol is used to send emails?",
    answers: [
      { text: "A. HTTP", correct: false },
      { text: "B. SMTP", correct: true },
      { text: "C. FTP", correct: false },
      { text: "D. SNMP", correct: false }
    ]
  },
  {
    question: "What is the default port number for HTTPS?",
    answers: [
      { text: "A. 25", correct: false },
      { text: "B. 80", correct: false },
      { text: "C. 443", correct: true },
      { text: "D. 110", correct: false }
    ]
  },

  // MPMC (Microprocessors & Microcontrollers)
  {
    question: "What is the size of the accumulator in 8085 microprocessor?",
    answers: [
      { text: "A. 4-bit", correct: false },
      { text: "B. 8-bit", correct: true },
      { text: "C. 16-bit", correct: false },
      { text: "D. 32-bit", correct: false }
    ]
  },
  {
    question: "Which register pair is used as the stack pointer in 8085?",
    answers: [
      { text: "A. HL", correct: false },
      { text: "B. BC", correct: false },
      { text: "C. DE", correct: false },
      { text: "D. SP", correct: true }
    ]
  },
  {
    question: "Which signal is used to indicate that the processor is ready to accept data?",
    answers: [
      { text: "A. HOLD", correct: false },
      { text: "B. READY", correct: true },
      { text: "C. ALE", correct: false },
      { text: "D. RD", correct: false }
    ]
  },

  // FLAT (Formal Languages and Automata Theory)
  {
    question: "Which of the following is accepted by a finite automaton?",
    answers: [
      { text: "A. Regular languages", correct: true },
      { text: "B. Context-free languages", correct: false },
      { text: "C. Context-sensitive languages", correct: false },
      { text: "D. Recursive languages", correct: false }
    ]
  },
  {
    question: "Which grammar type represents regular languages?",
    answers: [
      { text: "A. Type 0", correct: false },
      { text: "B. Type 1", correct: false },
      { text: "C. Type 2", correct: false },
      { text: "D. Type 3", correct: true }
    ]
  },
  {
    question: "PDA (Pushdown Automata) is used to recognize which type of languages?",
    answers: [
      { text: "A. Regular", correct: false },
      { text: "B. Context-free", correct: true },
      { text: "C. Context-sensitive", correct: false },
      { text: "D. Recursive", correct: false }
    ]
  },

  // MSS (Management Support Systems / DBMS)
  {
    question: "In database systems, what does ACID stand for?",
    answers: [
      { text: "A. Atomicity, Consistency, Isolation, Durability", correct: true },
      { text: "B. Accuracy, Consistency, Integrity, Dependency", correct: false },
      { text: "C. Atom, Cache, Index, Data", correct: false },
      { text: "D. Automatic, Consistent, Indexed, Durable", correct: false }
    ]
  },
  {
    question: "Which of the following is a DDL command?",
    answers: [
      { text: "A. INSERT", correct: false },
      { text: "B. UPDATE", correct: false },
      { text: "C. CREATE", correct: true },
      { text: "D. SELECT", correct: false }
    ]
  },
  {
    question: "Which normal form removes transitive dependency?",
    answers: [
      { text: "A. 1NF", correct: false },
      { text: "B. 2NF", correct: false },
      { text: "C. 3NF", correct: true },
      { text: "D. BCNF", correct: false }
    ]
  },

  // EXTRA MIXED
  {
    question: "Which device operates at the Data Link Layer of the OSI model?",
    answers: [
      { text: "A. Switch", correct: true },
      { text: "B. Router", correct: false },
      { text: "C. Hub", correct: false },
      { text: "D. Gateway", correct: false }
    ]
  },
  {
    question: "Which instruction is used to halt the 8085 microprocessor?",
    answers: [
      { text: "A. NOP", correct: false },
      { text: "B. HLT", correct: true },
      { text: "C. MOV", correct: false },
      { text: "D. JMP", correct: false }
    ]
  }
];
