import React from "react";
import logo from "../favicon.ico";
import "../styles/header.css";

export default function Header() {
  return (
    <header className="header">
    <div className="logoTitle">
      <img src={logo} alt="Company Logo" className="logo" />
      <p><b>Your task expense tracker!</b></p>
      </div>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>

          <li>
            <a href="/addExpense">Create expense</a>
          </li>

          <li>
            <a href="/about">About us</a>
          </li>

          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
