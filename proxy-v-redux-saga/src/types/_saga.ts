import { StrictEffect } from 'redux-saga/effects';

export type TGenGeneric<Prop> = Generator<StrictEffect, void, Prop>;
export type TGenGenericWithYieldSelect<Prop, YieldProp> = Generator<YieldProp, void, Prop>;
export type TGenGenericResult<Prop, Result> = Generator<StrictEffect, Result, Prop>;
