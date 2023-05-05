import { IInitial } from "@/store/data/counter/_initialState";

export interface SpecificAction <P> {
  type: string;
  payload: P;
}

export type CounterAction = SpecificAction<IInitial>;

export type AnyAction = SpecificAction<any>;


