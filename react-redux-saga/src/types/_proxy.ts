export interface PropWithState {
  state: any;
}
export interface PropStore {
  [key: string]: PropWithState;
}

export interface TAnyActionResult {
  type: string;
  payload: any;
};

export type TAnyAction =  (payload: any) => TAnyActionResult;

