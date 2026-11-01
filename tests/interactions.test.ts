import {test} from 'node:test';
import assert from 'node:assert/strict';
import {createRequire} from 'node:module';
import React from 'react';
const require=createRequire(import.meta.url);
const {JSDOM}=require('jsdom');
const dom=new JSDOM('<!doctype html><html><body></body></html>',{url:'http://localhost/'});
Object.assign(globalThis,{window:dom.window,document:dom.window.document,HTMLElement:dom.window.HTMLElement,KeyboardEvent:dom.window.KeyboardEvent,Event:dom.window.Event});
Object.defineProperty(globalThis,'navigator',{value:dom.window.navigator,configurable:true});
const {render,fireEvent,cleanup}=await import('@testing-library/react');
const {Journey}=await import('../components/journey');

test('journey keeps answers, shows the review, handles each decision and restarts',()=>{
  const view=render(React.createElement(Journey));
  assert.ok(view.getByText('Proposed concept screen'));
  fireEvent.click(view.getByText('What should I check?'));
  assert.ok(view.getByText(/Ask your employer when your cover ends/));
  fireEvent.click(view.getByRole('button',{name:'Continue to my needs'}));
  const next=view.getByRole('button',{name:'Continue to my options'}) as HTMLButtonElement;
  assert.equal(next.disabled,true);
  fireEvent.click(view.getByLabelText('Spouse'));
  fireEvent.change(view.getByLabelText('Do you already have personal health insurance?'),{target:{value:'Yes'}});
  fireEvent.change(view.getByLabelText('What prompted this review?'),{target:{value:'Family change'}});
  assert.ok(view.getByText(/Aditi, Spouse/));
  fireEvent.click(view.getByLabelText(/I agree to use these fictional answers/));
  assert.equal(next.disabled,false);
  fireEvent.click(next);
  fireEvent.click(view.getByRole('button',{name:'Back'}));
  assert.equal((view.getByLabelText('Spouse') as HTMLInputElement).checked,true);
  assert.equal((view.getByLabelText('What prompted this review?') as HTMLSelectElement).value,'Family change');
  fireEvent.click(view.getByRole('button',{name:'Continue to my options'}));
  fireEvent.click(view.getByLabelText('Price'));
  fireEvent.click(view.getByRole('button',{name:'Continue to my decision'}));
  assert.ok(view.getByText('Aditi, Spouse'));
  assert.ok(view.getByText('Personal cover exists'));
  assert.ok(view.getByText(/Who is covered, Waiting periods, Price/));
  for(const [label,result] of [['Explore a personal policy',/Your next-step checklist is ready/],['Request guidance',/Your guidance request is simulated/],['My existing cover may be sufficient',/A considered decision is a good outcome/]] as const){
    fireEvent.click(view.getByRole('button',{name:new RegExp(label)}));
    assert.ok(view.getByRole('status').textContent?.match(result));
    fireEvent.click(view.getByRole('button',{name:'Review other decisions'}));
  }
  fireEvent.click(view.getByRole('button',{name:'Restart Aditi’s journey'}));
  assert.ok(view.getByRole('heading',{name:/First, let’s see/}));
  fireEvent.click(view.getByRole('button',{name:'Continue to my needs'}));
  assert.equal((view.getByLabelText('Spouse') as HTMLInputElement).checked,false);
  assert.equal((view.getByLabelText('Do you already have personal health insurance?') as HTMLSelectElement).value,'Not sure');
  assert.equal((view.getByRole('button',{name:'Continue to my options'}) as HTMLButtonElement).disabled,true);
  cleanup();
});
