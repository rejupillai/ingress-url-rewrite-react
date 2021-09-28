import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
	return (
		<div>
				<p>This tests the URL links</p>
		</div>
	)
};


const AppLandingPage = () => {
	return (
		<div>
				<Header/>
				<h1>AppLandingPage [ {window.location.pathname} ] </h1>
        <Link to='/'>Go to Homepage</Link> <br></br>
        <Link to='/app/about'>Go to Aboutpage</Link> <br></br>
        <Link to='/app/contact'>Go to Contactpage</Link> <br></br>		</div>
	)
};

const Homepage = () => {
	return (
		<div>
				<Header/>
				<h1>Homepage [ {window.location.pathname} ] </h1>
				<Link to='/app'>Go to AppLandingPage</Link> <br></br>
        <Link to='/app/about'>Go to Aboutpage</Link> <br></br>
        <Link to='/app/contact'>Go to Contactpage</Link> <br></br>
  	</div>
	)
};

const Contactpage = () => {
	return (
		<div>
				<Header/>
				<h1>Contactpage [ {window.location.pathname} ] </h1>
        <Link to='/app'>Go to AppLandingPage</Link> <br></br>
        <Link to='/app/about'>Go to Aboutpage</Link> <br></br>
        <Link to='/'>Go to Homepage</Link> <br></br>
  			</div>
	)
};

const Aboutpage = () => {
	return (
		<div>
				<Header/>
				<h1>Aboutpage [ {window.location.pathname} ] </h1>
        <Link to='/app'>Go to AppLandingPage</Link> <br></br>
        <Link to='/app/contact'>Go to Contactpage</Link> <br></br>
        <Link to='/'>Go to Homepage</Link> <br></br>		
        </div>
    
	)
};
export {Homepage, Aboutpage, Contactpage, AppLandingPage } ;

