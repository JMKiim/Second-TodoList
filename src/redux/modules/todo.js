const initialState = {
  todos: [
    { id: 1, name: 'React', dec: 'React를 배워봅시다.', isDone: false },
    { id: 2, name: 'Redux', dec: 'Redux를 배워봅시다.', isDone: false },
    {
      id: 3,
      name: 'JavaScript',
      dec: 'JavaScript를 배워봅시다.',
      isDone: true,
    },
    {
      id: 4,
      name: '항해99 완주',
      dec: '12월까지 항해99 완주해봅시다.',
      isDone: false,
    },
    {
      id: 5,
      name: '제목과 내용을 입력하세요',
      dec: '제목과 내용이 빈칸이면 추가하기 버튼이 비활성화됩니다.',
      isDone: true,
    },
  ],
};

const ADD_TODO = 'ADD_TODO';
const DEL_TODO = 'DEL_TODO';
const DONE_TODO = 'DONE_TODO';

export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload, // name, dec
  };
};
export const delTodo = (payload) => {
  return {
    type: DEL_TODO,
    payload, // ID
  };
};
export const doneTodo = (payload) => {
  return {
    type: DONE_TODO,
    payload, // ID
  };
};

const todo = (state = initialState, action) => {
  switch (action.type) {
    case DEL_TODO:
      return {
        todos: state.todos.filter((item) => item.id !== action.payload),
      };
    case DONE_TODO:
      return {
        todos: state.todos.map((item) => {
          if (item.id === action.payload) {
            item.isDone = !item.isDone;
          }
          return item;
        }),
      };
    case ADD_TODO:
      return {
        todos: [
          ...state.todos,
          {
            id: Date.now(),
            name: action.payload.name,
            dec: action.payload.dec,
            isDone: false,
          },
        ],
      };
    default:
      return state;
  }
};

export default todo;
