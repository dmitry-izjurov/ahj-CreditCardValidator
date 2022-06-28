import Inspector from "./Inspector";
import { getNumberCard } from './utils';

document.querySelector('.form').addEventListener('submit', (e) => {
  e.preventDefault();
  let numberCard = getNumberCard();
  const card = new Inspector(numberCard);
  card.clearList();
  card.checkCard();
});
