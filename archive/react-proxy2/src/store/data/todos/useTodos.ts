import { useEffect, useState } from "react";

import { acCreate, rdcCreate, PayloadCreate } from "./actionAndReduce/create";
import store from "../../../store/store"; // initialise store
import { PropsInitial } from "./_initialState";
import {proxyEventListener} from '../../../util/proxyEventListener';

const useTodos = () => {
  const [todos, setTodos] = useState<PropsInitial>(store.todos.dataState);
  useEffect(() => proxyEventListener("todos", setTodos), [setTodos]);

  return {
    acCreate: (payload: PayloadCreate) => {
      const newTodos = rdcCreate({
        state: store.todos.dataState,
        payload: acCreate(payload).payload,
      });
      // debug: console.log('acCreate() after reduce = new todos', newTodos)
      // @ts-ignore:next-line
      store.todos.dataState = newTodos;
    },
    todos,
  };
};

export default useTodos;
