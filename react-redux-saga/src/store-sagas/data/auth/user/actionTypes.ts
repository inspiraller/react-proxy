export type TAt = {
  [key: string]: string;
};

const at: TAt = {
  UPDATE_USER: '@user/UPDATE_USER',
  UPDATE_SOMETHING_ELSE: '@user/UPDATE_SOMETHING_ELSE',
};

export { at };
export default at;
