let dissapear = (function () {
  let candlesLeft = 10;
  window.addEventListener('keydown', (e) => {
    let candle = document.querySelector('.candle-image');
    if (e.key === 'Enter') {hideCandle(candle)};
  });

  window.addEventListener('click', (e) => {
    let candle = document.querySelector('.candle-image');
    if (e.target === candle) {hideCandle(candle)};
  });

  let hideCandle = (function (candleElement) {
    if (candleElement === document.querySelector('#c9')) {
      document.querySelector('#c10').classList.add('last-stand');
      console.log('last stand time');
    }
    if (candleElement === document.querySelector('#c10')) {
      document.querySelector('.trait').parentElement.removeChild(document.querySelector('.trait'));
      document.querySelector('.moment').parentElement.removeChild(document.querySelector('.moment'));
    }
    candleElement.parentElement.removeChild(candleElement);
    candlesLeft = candlesLeft - 1;
    console.log(candlesLeft);
    declareTruths(candlesLeft);
  })

window.addEventListener('click', e => {
  let traitButton = document.querySelector('.trait');
  let momentButton = document.querySelector('.moment');
  let truthsScreen = document.querySelector('.truth-container');
  if (e.target === traitButton) {flashFire()};
  if (e.target === momentButton) {flashMoment()};
  if (truthsScreen) {useTruth()};
})

  let flashFire = (function () {
    let fire = document.createElement('img');
    fire.classList.add('screen-flash');
    fire.src = 'img/big-fire.gif';
    document.querySelector('body').appendChild(fire);
    setTimeout(function() {
      fire.parentElement.removeChild(fire);
    }, 2000);
  })

  let flashMoment = (function () {
    let fire = document.createElement('img');
    fire.classList.add('screen-flash');
    fire.src = 'img/supernova.gif';
    document.querySelector('body').appendChild(fire);
    setTimeout(function() {
      fire.parentElement.removeChild(fire);
    }, 3000);
  })

  let declareTruths = (function (candlesLeft) {
    let truthContainer = document.createElement('div');
    truthContainer.classList.add('truth-container');
    truthContainer.classList.add('cover-screen');

    let truthTitle = document.createElement('h1');
    truthTitle.innerText = 'These things are true...';

    let truthsLeft = document.createElement('div');
    truthsLeft.classList.add('truths-left');

    let darkTruth = document.createElement('p');
    darkTruth.innerText = 'The world is dark,';
    truthsLeft.appendChild(darkTruth);

    for (let i = 1; i < candlesLeft; i++) {
      let singleTruth = document.createElement('p');
      singleTruth.classList.add('single-truth');
      singleTruth.innerText = i + ')_____________________________________,';
      truthsLeft.appendChild(singleTruth);
    }

    let lastTruth = document.createElement('p');
    lastTruth.innerText = '... and we are alive.';
    truthsLeft.appendChild(lastTruth);

    truthContainer.appendChild(truthTitle);
    truthContainer.appendChild(truthsLeft);
    let body = document.querySelector('body');
    body.appendChild(truthContainer);

    let candlesContainer = document.querySelector('.candles-container');
    candlesContainer.classList.add('dim');
  })

  let useTruth = (function () {
    let singleTruth = document.querySelector('.single-truth');
    if (singleTruth !== null) {
      singleTruth.parentElement.removeChild(singleTruth);
    }
    else {
      let truthContainer = document.querySelector('.truth-container');
      truthContainer.parentElement.removeChild(truthContainer);
      document.querySelector('.candles-container').classList.remove('dim');
    }
  })

})();
