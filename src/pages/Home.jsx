import React from "react";
import Header from "../components/Header";
import MainContent from "../components/MainContent";
import Footer from "../components/Footer";

const Home = () => {
	return (
		<div className="min-h-screen flex flex-col bg-slate-950">
			<Header />
			<MainContent />
			<Footer />
		</div>
	);
};

export default Home;
