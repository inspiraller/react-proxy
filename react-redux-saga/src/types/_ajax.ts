import { AxiosRequestConfig } from 'axios';
import { AnyAction } from 'redux';
import { TajaxState } from 'src/store/data/ajaxSpinner/_initialState';
import { PropInterceptError } from 'src/util/getAjax';
import { TobjUrl } from 'src/util/getBlob';

export interface AxiosRequestConfigExtended extends AxiosRequestConfig {
  inputName?: string;
}

export interface PropsAjax extends AnyAction {
  ajax: {
    url: string;
    method?: 'GET' | 'POST';
    headers?: {
      [key: string]: string;
      // 'Content-Type': string;
    };
    data?: any;

    /* dynamic options */
    inputName?: AxiosRequestConfigExtended['inputName']; // on error response - will populate this specific input field
    // objUrlKey?: string; // on file upload - will populate this key
  };
}

export interface PropsAjaxOpt extends AnyAction {
  ajax?: PropsAjax['ajax'];
}

export interface GActionResultAjax<T> extends AnyAction {
  type: string;
  payload?: T | PropsAjaxOpt;
}

export type TFileType = 'image/jpeg' | 'image/png'; // | 'heic' | 'heif' | 'png' | 'jpg' | 'jpeg';

export interface FileState {
  ajaxState?: TajaxState;
  uploadError?: PropInterceptError; // same as ajaxError - fom server but kept separate for img.
  // ajaxError?: PropInterceptError; // will be on main serverError
  fileName?: string;
  fileType?: TFileType;
  objUrl?: TobjUrl;
  blob_id?: string;
}
