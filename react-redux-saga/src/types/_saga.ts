import { StrictEffect } from 'redux-saga/effects';

/*
@types/redux-saga provides a StrictEffect type that can be used in generator types to allow nothing but effects in yields:
Copy 
const wiiiiiiiiii = () => "hihihihihi";
function* thisIsAWrongSaga(foo: string): Generator<StrictEffect, number, any> {
  yield wiiiiiiiiii();
  // Type 'string' is not assignable to type 'StrictEffect<any, any>'.
  return 0;
}
*/
export type TGenGeneric<Prop> = Generator<StrictEffect, void, Prop>;
export type TGenGenericWithYieldSelect<Prop, YieldProp> = Generator<YieldProp, void, Prop>;
export type TGenGenericResult<Prop, Result> = Generator<StrictEffect, Result, Prop>;
