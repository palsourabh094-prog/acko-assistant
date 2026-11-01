import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {title:'ACKO Continuity — Team DisRUpt',description:'A proposed voluntary journey to understand employer health cover, review family needs and explore personal insurance. Conviction: The FinTech Challenge.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
