import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import stocktrends from "../assets/stocktrends.jpg";
import sensex from "../assets/sensex.jpg";
import cryptocoins from "../assets/cryptocoins.jpg";
import RealTimeAnalytics from "../assets/RealTimeAnalytics.jpg";
import MarketInsights from "../assets/MarketInsights.jpg";
import RiskAssessment from "../assets/RiskAssessment.jpg";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <header className="bg-gray-900 text-white fixed w-full z-50 shadow-md">
        <nav className="container mx-auto flex items-center justify-between px-6 py-4">
          <h3>InvestSmart</h3>
          <ul className="flex space-x-6">
            <li>
              <a className="hover:text-gray-400" href="#features">
                Features
              </a>
            </li>
            <li>
              <a className="hover:text-gray-400" href="#insights">
                Insights
              </a>
            </li>
            <li>
              <a className="hover:text-gray-400" href="/register">
                Register
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section
  className="relative h-screen flex items-center justify-center bg-cover bg-center"
  style={{ backgroundImage: "url('https://iea.imgix.net/fd158318-41d2-4c89-8367-d194aa7b2def/WorldEnergyInvestment2024-shutterstock_2333511041.jpg?auto=compress%2Cformat&fit=min&q=80&rect=286%2C181%2C4982%2C2135&w=1800&h=771&fit=crop&fm=jpg&q=70&auto=format')" }}
>
  <div className="bg-black bg-opacity-50 p-8 rounded-lg backdrop-blur-md">
    <h1 className="text-4xl font-bold text-white text-center">Invest Smarter, Not Harder</h1>
    <p className="mt-4 text-gray-300">
      Gain valuable insights into your investments to make informed decisions and grow your wealth.
    </p>
    <button
      className="mt-6 px-6 py-3 bg-green-500 text-white font-semibold rounded-lg text-center hover:bg-green-600 block mx-auto"
      onClick={() => navigate("/register")}
    >
      Start Now
    </button>
  </div>
</section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-10">Our Features</h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[RealTimeAnalytics, MarketInsights, RiskAssessment].map((img, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6">
              <img src={img} alt="Feature" className="w-full h-40 object-cover rounded-t-lg" />
              <h4 className="text-xl font-semibold mt-4">{["Real-Time Analytics", "Market Insights", "Risk Assessment"][index]}</h4>
              <p className="mt-2 text-gray-600">
                {[
                  "Monitor your portfolio's performance with up-to-date data and trends.",
                  "Receive expert insights and analysis to guide your investment decisions.",
                  "Evaluate and manage the risks of your investments with precision."
                ][index]}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Insights Section */}
      <section id="insights" className="py-20 bg-white text-center">
        <h2 className="text-3xl font-bold mb-10">Investment Insights</h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[stocktrends, sensex, cryptocoins].map((img, index) => (
            <div key={index} className="bg-gray-100 shadow-lg rounded-lg p-6">
              <img src={img} alt="Insight" className="w-full h-40 object-cover rounded-t-lg" />
              <h4 className="text-xl font-semibold mt-4">{["Stock Market Trends", "SENSEX Insights", "Crypto-Coins Insight"][index]}</h4>
              <p className="mt-2 text-gray-600">
                {[
                  "Understand the latest movements in the stock market and how they affect your investments.",
                  "Track SENSEX movements and leverage the information for better financial strategies.",
                  "Get expert analysis on cryptocurrency trends, ensuring your digital assets are optimized."
                ][index]}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-4">
        <p>&copy; 2025 InvestSmart, All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default Home;
