const keysEn = [
  '`',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '0',
  '-',
  '=',
  'Backspace',
  'Tab',
  'q',
  'w',
  'e',
  'r',
  't',
  'y',
  'u',
  'i',
  'o',
  'p',
  '[',
  ']',
  '/',
  'Delete',
  'CapsLock',
  'a',
  's',
  'd',
  'f',
  'g',
  'h',
  'j',
  'k',
  'l',
  ';',
  "'",
  'Enter',
  'Shift',
  '/',
  'z',
  'x',
  'c',
  'v',
  'b',
  'n',
  'm',
  ',',
  '.',
  '/',
  '↑',
  'Shift',
  'Ctrl',
  'En',
  'Alt',
  ' ',
  'Alt',
  'Ctrl',
  '←',
  '↓',
  '→',
];

const keysRu = [
  'ё',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '0',
  '-',
  '=',
  'Backspace',
  'Tab',
  'й',
  'ц',
  'у',
  'к',
  'е',
  'н',
  'г',
  'ш',
  'щ',
  'з',
  'х',
  'ъ',
  '/',
  'Delete',
  'CapsLock',
  'ф',
  'ы',
  'в',
  'а',
  'п',
  'р',
  'о',
  'л',
  'д',
  'ж',
  'э',
  'Enter',
  'Shift',
  '/',
  'я',
  'ч',
  'с',
  'м',
  'и',
  'т',
  'ь',
  'б',
  'ю',
  '.',
  '↑',
  'Shift',
  'Ctrl',
  'Ru',
  'Alt',
  ' ',
  'Alt',
  'Ctrl',
  '←',
  '↓',
  '→',
];

const box = document.createElement('div');
box.classList.add('box');
document.body.prepend(box);

const text = document.createElement('textarea');
text.classList.add('text');
box.append(text);

const keyboardBox = document.createElement('div');
keyboardBox.classList.add('keyboard-box');
box.append(keyboardBox);

const aboutBox = document.createElement('div');
aboutBox.classList.add('info-box');
document.body.append(aboutBox);
const textAbout1 = document.createElement('p');
const textAbout2 = document.createElement('p');
textAbout1.classList.add('text-1');
textAbout2.classList.add('text-2');
aboutBox.append(textAbout1);
aboutBox.append(textAbout2);

textAbout1.textContent = 'Switch languages: Left Shift + Left Alt';
textAbout2.textContent = 'Made for Windows';

const line1 = document.createElement('div');
const line2 = document.createElement('div');
const line3 = document.createElement('div');
const line4 = document.createElement('div');
const line5 = document.createElement('div');

const rowArray = [line1, line2, line3, line4, line5];
rowArray.forEach((item) => item.classList.add('row'));
rowArray.forEach((item) => keyboardBox.append(item));

const keyArray = [];

let capslockStatus = false;
let shiftStatus = false;

