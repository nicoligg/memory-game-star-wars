

document.addEventListener('DOMContentLoaded', () => {
  //list all card options
  const cardArray = [
    {
      name: 'vader',
      img: 'images/vader.png'
    },
    {
      name: 'leia',
      img: 'images/leia.png'
    },
    {
      name: 'chewbacca',
      img: 'images/chewbacca.jpg'
    },
    {
      name: 'r2d2',
      img: 'images/r2d2.png'
    },
    {
      name: 'c3p0',
      img: 'images/c3p0.png'
    },
    {
      name: 'luke',
      img: 'images/luke.png'
    },
    {
      name: 'grogu',
      img: 'images/grogu.png'
    },
    {
      name: 'han-solo',
      img: 'images/han-solo.png'
    },
    {
      name: 'rey',
      img: 'images/rey.png'
    },
    {
      name: 'vader',
      img: 'images/vader.png'
    },
    {
      name: 'leia',
      img: 'images/leia.png'
    },
    {
      name: 'chewbacca',
      img: 'images/chewbacca.jpg'
    },
    {
      name: 'r2d2',
      img: 'images/r2d2.png'
    },
    {
      name: 'c3p0',
      img: 'images/c3p0.png'
    },
    {
      name: 'luke',
      img: 'images/luke.png'
    },
    {
      name: 'grogu',
      img: 'images/grogu.png'
    },
    {
      name: 'han-solo',
      img: 'images/han-solo.png'
    },
    {
      name: 'rey',
      img: 'images/rey.png'
    }
  ]


  cardArray.sort(() => 0.5 - Math.random())

  const grid = document.querySelector('.grid')
  const resultDisplay = document.querySelector('#result')
  let cardsChosen = []
  let cardsChosenId = []
  let cardsWon = []
  let timer;
  let seconds = 0;
  const timerElement = document.getElementById('timer');

  function updateTimer() {
    seconds++;
    timerElement.textContent = seconds + ' segundos';
  }

function startTimer() {
  timer = setInterval(updateTimer, 1000);
}
function stopTimer() {
  clearInterval(timer);
}
const playButton = document.getElementById('playButton');
const backgroundAudio = document.getElementById('background-audio');

playButton.addEventListener('click', () =>
{
  startTimer();
  backgroundAudio.play();

});

const pauseButton = document.getElementById('pauseButton');
let isTimerPaused = false;

pauseButton.addEventListener('click', () => {
  if (isTimerPaused) {
    startTimer();
    backgroundAudio.play();
    isTimerPaused = false;
    pauseButton.textContent = "Pause";
  } else {
    stopTimer();
    backgroundAudio.pause();
    isTimerPaused = true;
    pauseButton.textContent = "Resume";
  }
});


  //create your board
  
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement('img')
      card.setAttribute('src', 'images/carta.png')
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipCard)
      grid.appendChild(card)
    }
  }

  //check for matches
  function checkForMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    

    if(optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute('src', 'images/carta.png')
      cards[optionTwoId].setAttribute('src', 'images/carta.png')
      alert('Você clicou na mesma imagem!')
    }
    else if (cardsChosen[0] === cardsChosen[1]) {
      alert('Você encontrou o par')
      cards[optionOneId].setAttribute('src', 'images/white.png')
      cards[optionTwoId].setAttribute('src', 'images/white.png')
      cards[optionOneId].removeEventListener('click', flipCard)
      cards[optionTwoId].removeEventListener('click', flipCard)
      cardsWon.push(cardsChosen)
    } else {
      cards[optionOneId].setAttribute('src', 'images/carta.png')
      cards[optionTwoId].setAttribute('src', 'images/carta.png')
      alert('Desculpe, tente novamente')
      soundKey = 'E'
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if  (cardsWon.length === cardArray.length/2) {
      resultDisplay.textContent = 'Parabéns! Você encontrou todos!';
      stopTimer()
    }
  }


  //flip your card
  function flipCard() {
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length ===2) {
      setTimeout(checkForMatch, 500)
    }
  }

  
  createBoard()
})
