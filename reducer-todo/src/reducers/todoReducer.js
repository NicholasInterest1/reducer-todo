export const initialState = [
  {
    item: "Learn about reducers",
    completed: true,
    id: 3892987589
  },
  {
    item: "Meet MVP on Todo List",
    completed: false,
    id: 1
  }
];

export const todoReducer = (state, action) => {
    switch (action.type) {
      case 'ADD_TODO':
        return [
          ...state,
          {
            item: action.payload,
            completed: false,
            id: Date.now(),
          },
        ];
      case 'TOGGLE_TODO':
        return state.map(todo => {
          return todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo;
        });
      case 'CLEAR_COMPLETED':
        return state.filter(todo => !todo.completed);
      default:
        return state;
    }
  };