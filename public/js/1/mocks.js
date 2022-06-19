import uuidv4 from './utils/uuid.js';

const data = {
  [uuidv4()]: {
    name: 'some task 1',
    isDone: true
  },
  [uuidv4()]: {
    name: 'some task 2',
    isDone: false
  }
};

export default data;
