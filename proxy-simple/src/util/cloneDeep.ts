const isObj = (item: any) => typeof item === 'object' && item !== null && !Array.isArray(item);
/* eslint-disable no-use-before-define */
export const cloneArr = (item: any) =>
  item?.map((inner: any) =>
    inner instanceof Array ? cloneArr(inner) : (isObj(inner) && cloneObj(inner)) || inner
  );

export const cloneObj = (obj: any) =>
  Object.keys(obj).reduce((accum, cur) => {
    const item = obj[cur];
    /* eslint-disable no-param-reassign */
    accum[cur] = item instanceof Array ? cloneArr(item) : (isObj(item) && cloneObj(item)) || item;
    return accum;
  }, {} as any);

export const isEmpty = (obj: any) => {
  let i;
  /* eslint-disable no-restricted-syntax, guard-for-in, no-unreachable-loop */
  for (i in obj) return false;
  return true;
};

export const isEmptyObject = (obj: any) => isObj(obj) && isEmpty(obj);
