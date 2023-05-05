export interface PropWithState {
  state: any;
}
export interface PropStore {
  [key: string]: PropWithState;
}