const buildEngKeyboard = () => {
  for (let i = 0; i < keysEn.length; i += 1) {
    keyArray[i] = document.createElement('button');
    keyArray[i].classList.add('keyboard-btn');
    keyArray[i].textContent = keysEn[i];
    keyArray[i].style.width = '60px';
  }
  for (let i = 0; i < keyArray.length; i += 1) {
    if (i < 14) line1.append(keyArray[i]);
    if (i >= 14 && i < 29) line2.append(keyArray[i]);
    if (i >= 29 && i < 42) line3.append(keyArray[i]);
    if (i >= 42 && i < 56) line4.append(keyArray[i]);
    if (i >= 56) line5.append(keyArray[i]);
  }

  const backspaceBtn = keyArray[13];
  backspaceBtn.style.flexBasis = '12%';
  backspaceBtn.style.maxWidth = '100%';

  const tabBtn = keyArray[14];
  tabBtn.style.flexBasis = '8%';
  tabBtn.style.maxWidth = '100%';

  const capslockBtn = keyArray[29];
  capslockBtn.style.flexBasis = '12%';
  capslockBtn.style.maxWidth = '100%';

  const enterBtn = keyArray[41];
  enterBtn.style.flexBasis = '12%';
  enterBtn.style.maxWidth = '100%';

  const leftShiftBtn = keyArray[42];
  leftShiftBtn.style.flexBasis = '12%';
  leftShiftBtn.style.maxWidth = '100%';

  const leftCtrlBtn = keyArray[56];
  leftCtrlBtn.style.flexBasis = '10%';
  leftCtrlBtn.style.maxWidth = '100%';

  const spaceBtn = keyArray[59];
  spaceBtn.style.flexBasis = '40%';
  spaceBtn.style.maxWidth = '100%';

  const rightCtrlBtn = keyArray[61];
  rightCtrlBtn.style.flexBasis = '10%';
  rightCtrlBtn.style.maxWidth = '100%';

  if (localStorage.lang) {
    keyArray[57].textContent = localStorage.getItem('lang');
  } else {
    keyArray[57].textContent = 'En';
  }

  if (keyArray[57].textContent === 'Ru') {
    for (let i = 0; i < keyArray.length; i += 1) {
      keyArray[i].textContent = keysRu[i];
    }
  } else if (keyArray[57].textContent === 'En') {
    for (let i = 0; i < keyArray.length; i += 1) {
      keyArray[i].textContent = keysEn[i];
    }
  }
};

const altShift = {
  shortcutCounter: 0,
  last: 'none',
};

