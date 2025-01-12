import Link from 'next/link';
import React from 'react';
import Wrapper from '../gadgets/Wrapper';

const Footer: React.FC = () => {
    return (
        <Wrapper>

        <footer style={footerStyle}>
            <div style={containerStyle}>
                <div style={logoStyle}>
                    <Link href="/" style={linkStyle}>
                        M.A
                    </Link>
                </div>
                <nav style={navStyle}>
                    <Link href="/" style={linkStyle}>Home</Link>
                    <Link href="/About" style={linkStyle}>About</Link>
                    <Link href="/contact" style={linkStyle}>Contact</Link>
                    <Link href="/projects" style={linkStyle}>projects</Link>
                </nav>
            </div>
            <hr style={hrStyle} />
            <p style={copyrightStyle}>
                &copy; {new Date().getFullYear()} All Rights Are Reversed By Muhammad Ashar.
            </p>
        </footer>
        </Wrapper>
    );
};

const footerStyle: React.CSSProperties = {
    textAlign: 'center',
    padding: '2rem',
    backgroundColor: 'rgba(40, 44, 52, 0.7)', // Semi-transparent background
    color: '#ffffff',
    marginTop: '2rem',
    backdropFilter: 'blur(10px)', // Blurry effect
    borderRadius: '8px', // Optional: rounded corners
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0)', // Optional: shadow for depth
};

const containerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
};

const logoStyle: React.CSSProperties = {
    marginBottom: '1rem',
    fontSize: '1.5rem',
    fontWeight: '900',
};

const navStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    gap: '1.5rem',
    marginBottom: '1rem',

};

const linkStyle: React.CSSProperties = {
    color: '#61dafb',
    textDecoration: 'none',
    fontSize: '1rem',
    transition: 'color 0.3s',
};

const hrStyle: React.CSSProperties = {
    border: '1px solid #444',
    width: '80%',
    margin: '1rem auto',
    color: '#444',
};

const copyrightStyle: React.CSSProperties = {
    fontSize: '0.875rem',
};

export default Footer;