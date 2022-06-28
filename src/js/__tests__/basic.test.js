// import Goblin from '../Goblin';
import { positionsDOM } from '../utils';

// test('Метод должен возвращать число', () => {
//   const result = typeof Goblin.add();
//   expect(result).toBe('number');
// });

test('Объект должен возвращать массив', () => {
  const result = Array.isArray(positionsDOM);
  expect(result).toBe(true);
});

// test('Объект должен возвращать массив соответствующей длины', () => {
//   const result = positionsDOM.length;
//   expect(result).toBe(4);
// });
