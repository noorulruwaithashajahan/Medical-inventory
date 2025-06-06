import React, { useState } from "react";
import "./new.css";
import { FaSearch, FaArrowLeft } from "react-icons/fa";

const formList = [
  "Material Ordering - Stock",
  "Material Ordering - Generate Order",
  "Vendor Communication Portal (VCP)",
  "Vendor Creation",
  "Location Master",
  "Material Receipt Note (MRN)",
  "Binning",
  "Buying Item Master",
];

const formFields = {
  "Material Ordering - Stock": [
    "Select Item",
    "Select Vendor",
    "Enter MOQ",
    "Enter Lead time to Delivery",
    "Stock Rule",
    "Enter Safety Stock",
    "Enter ROL",
    "Enter Maximum Stock",
    "Enter Pack Qty",
  ],
  "Material Ordering - Generate Order": [
    "Select Vendor",
    "Generate Pick List",
    "Authorize Picklist - Give modify options",
    "Generate Purchase Order",
  ],
  "Vendor Communication Portal (VCP)": [
    "Share PO",
    "Get vendor confirmation",
    "Check vendor invoice",
  ],
  "Vendor Creation": [
    "Enter Vendor Name",
    "Enter Code",
    "Vendor Registration details",
    "Vendor Address",
    "Vendor Item type",
    "Logistics method",
    "Press Save button",
    "Edit option",
  ],
  "Location Master": [
    "Enter Location Name",
    "Select Location type (Main or Sub)",
    "Enter Location Code",
    "Generate Location QR/Bar code",
    "Print Location Labels",
  ],
  "Material Receipt Note (MRN)": [
    "Scan Vendor",
    "Scan Invoice or do manual entry",
    "Save Transaction with unique transaction id",
  ],
  Binning: [
    "Scan Main location",
    "Scan Sub-location",
    "Scan item or Invoice to transfer stock",
    "Save transaction",
  ],
  "Buying Item Master": [
    "Enter Item Name",
    "Enter Item Code",
    "Enter Item Specification",
    "Item Type",
    "Define Unit of measurement (UOM)",
    "Select Vendors",
    "Auto pick item price from latest batch",
    "Check average price of last 10 batches",
  ],
};

export default function App() {
  const [activeForm, setActiveForm] = useState(null);

  return (
    <div className="dashboard-container">
      {/* Top white info bar */}
      <div className="top-info-bar">
        <div></div>
        <div className="info-links">
          <span>Help Desk</span>
          <span>Services</span>
          <span>Appointment</span>
        </div>
      </div>

      {/* Blue navigation bar */}
      <nav className="main-nav">
        <div className="logo"></div>
        <ul className="nav-links">
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
        <div className="search-container">
          <input type="text" placeholder="Search..." />
          <FaSearch />
        </div>
      </nav>

      {/* Content */}
      <div className="content">
        {!activeForm ? (
          <main className="grid-view">
            {formList.map((form, idx) => (
              <div key={idx} className="card">
                <h3>{form}</h3>
                <button onClick={() => setActiveForm(form)}>Open</button>
              </div>
            ))}
          </main>
        ) : (
          <main className="form-view">
            <button className="back-btn" onClick={() => setActiveForm(null)}>
              <FaArrowLeft /> Back
            </button>
            <h2>{activeForm}</h2>
            <div className="fields">
              {formFields[activeForm].map((fld, i) => (
                <div key={i} className="form-group">
                  <label>{fld}</label>
                  <input type="text" placeholder={fld} />
                </div>
              ))}
            </div>
          </main>
        )}
      </div>
    </div>
  );
}
