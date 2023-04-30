import ReactDOM from 'react-dom';
import React from 'react';
import { ErrorOption, Message } from 'react-hook-form';

import { TLitVal } from 'src/types';

export type TDOM = typeof ReactDOM | { render: () => void };

export type TElement = React.ReactChild | string | React.ReactElement[] | React.ReactElement;
//   | (React.ReactChild &
// (boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | undefined))
// | null;

export type TAnyTestFunc = (payload: any) => void;

export type TAnyHook = React.Dispatch<React.SetStateAction<TLitVal | undefined>> | TAnyTestFunc;

export type ReactHookFormSetError = (name: string, error: ErrorOption) => void;
export type ReactFormHookErrors = { [key: string]: ErrorOption };
export type ReactFormHookErrorHasMessage = { message: Message };
