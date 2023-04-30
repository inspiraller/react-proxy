interface PropTodo {
  date: string;
  time: string;
  title: string;
  value: string;
  category: string[];
}

interface PropsInitial {
  todosList: Array<PropTodo>
};

const initialState: PropsInitial = {
  todosList: []
};

export { initialState };
export type { PropsInitial, PropTodo };
