(function () {
  'use strict';
  var header = document.querySelector('.site-header');
  var hero = document.querySelector('.hero');
  var sectors = document.querySelector('.sectors');
  var composition = document.querySelector('.hero-composition');
  var atlas = document.querySelector('.hero-atlas');
  var welcome = document.querySelector('.hero-welcome');
  function verticalPadding(element) {
    var style = window.getComputedStyle(element);
    return parseFloat(style.paddingTop) + parseFloat(style.paddingBottom);
  }
  function fitHero() {
    var chromeHeight = header.getBoundingClientRect().height + sectors.getBoundingClientRect().height;
    hero.style.setProperty('--opening-chrome-height', chromeHeight + 'px');
    var contentHeight = verticalPadding(hero) + verticalPadding(composition) + atlas.getBoundingClientRect().height + welcome.getBoundingClientRect().height;
    hero.style.setProperty('--opening-content-height', contentHeight + 'px');
  }
  fitHero();
  if ('ResizeObserver' in window) {
    var openingObserver = new ResizeObserver(fitHero);
    openingObserver.observe(header);
    openingObserver.observe(sectors);
    openingObserver.observe(atlas);
    openingObserver.observe(welcome);
  } else {
    window.addEventListener('resize', fitHero);
  }
  var examples = [
    ["I don't get why 1/2 + 1/3 isn't 2/5.", 'Good thing to question. Cut a pizza in halves, then in thirds. Can you add slices of different sizes? What would you change so every slice is the same size?'],
    ['What should we do on Monday?', 'Monday has a math block on fractions, 30 minutes of reading, and a STEM project. I linked each folder. Commit your math notes before lunch so your parent can review them.'],
    ['Summarize the math folder.', "The math folder has six assignments and a fractions reference sheet. Three are marked done. Unit 4 hasn't been started, so that's the next one to open."],
    ["What's the weather today?", 'I checked the live forecast. It cools off after 3 pm, so bring a jacket for the walk. You could plan outdoor science for the morning and check the schedule with your parent.']
  ];
  var log = document.getElementById('log');
  var picks = document.getElementById('picks');
  var timer;
  function addMessage(kind, who, text, icon) {
    var message = document.createElement('div');
    message.className = 'm ' + kind;
    var label = document.createElement('b');
    var mark = document.createElement('img');
    mark.src = 'assets/micro/' + icon;
    mark.alt = '';
    mark.className = 'micro';
    mark.width = 144;
    mark.height = 144;
    label.appendChild(mark);
    label.appendChild(document.createTextNode(who));
    var content = document.createElement('span');
    content.textContent = text;
    message.append(label, content);
    log.appendChild(message);
    return content;
  }
  function ask(index, button, immediate) {
    clearTimeout(timer);
    Array.from(picks.children).forEach(function (choice) {
      choice.setAttribute('aria-pressed', String(choice === button));
    });
    log.setAttribute('aria-busy', 'true');
    log.replaceChildren();
    addMessage('s', 'Learner', '@Vibe ' + examples[index][0], 'm06-pennant.png');
    var reply = addMessage('v', 'Vibe', immediate ? examples[index][1] : 'Thinking…', 'm08-bolt.png');
    if (immediate) {
      log.setAttribute('aria-busy', 'false');
    } else {
      timer = setTimeout(function () {
        reply.textContent = examples[index][1];
        log.setAttribute('aria-busy', 'false');
      }, window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 450);
    }
  }
  examples.forEach(function (example, index) {
    var button = document.createElement('button');
    button.type = 'button';
    button.textContent = example[0];
    button.setAttribute('aria-pressed', 'false');
    button.addEventListener('click', function () { ask(index, button, false); });
    picks.appendChild(button);
  });
  ask(0, picks.children[0], true);

  document.querySelectorAll('[data-copy]').forEach(function (button) {
    var resetTimer;
    button.setAttribute('aria-live', 'polite');
    button.addEventListener('click', async function () {
      clearTimeout(resetTimer);
      try {
        await navigator.clipboard.writeText(button.getAttribute('data-copy'));
        button.textContent = 'Copied';
      } catch (error) {
        var range = document.createRange();
        range.selectNodeContents(button.previousElementSibling);
        var selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
        button.textContent = 'Select and copy';
      }
      resetTimer = setTimeout(function () { button.textContent = 'Copy address'; }, 2000);
    });
  });
})();
