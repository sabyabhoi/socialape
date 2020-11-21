import React from 'react';
import Link from 'next/link';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
	return (
		<Navbar bg="dark" variant="dark">
			<Navbar.Brand>
				<Link href="/"><a>SocialApe</a></Link>
			</Navbar.Brand>
			<style jsx>{`
				a {
					color: white;
				}
				a:hover {
					color: white;
					text-decoration: none;
				}
			`}</style>
		</Navbar>
	);
}

export default Header;