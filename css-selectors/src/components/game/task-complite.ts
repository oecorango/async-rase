import { DataStorage } from '../classes/Storage';
import { createHtmlEditor } from '../view/create-next_page';
import { removeElementPrevLevel } from '../view/remove-element';
import { storageAnswers } from './answers';
import { clearInputValue } from './clear-input';
import { createLevel } from './tasks';

export function corretAnswer(inputValue: string): void {
  const currentLevel = DataStorage.getValue('level');
  const nextLevel = (): string =>
    Number(currentLevel) < 9 ? `0${Number(currentLevel) + 1}` : (Number(currentLevel) + 1).toString();

  if (currentLevel) {
    const num = Number(currentLevel);
    const answer = storageAnswers[num - 1];

    if (inputValue !== answer) {
      const editorGame = document.querySelector('.editor');
      editorGame?.classList.add('shake');
      setTimeout(() => {
        editorGame?.classList.remove('shake');
      }, 500);
    }

    if (inputValue === answer) {
      const next = nextLevel();
      clearInputValue();

      if (Number(next) > 10) {
        console.log('You win!');
      } else {
        removeElementPrevLevel();
        createHtmlEditor(nextLevel());
        DataStorage.setValue('level', nextLevel());
        createLevel(nextLevel());
      }
    }
  }
}