const pressingBtns = (event) => {
  const backspaceBtn = keyArray[13];
  const delBtn = keyArray[28];
  const rightShiftBtn = keyArray[55];
  const leftAltBtn = keyArray[58];
  const tabBtn = keyArray[14];
  const capslockBtn = keyArray[29];
  const enterBtn = keyArray[41];
  const leftShiftBtn = keyArray[42];
  const languageBtn = keyArray[57];
  const alphabet = 'abcdefghijklmnopqrstuvwxyzабвгдеёжзийклмнопрстуфхцчшщъыьэюя';
  const numSymb = '`1234567890-=/[];\'/,./';
  const otherSymb = '~!@#$%^&*()_+|{}:"/<>?';
  const numSymbRu = '1234567890-=//.';
  const otherSymbRu = '!"№;%:?*()_+//?';
  const symbKeysArray = [];
  const symbKeysArrayRu = [];

  for (let i = 0; i < keyArray.length; i += 1) {
    if (keysEn[i].toLowerCase() === String(event.key).toLowerCase()) {
      keyArray[i].click();
      break;
    } else if (keysRu[i].toLowerCase() === String(event.key).toLowerCase()) {
      keyArray[i].click();
      break;
    }
  }

  if (event.key === 'ArrowUp') {
    keyArray[54].click();
  } else if (event.key === 'ArrowLeft') {
    keyArray[62].click();
  } else if (event.key === 'ArrowDown') {
    keyArray[63].click();
  } else if (event.key === 'ArrowRight') {
    keyArray[64].click();
  }

  if (languageBtn.textContent === 'En') {
    for (let i = 0; i < keyArray.length; i += 1) {
      if (numSymb.includes(keyArray[i].textContent)
    || otherSymb.includes(keyArray[i].textContent)) {
        symbKeysArray.push(keyArray[i]);
      }
    }
  }

  if (languageBtn.textContent === 'Ru') {
    for (let i = 0; i < keyArray.length; i += 1) {
      if (numSymbRu.includes(keyArray[i].textContent)
  || otherSymbRu.includes(keyArray[i].textContent)) {
        symbKeysArrayRu.push(keyArray[i]);
      }
    }
  }

  if (keyArray.includes(event.target) && event.target.textContent.length === 1) {
    if (text.selectionStart <= text.value.length) {
      const startSelect = text.selectionStart;
      const finishSelect = text.selectionEnd;
      text.value = text.value.substring(0, startSelect) + event.target.textContent
  + text.value.substring(finishSelect, text.value.length);
      text.focus();
      text.selectionStart = startSelect + 1;
      text.selectionEnd = finishSelect + 1;
    } else {
      text.value += event.target.textContent;
    }
  }

  if (keyArray.includes(event.target) && event.target === backspaceBtn && text.selectionStart
  !== 0 && text.selectionEnd !== 0) {
    const startSelect = text.selectionStart;
    const finishSelect = text.selectionEnd;
    text.value = text.value.substring(0, startSelect - 1)
  + text.value.substring(finishSelect, text.value.length);
    text.focus();
    text.selectionStart = startSelect - 1;
    text.selectionEnd = finishSelect - 1;
  }

  if (keyArray.includes(event.target) && event.target === delBtn && text.selectionStart
  !== text.value.length && text.selectionEnd !== text.value.length) {
    const startSelect = text.selectionStart;
    const finishSelect = text.selectionEnd;
    text.value = text.value.substring(0, startSelect)
  + text.value.substring(finishSelect + 1, text.value.length);
    text.focus();
    text.selectionStart = startSelect;
    text.selectionEnd = finishSelect;
  }

  if (keyArray.includes(event.target) && event.target === enterBtn) {
    const startSelect = text.selectionStart;
    const finishSelect = text.selectionEnd;
    text.value = `${text.value.substring(0, startSelect)}\n${text.value.substring(finishSelect, text.value.length)}`;
    text.focus();
    text.selectionStart = startSelect + 1;
    text.selectionEnd = finishSelect + 1;
  }

  if (keyArray.includes(event.target) && event.target === tabBtn) {
    const startSelect = text.selectionStart;
    const finishSelect = text.selectionEnd;
    text.value = `${text.value.substring(0, startSelect)}\t${text.value.substring(finishSelect, text.value.length)}`;
    text.focus();
    text.selectionStart = startSelect + 1;
    text.selectionEnd = finishSelect + 1;
  }

  if (keyArray.includes(event.target) && event.target === capslockBtn) {
    if (capslockStatus === false) {
      capslockStatus = true;
      for (let i = 0; i < keyArray.length; i += 1) {
        if (alphabet.includes(keyArray[i].textContent.toLowerCase())) {
          keyArray[i].textContent = keyArray[i].textContent.toUpperCase();
        }
      }
    } else if (capslockStatus === true) {
      capslockStatus = false;
      for (let i = 0; i < keyArray.length; i += 1) {
        if (alphabet.includes(keyArray[i].textContent.toLowerCase())) {
          keyArray[i].textContent = keyArray[i].textContent.toLowerCase();
        }
      }
    }
  }

  if (keyArray.includes(event.target) && altShift.last !== 'alt' && languageBtn.textContent === 'En' && (event.target === leftShiftBtn || event.target === rightShiftBtn)) {
    if (shiftStatus === false) {
      shiftStatus = true;
      for (let i = 0; i < symbKeysArray.length; i += 1) {
        symbKeysArray[i].textContent = otherSymb[i];
      }
      for (let i = 0; i < keyArray.length; i += 1) {
        if (alphabet.includes(keyArray[i].textContent.toLowerCase())) {
          keyArray[i].textContent = keyArray[i].textContent.toUpperCase();
        }
      }
    } else if (shiftStatus === true) {
      shiftStatus = false;

      for (let i = 0; i < symbKeysArray.length; i += 1) {
        symbKeysArray[i].textContent = numSymb[i];
      }
      for (let i = 0; i < keyArray.length; i += 1) {
        if (alphabet.includes(keyArray[i].textContent.toLowerCase())) {
          keyArray[i].textContent = keyArray[i].textContent.toLowerCase();
        }
      }
    }
  }

  if (keyArray.includes(event.target) && languageBtn.textContent === 'Ru' && altShift.last !== 'alt' && (event.target === leftShiftBtn || event.target === rightShiftBtn)) {
    if (shiftStatus === false) {
      shiftStatus = true;
      for (let i = 0; i < symbKeysArrayRu.length; i += 1) {
        symbKeysArrayRu[i].textContent = otherSymbRu[i];
      }
      for (let i = 0; i < keyArray.length; i += 1) {
        if (alphabet.includes(keyArray[i].textContent.toLowerCase())) {
          keyArray[i].textContent = keyArray[i].textContent.toUpperCase();
        }
      }
    } else if (shiftStatus === true) {
      shiftStatus = false;
      for (let i = 0; i < symbKeysArrayRu.length; i += 1) {
        symbKeysArrayRu[i].textContent = numSymbRu[i];
      }
      for (let i = 0; i < keyArray.length; i += 1) {
        if (alphabet.includes(keyArray[i].textContent.toLowerCase())) {
          keyArray[i].textContent = keyArray[i].textContent.toLowerCase();
        }
      }
    }
  }

  if (keyArray.includes(event.target) && event.target === leftShiftBtn && (altShift.shortcutCounter === 0 || altShift.last === 'alt')) {
    altShift.shortcutCounter += 1;
    altShift.last = 'shift';
  }

  if (keyArray.includes(event.target) && event.target === leftAltBtn && (altShift.shortcutCounter === 0 || altShift.last === 'shift')) {
    altShift.shortcutCounter += 1;
    altShift.last = 'alt';
  }

  if ((keyArray.includes(event.target) && (altShift.shortcutCounter === 2))) {
    if (languageBtn.textContent === 'En') {
      for (let i = 0; i < keyArray.length; i += 1) {
        keyArray[i].textContent = keysRu[i];
      }
    } else if (languageBtn.textContent === 'Ru') {
      for (let i = 0; i < keyArray.length; i += 1) {
        keyArray[i].textContent = keysEn[i];
      }
    }
  }

  if (keyArray.includes(event.target) && event.target
  !== leftShiftBtn && event.target !== leftAltBtn) {
    altShift.shortcutCounter = 0;
    altShift.last = 'none';
  }
  if (keyArray.includes(event.target) && event.target
  === leftShiftBtn && altShift.shortcutCounter === 2) {
    altShift.shortcutCounter = 0;
    altShift.last = 'none';
  }

  if (keyArray.includes(event.target) && event.target !== leftShiftBtn && event.target !== rightShiftBtn && shiftStatus === true && languageBtn.textContent === 'En') {
    shiftStatus = false;
    altShift.shortcutCounter = 0;
    altShift.last = 'none';
    for (let i = 0; i < symbKeysArray.length; i += 1) {
      symbKeysArray[i].textContent = numSymb[i];
    }
  }
  if (keyArray.includes(event.target) && shiftStatus === false && capslockStatus === false && languageBtn.textContent === 'En') {
    for (let i = 0; i < keyArray.length; i += 1) {
      if (alphabet.includes(keyArray[i].textContent.toLowerCase())) {
        keyArray[i].textContent = keyArray[i].textContent.toLowerCase();
      }
    }
  }

  if (keyArray.includes(event.target) && event.target !== leftShiftBtn && event.target !== rightShiftBtn && shiftStatus === true && languageBtn.textContent === 'Ru') {
    shiftStatus = false;
    altShift.shortcutCounter = 0;
    altShift.last = 'none';
    for (let i = 0; i < symbKeysArrayRu.length; i += 1) {
      symbKeysArrayRu[i].textContent = numSymbRu[i];
    }
  }
  if (keyArray.includes(event.target) && shiftStatus === false && capslockStatus === false && languageBtn.textContent === 'Ru') {
    for (let i = 0; i < keyArray.length; i += 1) {
      if (alphabet.includes(keyArray[i].textContent.toLowerCase())) {
        keyArray[i].textContent = keyArray[i].textContent.toLowerCase();
      }
    }
  }
  localStorage.setItem('lang', keyArray[57].textContent);
  const button = event.target;
  if (keyArray.includes(event.target)) {
    button.style.background = 'gray';
    setTimeout(() => {
      button.style.background = 'black';
    }, (0.1 * 1000));
  }
};
const textBlock = (e) => {
  e.preventDefault();
};

keyboardBox.addEventListener('click', pressingBtns);
document.addEventListener('keydown', pressingBtns);
document.addEventListener('keydown', textBlock);

buildEngKeyboard();
