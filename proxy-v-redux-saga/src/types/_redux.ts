import { AnyAction } from "redux";

export interface SpecificAction <P> extends AnyAction {
  type: string;
  payload: P;
}


