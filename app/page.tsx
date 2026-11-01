import { ArrowDown, ArrowRight, Check, LockKeyhole, Sparkles } from 'lucide-react';
import { Journey } from '@/components/journey';

const previewSteps = [
  { number: '01', title: 'See my cover', detail: 'Start with what you have' },
  { number: '02', title: 'Understand my needs', detail: 'Think about your family' },
  { number: '03', title: 'Explore my options', detail: 'Understand your next steps' },
  { number: '04', title: 'Decide what to do', detail: 'Choose what feels right' },
];

export default function Home() {
  return <>
    <a className="skip-link" href="#journey">Skip to Aditi’s journey</a>
    <header className="product-header">
      <a href="#top" className="product-wordmark" aria-label="ACKO Continuity home"><strong>ACKO</strong><span>Continuity</span></a>
      <span className="header-concept"><span/> A TEAM DISRUPT CONCEPT</span>
      <a className="header-link" href="#journey">Start the journey <ArrowRight size={16}/></a>
    </header>
    <main id="top">
      <section className="product-hero">
        <div className="product-container hero-grid">
          <div className="product-hero-copy">
            <div className="product-kicker"><span className="kicker-icon"><Sparkles size={15}/></span> A LITTLE MORE CLARITY FOR WHAT’S NEXT</div>
            <h1>Your health cover,<br/><em>made clearer.</em></h1>
            <p className="hero-lead">Understand your employer cover, review your family’s needs and explore your next steps.</p>
            <a className="product-primary" href="#journey">Start Aditi’s journey <ArrowRight size={18}/></a>
            <div className="hero-intro"><div className="aditi-avatar">A</div><p><strong>Meet Aditi.</strong> She’s changing jobs and wants to understand what her health cover means for her family.</p></div>
            <p className="concept-caption"><span/> Proposed concept by Team DisRUpt</p>
          </div>
          <div className="hero-visual" aria-label="Preview of Aditi’s cover review">
            <div className="visual-top"><div className="visual-brand"><span>ACKO <strong>Continuity</strong></span></div><span className="visual-demo">FICTIONAL DEMO</span></div>
            <div className="visual-body"><div className="visual-greeting"><span className="aditi-avatar small">A</span><div><small>GOOD TO SEE YOU</small><strong>Let’s take a look, Aditi.</strong></div></div><h2>Better clarity starts<br/>with your cover.</h2><p>A simple place to understand what you have and consider what comes next.</p>
              <div className="visual-policy"><div className="visual-policy-top"><span className="visual-policy-icon">✳</span><span><strong>My current cover</strong><small>Employer health policy · Demo data</small></span><span className="visual-check"><Check size={15}/></span></div><div className="visual-policy-row"><span>Covered members</span><strong>Aditi + spouse</strong></div><div className="visual-policy-row"><span>Cover end date</span><strong>Confirm with employer</strong></div></div>
              <div className="visual-progress"><div><span>YOUR JOURNEY</span><strong>One step at a time</strong></div><div className="visual-progress-bars"><i/><i/><i/><i/></div></div>
            </div><div className="visual-footer"><LockKeyhole size={13}/> Proposed concept screen · Your answers stay in this browser</div>
          </div>
        </div>
        <div className="product-container stage-preview"><div className="stage-preview-label">A CLEARER WAY<br/><strong>FORWARD</strong></div>{previewSteps.map(s=><div className="preview-step" key={s.number}><span>{s.number}</span><div><strong>{s.title}</strong><small>{s.detail}</small></div></div>)}<a href="#journey" aria-label="Go to journey"><ArrowDown size={19}/></a></div>
      </section>
      <section className="journey-section" id="journey"><div className="product-container"><div className="journey-section-heading"><div><span className="eyebrow">YOUR JOURNEY · DEMO</span><h2>Let’s take this one step at a time.</h2><p>Four simple steps to a more informed decision. There’s no obligation to buy.</p></div><div className="journey-time"><span>✳</span><div><strong>Take your time</strong><small>It’s your decision to make</small></div></div></div><Journey/></div></section>
    </main>
    <footer className="product-footer"><div className="product-container"><div><a href="#top" className="product-wordmark footer-wordmark"><strong>ACKO</strong><span>Continuity</span></a><p>Proposed concept by Team DisRUpt for Conviction: The FinTech Challenge.</p></div><p>Fictional demonstration. Not an ACKO launch or endorsed service.</p></div></footer>
    <div className="persistent-label"><span/> PROPOSED TEAM CONCEPT</div>
  </>;
}
