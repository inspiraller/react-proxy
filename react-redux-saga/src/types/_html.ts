export type Toptions = Array<{ name: string; value: string | number | boolean }>;
export type Toptgroups = { [key: string]: Toptions };
export interface MicroData {
  itemScope?: boolean;
  itemProp?: string;
  itemType?: string;
  itemID?: string;
  itemRef?: string;
}

export type StyElem = keyof JSX.IntrinsicElements;
export interface Attr extends JSX.IntrinsicAttributes {
  id?: string;

  // style?: {
  //   [key: string]: string | number;
  // };
  style?: React.CSSProperties;

  itemScope?: boolean;
  itemProp?: string;
  itemType?: string;
  itemID?: string;
  itemRef?: string;
  role?: string;

  /* svg */
  preserveAspectRatio?: string;

  /* img */
  width?: string;
  height?: string;
  src?: string;
  alt?: string;

  /* time */
  dateTime?: string;

  /*href */
  href?: string;
  to?: string;

  /* button */
  type?: string;

  /* input */
  name?: string;
  defaultValue?: any;
  required?: boolean;
  placeholder?: string;
  value?: string;

  readonly?: boolean;

  // onClick?: () => void;
  // type ThandleClickClose = (evt: React.FormEvent<HTMLButtonElement>) => void;
}
