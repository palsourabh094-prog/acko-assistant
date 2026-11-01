/** Fictional demonstration data. Edit this file to change the sample policy and options. */
export const demoPolicy = {
  employee: 'Aditi',
  employer: 'Sample employer',
  coveredMembers: 'Aditi + spouse',
  benefits: 'Hospitalisation, daycare',
  endDate: 'Confirm with employer',
};
export const familyOptions = ['Aditi', 'Spouse', 'Children', 'Parents'];
export const reviewReasons = ['Job change', 'Family change', 'General review'];
export const reviewAreas = ['Who is covered', 'Price', 'Waiting periods', 'Exclusions and limits', 'Eligibility and underwriting'];
export const decisions = [
  {title:'Explore a personal policy', description:'Understand what to look for in a personal policy.', done:'Your next-step checklist is ready.', next:'A real application would require further personal and health information, an actual quote and underwriting. Review the policy terms, waiting periods and exclusions before deciding. No application has been submitted or policy issued.'},
  {title:'Request guidance', description:'Get help understanding your existing protection.', done:'Your guidance request is simulated.', next:'In a real service, an adviser could help you review your policy documents, covered family members and cover end date. Gather your documents and questions. No request has been sent and no contact details were collected.'},
  {title:'My existing cover may be sufficient', description:'Confirm that the protection you have meets your needs.', done:'A considered decision is a good outcome.', next:'Confirm covered family members, benefits, limits and the cover end date with your employer and insurer. Revisit your protection if your job, family or other circumstances change.'},
];
