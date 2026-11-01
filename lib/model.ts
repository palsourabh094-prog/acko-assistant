export const sources = {
 transition:'https://www.acko.com/group-health-insurance/corporate-health-insurance-when-changing-jobs/',
 group:'https://www.acko.com/group-health-insurance/',
 personal:'https://www.acko.com/health-insurance/individual-health-insurance-plans/'
};
export const assumptions = {premium:20000,renewal:80,claims:65,retained:0.75,incremental:0.8,newPolicies:[10000,30000,60000],costs:[4.04,10.39,21.074]};
export type FinancialYear = {year:number;newPolicies:number;renewals:number;total:number;gwp:number;nep:number;contribution:number};
export function calculate(renewal=80,claims=65):FinancialYear[]{let previousTotal=0,previousGwp=0;return assumptions.newPolicies.map((newPolicies,i)=>{const renewals=previousTotal*renewal/100;const total=newPolicies+renewals;const gwp=total*assumptions.premium/1e7;const nep=0.5*(gwp+previousGwp)*assumptions.retained*assumptions.incremental;const contribution=nep*(1-claims/100)-assumptions.costs[i];previousTotal=total;previousGwp=gwp;return {year:i+1,newPolicies,renewals,total,gwp,nep,contribution};});}
export const baseCase=calculate();
export const money=(n:number,digits=1,signed=false)=>`${n<0?'−':signed&&n>0?'+':''}₹${Math.abs(n).toFixed(digits)} cr`;
export const chapters=['Problem','Customer','Solution','Economics','Execution'];
export const narrative={
 problem:{eyebrow:'01 / THE PROBLEM',title:'A new job. A few unanswered questions.',body:'Meet Aditi. She has employer health insurance and is changing jobs. She needs clear information and time to decide.',questions:['When does my current cover end?','Is my family still protected?','Should I consider a personal policy?']},
 customer:{eyebrow:'02 / THE FIRST CUSTOMER',title:'Start with a useful moment. And a willing customer.',body:'Interested employees at participating ACKO-insured employers. A job or family change can prompt a review, even when personal cover already exists.'},
 solution:{eyebrow:'03 / THE PROPOSED SOLUTION',title:'Clarity first. The choice stays yours.',body:'A voluntary digital journey to understand current cover, review family needs and explore suitable personal insurance.'},
 economics:{eyebrow:'04 / THE BUSINESS CASE',title:'Purchases start the relationship. Renewals sustain it.',body:'Suitable, eligible customers may choose to buy. Claims and programme costs determine contribution. No employer software fee is assumed.'},
 execution:{eyebrow:'05 / EXECUTION',title:'A controlled pilot earns the right to expand.',body:'Launch a controlled pilot. Grow when customer outcomes and financial performance support it.'}
};
export const roadmap=[{year:'Year 1',title:'Pilot',items:['Work with willing employers','Measure interest, additional purchases and costs','Monitor claims as they develop']},{year:'Year 2',title:'Expand selectively',items:['Improve the journey','Track renewals and customer experience','Continue monitoring claims']},{year:'Year 3',title:'Scale where justified',items:['Expand to more employers','Test other channels','Check contribution, funding and capital needs']}];
export const risks=[['Low demand','Improve the offer or stop expansion'],['High claims','Review pricing, underwriting and customer mix'],['Privacy','Clear permission and appropriate data'],['Purchases that happen anyway','Use a comparison group'],['Capital pressure','Funding and solvency checks before scaling']];
