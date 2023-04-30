export interface IInitial {
  first_name?: string;
  last_name?: string;
  somethingElse?: string;
}

export const initialState: IInitial = {
  first_name: '',
  last_name: '',
  somethingElse: ''
};

export default initialState;
