import { at } from '../actionTypes';
import {PropTodo, PropsInitial} from '../_initialState'

export type PayloadCreate = PropTodo;

interface AnyAction {
}

export const acCreate = (payload: PayloadCreate) => ({
  type: at.CREATE,
  payload,
});

export interface IActionCreate extends AnyAction {
  payload: PayloadCreate;
}

export type TacCreate = (payload: PayloadCreate) => IActionCreate;

type TrdcCreate = (props: { state: PropsInitial; payload: PayloadCreate }) => PropsInitial;

export const rdcCreate: TrdcCreate= ({ state, payload }) => {
  // debug: console.log('reduce', state, payload)
  const todosList = state.todosList.slice()
  todosList.push(payload);
  return {
    ...state,
    todosList
  };
};
