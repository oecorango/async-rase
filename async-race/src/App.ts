import './app.scss';
import { clickHandler } from './utils/click-handler/clickHandler';
import { createGaragePage } from './view/garagePage';
import { createWinnersPage } from './view/winnersPage';

async function start(): Promise<void> {
  try {
    await createGaragePage();
    await createWinnersPage();
    await clickHandler();
  } catch (err) {
    console.warn(err);
  }
}

start();
