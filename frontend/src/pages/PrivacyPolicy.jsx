import React from 'react';
import { Link } from 'react-router-dom';
import useMediaQuery from '../hooks/useMediaQuery';

const PrivacyPolicy = () => {
    const isMobile = useMediaQuery('(max-width: 768px)');

    return (
        <main style={{
            background: '#fafafa',
            minHeight: '100vh',
            paddingTop: '120px',
            paddingBottom: '4rem'
        }}>
            <div style={{
                maxWidth: '900px',
                margin: '0 auto',
                padding: isMobile ? '2rem 1.5rem' : '3rem 2rem',
                background: '#fff',
                borderRadius: '8px',
                boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
            }}>
                {/* Header */}
                <h1 style={{
                    fontSize: isMobile ? '2rem' : '2.5rem',
                    fontWeight: 700,
                    marginBottom: '1rem',
                    color: '#111'
                }}>
                    Privacy Policy
                </h1>

                <p style={{
                    fontSize: '0.95rem',
                    color: '#666',
                    marginBottom: '3rem',
                    lineHeight: 1.6
                }}>
                    GTFZ ("We", "Our", or "Us") respects your privacy and is committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
                </p>

                {/* Section 2 */}
                <h2 style={{
                    fontSize: '1.5rem',
                    fontWeight: 600,
                    marginTop: '2.5rem',
                    marginBottom: '1rem',
                    color: '#111'
                }}>
                    2. Information We Collect
                </h2>
                <p style={{ fontSize: '0.95rem', color: '#333', lineHeight: 1.8, marginBottom: '1rem' }}>
                    We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
                </p>
                <ul style={{ fontSize: '0.95rem', color: '#333', lineHeight: 1.8, paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
                    <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
                    <li><strong>Contact Data:</strong> includes email address and telephone numbers.</li>
                    <li><strong>Technical Data:</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
                    <li><strong>Usage Data:</strong> includes information about how you use our website, products and services.</li>
                </ul>

                {/* Section 3 */}
                <h2 style={{
                    fontSize: '1.5rem',
                    fontWeight: 600,
                    marginTop: '2.5rem',
                    marginBottom: '1rem',
                    color: '#111'
                }}>
                    3. How We Use Your Data
                </h2>
                <p style={{ fontSize: '0.95rem', color: '#333', lineHeight: 1.8, marginBottom: '1rem' }}>
                    We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
                </p>
                <ul style={{ fontSize: '0.95rem', color: '#333', lineHeight: 1.8, paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
                    <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                    <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                    <li>Where we need to comply with a legal obligation.</li>
                </ul>

                {/* Section 4 */}
                <h2 style={{
                    fontSize: '1.5rem',
                    fontWeight: 600,
                    marginTop: '2.5rem',
                    marginBottom: '1rem',
                    color: '#111'
                }}>
                    4. Data Security
                </h2>
                <p style={{ fontSize: '0.95rem', color: '#333', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                    We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed.
                </p>

                {/* Section 5 */}
                <h2 style={{
                    fontSize: '1.5rem',
                    fontWeight: 600,
                    marginTop: '2.5rem',
                    marginBottom: '1rem',
                    color: '#111'
                }}>
                    5. Your Legal Rights
                </h2>
                <p style={{ fontSize: '0.95rem', color: '#333', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                    Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to request access, correction, erasure, restriction, transfer, to object to processing, to portability of data and (where the lawful ground of processing is consent) to withdraw consent.
                </p>

                {/* Section 6 */}
                <h2 style={{
                    fontSize: '1.5rem',
                    fontWeight: 600,
                    marginTop: '2.5rem',
                    marginBottom: '1rem',
                    color: '#111'
                }}>
                    6. Changes to This Privacy Policy
                </h2>
                <p style={{ fontSize: '0.95rem', color: '#333', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                    We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
                </p>

                {/* Section 7 - Contact */}
                <h2 style={{
                    fontSize: '1.5rem',
                    fontWeight: 600,
                    marginTop: '2.5rem',
                    marginBottom: '1rem',
                    color: '#111'
                }}>
                    7. Contact Us
                </h2>
                <p style={{ fontSize: '0.95rem', color: '#333', lineHeight: 1.8, marginBottom: '0.5rem' }}>
                    If you have any questions about this Privacy Policy, please contact us at:
                </p>
                <div style={{
                    padding: '1.5rem',
                    background: '#f8f8f8',
                    borderRadius: '8px',
                    marginTop: '1rem',
                    marginBottom: '2rem'
                }}>
                    <p style={{ fontSize: '0.95rem', color: '#333', margin: '0.25rem 0' }}>
                        <strong>Email:</strong> <a href="mailto:partnerships@gtfz.com" style={{ color: '#B8860B', textDecoration: 'none' }}>partnerships@gtfz.com</a>
                    </p>
                    <p style={{ fontSize: '0.95rem', color: '#333', margin: '0.75rem 0 0.25rem 0' }}>
                        <strong>Address:</strong> GTFZ
                    </p>
                    <p style={{ fontSize: '0.95rem', color: '#666', margin: '0.25rem 0', lineHeight: 1.6 }}>
                        Dubai, UAE
                    </p>
                </div>

                {/* Back to Home Link */}
                <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid #e0e0e0', textAlign: 'center' }}>
                    <Link
                        to="/"
                        style={{
                            display: 'inline-block',
                            padding: '0.875rem 2rem',
                            background: '#111',
                            color: '#fff',
                            textDecoration: 'none',
                            borderRadius: '50px',
                            fontSize: '0.95rem',
                            fontWeight: 600,
                            transition: 'transform 0.2s'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    >
                        Back to Home
                    </Link>
                </div>
            </div>
        </main>
    );
};

export default PrivacyPolicy;
