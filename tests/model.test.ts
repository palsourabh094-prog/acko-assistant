import {test} from 'node:test';
import assert from 'node:assert/strict';
import {calculate} from '../lib/model';
test('reconciles supplied base case without rounding intermediate amounts',()=>{const a=calculate();assert.deepEqual(a.map(y=>y.renewals),[0,8000,30400]);a.forEach((y,i)=>{assert.ok(Math.abs(y.gwp-[20,76,180.8][i])<1e-8);assert.ok(Math.abs(y.nep-[6,28.8,77.04][i])<1e-8);assert.ok(Math.abs(y.contribution-[-1.94,-.31,5.89][i])<1e-8)})});
test('higher claims reduce contribution while premium stays fixed',()=>{const a=calculate(),b=calculate(80,75);b.forEach((y,i)=>{assert.equal(y.gwp,a[i].gwp);assert.ok(y.contribution<a[i].contribution)})});
test('renewals use all previous policies and lower renewal reduces later premium',()=>{const a=calculate(50);assert.equal(a[1].renewals,5000);assert.equal(a[2].renewals,17500);assert.equal(a[0].gwp,20);assert.ok(a[2].gwp<calculate()[2].gwp)});
