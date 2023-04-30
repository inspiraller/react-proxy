// inputs  events
export type Tevt = React.FormEvent<HTMLInputElement>;
export type TevtButton = React.FormEvent<HTMLButtonElement>;
export type TevtForm = React.FormEvent<HTMLFormElement>;

export type TevtFile = React.ChangeEvent<HTMLInputElement>;

export type TInputValTypes = string | number;
export type ThandleInputChange = (name: string, val: TInputValTypes, evt?: Tevt) => void;
export type ThandleLinkClick = (evt: React.MouseEvent<HTMLAnchorElement>) => void;
export type ThandleVal = (val: string) => void;
export type ThandleSelectFile = (evt: TevtFile) => void;
export type ThandleAnyClick = (evt: React.MouseEvent<HTMLElement>) => void;
