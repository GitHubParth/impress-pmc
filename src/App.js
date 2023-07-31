import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Header from "./Components/Header";

// Pages
import HomePage from "./Pages/HomePage";
import ContactUs from "./Pages/ContactUs";
import FAQs from "./Pages/FAQs";
import AboutUs from "./Pages/AboutUs";
import Projects from "./Pages/Projects";

const App = () => {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/contact" element={<ContactUs />} />
				<Route path="/faqs" element={<FAQs />} />
				<Route path="/about" element={<AboutUs />} />
				<Route path="/projects" element={<Projects />} />
			</Routes>
		</Router>
	);
};

export default App;
