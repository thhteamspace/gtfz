import React from 'react';
import { Link } from 'react-router-dom';
import useMediaQuery from '../hooks/useMediaQuery';

const PrivacyPolicy = () => {
    const isMobile = useMediaQuery('(max-width: 768px)');

    const sectionStyle = {
        fontSize: isMobile ? '1.3rem' : '1.5rem',
        fontWeight: 600,
        marginTop: '2.5rem',
        marginBottom: '1rem',
        color: '#111'
    };

    const paragraphStyle = {
        fontSize: isMobile ? '0.9rem' : '0.95rem',
        color: '#333',
        lineHeight: 1.8,
        marginBottom: '1rem'
    };

    const subHeadingStyle = {
        fontSize: isMobile ? '1rem' : '1.1rem',
        fontWeight: 600,
        color: '#222',
        marginTop: '1.5rem',
        marginBottom: '0.5rem'
    };

    // Custom list item component with bullet
    const BulletItem = ({ children }) => (
        <div style={{
            display: 'flex',
            alignItems: 'flex-start',
            marginBottom: '0.75rem',
            fontSize: isMobile ? '0.9rem' : '0.95rem',
            color: '#333',
            lineHeight: 1.8
        }}>
            <span style={{
                color: '#B8860B',
                marginRight: '0.75rem',
                fontWeight: 'bold',
                fontSize: '1.2rem',
                lineHeight: 1.5
            }}>•</span>
            <span>{children}</span>
        </div>
    );

    return (
        <main style={{
            background: '#fafafa',
            minHeight: '100vh',
            paddingTop: isMobile ? '100px' : '120px',
            paddingBottom: '4rem'
        }}>
            <div style={{
                maxWidth: '900px',
                margin: '0 auto',
                padding: isMobile ? '1.5rem 1rem' : '3rem 2rem',
                background: '#fff',
                borderRadius: '8px',
                boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
            }}>
                {/* Header */}
                <h1 style={{
                    fontSize: isMobile ? '1.75rem' : '2.5rem',
                    fontWeight: 700,
                    marginBottom: '1rem',
                    color: '#111'
                }}>
                    Privacy Policy
                </h1>

                <p style={{
                    fontSize: isMobile ? '0.9rem' : '0.95rem',
                    color: '#666',
                    marginBottom: '2.5rem',
                    lineHeight: 1.7
                }}>
                    GTFZ ("we", "our", or "us") respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, and informs you of your privacy rights and how the law protects you.
                </p>

                {/* Section 1 - Information We Collect */}
                <h2 style={sectionStyle}>1. Information We Collect</h2>
                <p style={paragraphStyle}>
                    We may collect, use, store, and transfer different kinds of personal data about you, including:
                </p>

                <h3 style={subHeadingStyle}>a) Identity Data</h3>
                <p style={paragraphStyle}>
                    First name, last name, company name, job title, or similar identifiers.
                </p>

                <h3 style={subHeadingStyle}>b) Contact Data</h3>
                <p style={paragraphStyle}>
                    Email address, phone number, and any contact details you voluntarily provide through forms or inquiries.
                </p>

                <h3 style={subHeadingStyle}>c) Technical Data</h3>
                <p style={paragraphStyle}>
                    Internet Protocol (IP) address, browser type and version, time zone setting, operating system, device type, and other technology used to access our website.
                </p>

                <h3 style={subHeadingStyle}>d) Usage Data</h3>
                <p style={paragraphStyle}>
                    Information about how you interact with our website, including pages visited, time spent on pages, and navigation patterns.
                </p>

                <h3 style={subHeadingStyle}>e) Marketing & Communication Data</h3>
                <p style={paragraphStyle}>
                    Your preferences in receiving communications from us, where applicable.
                </p>

                {/* Section 2 - How We Collect */}
                <h2 style={sectionStyle}>2. How We Collect Your Data</h2>
                <p style={paragraphStyle}>We collect data through:</p>
                <div style={{ marginLeft: isMobile ? '0.5rem' : '1rem', marginBottom: '1.5rem' }}>
                    <BulletItem>Direct interactions (contact forms, inquiry submissions, email communication)</BulletItem>
                    <BulletItem>Automated technologies (cookies, server logs, analytics tools)</BulletItem>
                </div>

                {/* Section 3 - How We Use */}
                <h2 style={sectionStyle}>3. How We Use Your Data</h2>
                <p style={paragraphStyle}>
                    We use your personal data only when legally permitted, including:
                </p>
                <div style={{ marginLeft: isMobile ? '0.5rem' : '1rem', marginBottom: '1.5rem' }}>
                    <BulletItem>To respond to inquiries or contact requests</BulletItem>
                    <BulletItem>To provide information about our services</BulletItem>
                    <BulletItem>To improve website functionality and user experience</BulletItem>
                    <BulletItem>To maintain website security and performance</BulletItem>
                    <BulletItem>To comply with legal or regulatory obligations</BulletItem>
                </div>
                <p style={{
                    ...paragraphStyle,
                    fontWeight: 600,
                    background: '#f8f5eb',
                    padding: '0.75rem 1rem',
                    borderRadius: '6px',
                    borderLeft: '3px solid #B8860B',
                    color: '#5a4a1f'
                }}>
                    We do not sell or rent your personal data to third parties.
                </p>

                {/* Section 4 - Legal Basis */}
                <h2 style={sectionStyle}>4. Legal Basis for Processing</h2>
                <p style={paragraphStyle}>
                    We process your personal data under one or more of the following legal bases:
                </p>
                <div style={{ marginLeft: isMobile ? '0.5rem' : '1rem', marginBottom: '1.5rem' }}>
                    <BulletItem>Your consent</BulletItem>
                    <BulletItem>Performance of a contract or pre-contractual steps</BulletItem>
                    <BulletItem>Legitimate business interests</BulletItem>
                    <BulletItem>Compliance with legal obligations</BulletItem>
                </div>

                {/* Section 5 - Data Sharing */}
                <h2 style={sectionStyle}>5. Data Sharing & Third Parties</h2>
                <p style={paragraphStyle}>
                    We may share limited data with trusted third-party service providers (such as hosting, analytics, or IT services) strictly for operational purposes. All third parties are required to respect the security and confidentiality of your data.
                </p>

                {/* Section 6 - Data Security */}
                <h2 style={sectionStyle}>6. Data Security</h2>
                <p style={paragraphStyle}>
                    We have implemented appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or loss. However, no internet-based system is 100% secure.
                </p>

                {/* Section 7 - Data Retention */}
                <h2 style={sectionStyle}>7. Data Retention</h2>
                <p style={paragraphStyle}>
                    We retain your personal data only for as long as necessary to fulfill the purposes for which it was collected, including legal, regulatory, or reporting requirements.
                </p>

                {/* Section 8 - Your Legal Rights */}
                <h2 style={sectionStyle}>8. Your Legal Rights</h2>
                <p style={paragraphStyle}>
                    Depending on applicable data protection laws, you may have the right to:
                </p>
                <div style={{ marginLeft: isMobile ? '0.5rem' : '1rem', marginBottom: '1.5rem' }}>
                    <BulletItem>Request access to your personal data</BulletItem>
                    <BulletItem>Request correction or deletion of your data</BulletItem>
                    <BulletItem>Object to or restrict processing</BulletItem>
                    <BulletItem>Request data portability</BulletItem>
                    <BulletItem>Withdraw consent at any time</BulletItem>
                </div>
                <p style={paragraphStyle}>
                    You can exercise these rights by contacting us using the details below.
                </p>

                {/* Section 9 - Cookies */}
                <h2 style={sectionStyle}>9. Cookies</h2>
                <p style={paragraphStyle}>
                    Our website may use cookies to enhance functionality and analyze usage. You may control or disable cookies through your browser settings.
                </p>

                {/* Section 10 - Changes */}
                <h2 style={sectionStyle}>10. Changes to This Privacy Policy</h2>
                <p style={paragraphStyle}>
                    We may update this Privacy Policy from time to time. Any changes will be posted on this page, and continued use of the website indicates acceptance of the updated policy.
                </p>

                {/* Section 11 - Contact Us */}
                <h2 style={sectionStyle}>11. Contact Us</h2>
                <p style={paragraphStyle}>
                    If you have any questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <div style={{
                    padding: isMobile ? '1rem' : '1.5rem',
                    background: 'linear-gradient(135deg, #f8f8f8 0%, #f0f0f0 100%)',
                    borderRadius: '8px',
                    marginTop: '1rem',
                    marginBottom: '2rem',
                    border: '1px solid #e0e0e0'
                }}>
                    <p style={{ fontSize: isMobile ? '0.9rem' : '0.95rem', color: '#333', margin: '0.25rem 0' }}>
                        <strong>Email:</strong>{' '}
                        <a href="mailto:partnerships@gtfz.com" style={{ color: '#B8860B', textDecoration: 'none', fontWeight: 500 }}>
                            partnerships@gtfz.com
                        </a>
                    </p>
                    <p style={{ fontSize: isMobile ? '0.9rem' : '0.95rem', color: '#333', margin: '1rem 0 0.25rem 0' }}>
                        <strong>Address:</strong>
                    </p>
                    <p style={{ fontSize: isMobile ? '0.9rem' : '0.95rem', color: '#666', margin: '0.25rem 0', lineHeight: 1.6 }}>
                        GTFZ<br />
                        Dubai, United Arab Emirates
                    </p>
                </div>

                {/* Back to Home Link */}
                <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid #e0e0e0', textAlign: 'center' }}>
                    <Link
                        to="/"
                        style={{
                            display: 'inline-block',
                            padding: isMobile ? '0.75rem 1.5rem' : '0.875rem 2rem',
                            background: 'linear-gradient(135deg, #111 0%, #333 100%)',
                            color: '#fff',
                            textDecoration: 'none',
                            borderRadius: '50px',
                            fontSize: isMobile ? '0.9rem' : '0.95rem',
                            fontWeight: 600,
                            transition: 'transform 0.2s, box-shadow 0.2s',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'scale(1.05)';
                            e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.25)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'scale(1)';
                            e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.15)';
                        }}
                    >
                        Back to Home
                    </Link>
                </div>
            </div>
        </main>
    );
};

export default PrivacyPolicy;
