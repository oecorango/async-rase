import { createCarParams } from '../api/create-one-car';
import { createOneCar } from './create-cars';
import { clickPrevNextBtn } from './open-next-prev-page';
import { clickRemoveCarBtn } from './remove-car';
import { clickSelectCarBtn } from './rename-car';
import { increaseNumberCarsInGarage, onOffNextButton, onOffPrevButton } from './utils';

function clickGeneralBtn(): void {
  const buttons: NodeListOf<HTMLButtonElement> = document.querySelectorAll('[data-name="general"]');
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const section = document.querySelectorAll('section');
      section.forEach((e) => e.classList.toggle('hidden'));
      // eslint-disable-next-line no-return-assign, no-param-reassign
      buttons.forEach((btn) => (btn.disabled ? (btn.disabled = false) : (btn.disabled = true)));
    });
  });
}

function clickCreateCarBtn(): void {
  const button: HTMLButtonElement | null = document.querySelector('[data-name="create"]');
  if (button) {
    button.addEventListener('click', async () => {
      createCarParams().then((car) => createOneCar(car));
      increaseNumberCarsInGarage();
      onOffPrevButton();
      await onOffNextButton();
    });
  }
}

export async function clickHandler(): Promise<void> {
  clickGeneralBtn();
  clickCreateCarBtn();
  clickPrevNextBtn();
  clickRemoveCarBtn();
  clickSelectCarBtn();
}
