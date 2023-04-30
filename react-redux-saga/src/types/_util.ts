export type TKeyString = {
  [index: string]: string;
};

export type TFuncStr = (str: string, str2?: string, str3?: string) => string;

export type TLitVal = string | number | boolean | undefined;

export type TJsonVal = string | number | boolean | string[] | TJson | TJson[];
export interface TJson {
  [key: string]: TJsonVal;
}

export type TTimer = NodeJS.Timeout | number;
