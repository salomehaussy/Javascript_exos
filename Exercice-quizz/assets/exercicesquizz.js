//
// lib/lib.js
//
var Question = function (questionObj) {
  this.value = {
    text: "Question",
    answers: [], //donné une valeur par défaut
  };

  this.selectedAnswer = null;
  this.html = null;
  this.questionText = null;
  this.questionAnswers = null;
  this.questionFeedback = null;

  this.value = Object.assign(this.value, questionObj); // l'object en question et qu'on va l'assigner à la valeur par défaut

  this.onQuestionAnswered = ({ detail }) => { //on prend juste le detail de l'évènement 
    this.selectedAnswer = {
      value: detail.answer,
      html: detail.answerHtml,
    };
    this.update();

    document.dispatchEvent(
      new CustomEvent("question-answered", {
        detail: {
          question: this, // dans tous l'objets qui sera envoyer 
          answer: detail.answer,
        },
      })
    );
  };

  this.create = function () {
    this.html = document.createElement("div"); //création d'une div
    this.html.classList.add("question"); //création d'une classe

    this.questionText = document.createElement("h2");
    this.questionText.textContent = this.value.text;

    this.questionAnswers = document.createElement("div");
    this.questionAnswers.classList.add("answers");

    for (let i = 0; i < this.value.answers.length; i++) {
      const ansObj = this.value.answers[i];
      let answer = createAnswer(ansObj);

      answer.onclick = (ev) => {
        // quand on clique sur le bouton
        if (this.selectedAnswer !== null) {
          //quand on clique sur l'évènement, on vérifie que l'objets en question à une réponse sélectionné
          this.selectedAnswer.html.classList.remove("selected"); //remov pour retirer l'évènement sélectionné
        }

        answer.classList.add("selected");

        this.html.dispatchEvent(
          //dispatchEvent, il n'envoit pas directement au document globale de l'application mais juste à la question
          new CustomEvent("question-answered", {
            detail: {
              answer: ansObj,
              answerHtml: answer,
            },
          })
        );
      };

      this.questionAnswers.appendChild(answer);
    } //une boucle for pour remplir directement answer

    this.questionFeedback = document.createElement("div");
    this.questionFeedback.classList.add("question-feedback");

    this.html.appendChild(this.questionText);
    this.html.appendChild(this.questionAnswers);
    this.html.appendChild(this.questionFeedback);

    this.html.addEventListener("question-answered", this.onQuestionAnswered);

    return this.html;
  };

  this.disable = function () { //pour supprimer l'élèment 
    this.html.classList.add("disabled");
    this.html.onclick = (ev) => {
      ev.stopPropagation();
    };

    this.html.removeEventListener("question-answered", this.onQuestionAnswered);

    let answers = this.html.querySelectorAll(".answer");
    for (let i = 0; i < answers.length; i++) {
      let answer = answers[i];
      answer.onclick = null;
    }
  };

  this.remove = function () {
    let children = this.html.querySelectorAll("*");
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      this.html.removeChild(child);
    }

    this.html.removeEventListener("question-answered", this.onQuestionAnswered);

    this.html.parentNode.removeChild(this.html);
    this.html = null;
  };

  this.update = function () {
    let correctFeedback, incorrectFeedback;
    this.html = this.html || document.createElement("div");

    correctFeedback = "Bravo, c'est la bonne réponse";
    incorrectFeedback = "Oh! ce n'est pas correct";

    if (this.selectedAnswer !== null) {
      if (this.selectedAnswer.value.isCorrect) {
        this.html.classList.add("correct");
        this.html.classList.remove("incorrect");
        this.questionFeedback.innerHTML = correctFeedback;
      } else {
        this.html.classList.add("incorrect");
        this.html.classList.remove("correct");
        this.questionFeedback.innerHTML = incorrectFeedback;
      }
    }
  };

  function createAnswer(obj) {
    this.value = {
      text: "Answer",
      isCorrect: false,
    }; //savoir si la réponse est correct ou pas

    this.value = Object.assign(this.value, obj);

    this.html = document.createElement("button");
    this.html.classList.add("answer");

    this.html.textContent = this.value.text;

    return this.html;
  }
};

// Les questions 
let questionsData = [
  {
    text: "Qui est le meilleur ami d'Harry Potter ?",
    answers: [
      {
        text: "Drago Malfoy",
        isCorrect: false,
      },
      {
        text: "Ron Weasley",
        isCorrect: true,
      },
      {
        text: "Neville Londubat",
        isCorrect: false,
      },
    ],
  },
  {
    text: "En quel animal le professeur McGonagall peut-elle se transformer ?",
    answers: [
      {
        text: "Chat",
        isCorrect: true,
      },
      {
        text: "Rat",
        isCorrect: false,
      },
      {
        text: "Chouette",
        isCorrect: false,
      },
      {
        text: "Biche",
        isCorrect: false,
      },
    ],
  },
  {
    text: "Quel est le rêve d'Hagrid ?",
    answers: [
      {
        text: "Avoir une baguette magique",
        isCorrect: false,
      },
      {
        text: "Ne plus être un demi-géant",
        isCorrect: false,
      },
      {
        text: "Posséder un dragon",
        isCorrect: true,
      },
    ],
  },
  {
    text: "Qui est Sirius Black ?",
    answers: [
      {
        text: "Le parrain de Harry",
        isCorrect: true,
      },
      {
        text: "L'oncle d'Harry",
        isCorrect: false,
      },
      {
        text: "Le cousin du père de Harry",
        isCorrect: false,
      },
      {
        text: "Le frère caché de Harry",
        isCorrect: false,
      },
    ],
  },
  {
    text: "Qui est l'héritier de Serpentard ?",
    answers: [
      {
        text: "Tom Jedusor",
        isCorrect: true,
      },
      {
        text: "Drago Malfoy",
        isCorrect: false,
      },
      {
        text: "Harry Potter",
        isCorrect: true,
      },
      {
        text: "Ron Weasley",
        isCorrect: false,
      },
    ],
  },
];

// variables d'instalation 
let questions = [];
let score = 0,
  answeredQuestions = 0;
let appContainer = document.getElementById("questions-container");
let scoreContainer = document.getElementById("score-container");
scoreContainer.innerHTML = `Score: ${score}/${questionsData.length}`;

/**
 * 
 * @param {Array} arr 
 */
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

shuffle(questionsData);

// Création des questions 
for (var i = 0; i < questionsData.length; i++) {
  let question = new Question({
    text: questionsData[i].text,
    answers: questionsData[i].answers,
  });

  appContainer.appendChild(question.create());
  questions.push(question);
}

document.addEventListener("question-answered", ({ detail }) => {
  if (detail.answer.isCorrect) {
    score++;
  }

  answeredQuestions++;
  scoreContainer.innerHTML = `Score: ${score}/${questions.length}`;
  detail.question.disable();

  if (answeredQuestions == questions.length) {
    setTimeout(function () {
      alert(`Bravo \nTon score est de ${score}/${questions.length}`);
    }, 100);
  }
}); //la fonction question, on a donné une valeur

console.log(questions, questionsData);
