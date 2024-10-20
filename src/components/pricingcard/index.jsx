import React from "react";

// PricingCard component: Renders a customizable pricing card
const PricingCard = ({
  title,
  price,
  oldPrice,
  features,
  buttonText,
  isPrimary,
  indexy,
  extrafeatures,
}) => {
  return (
    // Main container for the pricing card
    <div
      style={{
        // Conditional styling based on whether it's a primary card
        border: isPrimary ? "0.89px solid #1A56DB" : "0.89px solid #E5E7EB",
        borderRadius: "7.13px",
        padding: "20px",
        width: "280px",
        height: "812.77px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        // Background gradient for primary cards, white for others
        background: isPrimary
          ? "linear-gradient(180deg, #1E429F 0%, #0B1839 100%)"
          : "#ffffff",
        color: isPrimary ? "white" : "black",
        // Different box shadows for primary and non-primary cards
        boxShadow: isPrimary
          ? "0px 4px 6px 0px rgba(28, 100, 242, 0.1), 0px 10px 15px -3px rgba(28, 100, 242, 0.2)"
          : "0 1.78px 3.56px -1.78px rgba(0, 0, 0, 0.05), 0 3.56px 5.35px -0.89px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* Inner container for card content */}
      <div
        style={{
          width: "232px",
          height: "764.77px",
          alignItems: "center",
          justifyContent: "center",
          gap: "24.94px",
        }}
      >
        {/* Title and pricing section */}
        <div style={{ width: "232px", height: "fitContent", gap: "14.25px" }}>
          {/* Card title */}
          <h3
            style={{
              fontWeight: "500",
              height: "27px",
              font: "inter",
              fontSize: "17.82px",
              lineHeight: "26.73px",
              color: isPrimary ? "#ffffff" : "#1F2A37",
            }}
          >
            {title}
          </h3>
          {/* Pricing information */}
          <div
            style={{
              height: "fitContent",
              gap: "6.16px",
              width: "212px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* Conditional rendering based on indexy prop */}
            {indexy === 0 || indexy === 3 ? (
              // Pricing display for specific indexes
              <div
                style={{
                  height: "37px",
                  display: "flex",
                  flexDirection: "column",
                  fontFamily: "inter",
                  fontWeight: "800",
                  fontSize: "36.99px",
                  lineHeight: "36.99px",
                  color: "#111928",
                }}
              >
                {price}
                <span
                  style={{
                    fontFamily: "inter",
                    fontWeight: "400",
                    fontSize: "12.33px",
                    lineHeight: "18.49px",
                    color: isPrimary ? "#affffff" : "#6B7280",
                  }}
                >
                  {oldPrice}
                </span>
              </div>
            ) : (
              // Alternative pricing display
              <div
                style={{
                  height: "37px",
                  fontFamily: "inter",
                  fontWeight: "800",
                  fontSize: "36.99px",
                  lineHeight: "36.99px",
                  color: isPrimary ? "#ffffff" : "#111928",
                }}
              >
                {price}
                <span style={{ fontSize: "14px", fontWeight: "normal" }}>
                  {" "}
                  /month
                </span>
                <span
                  style={{
                    fontSize: "18.49px",
                    fontFamily: "inter",
                    fontWeight: "400",
                    lineHeight: "18.49px",
                    color: isPrimary ? "#affffff" : "#6B7280",
                  }}
                >
                  {oldPrice}
                </span>
              </div>
            )}
          </div>
        </div>
        
        {/* Features list section */}
        <div
          style={{
            marginBottom: "20px",
            width: "100%",
            height: " 412px",
            gap: "14.25px",
            marginTop: "24.9px",
          }}
        >
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* Mapping through features array */}
            {features.map((feature, index) => (
              <li
                key={index}
                style={{
                  marginBottom: "10px",
                  gap: "10.69px",
                  display: "flex",
                  padding: " 1.78px 0px 1.78px 0px",
                  fontFamily: "inter",
                  fontWeight: "400",
                  fontSize: "14.25px",
                  lineHeight: "21.38px",
                  color: isPrimary ? "#ffffff" : "#6B7280",
                }}
              >
                {/* Checkmark icon */}
                <div
                  style={{
                    width: "17.82px",
                    display: "flex",
                    alignItems: "center",
                    height: "17.82px",
                  }}
                >
                  <img
                    style={{
                      width: "13.36px",
                      height: "13.36px",
                    }}
                    src="/check-circle.png"
                  />
                </div>{" "}
                {feature}
              </li>
            ))}
          </ul>
        </div>
        
        {/* Divider */}
        <div
          style={{
            marginTop: "24.94px",
            width: "232px",
            border: "1px solid #76A9FA",
          }}
        ></div>
        
        {/* Extra features section */}
        <div
          style={{
            marginTop: "24.94px",
            marginBottom: "24.94px",
            height: "112.51px",
          }}
        >
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* Mapping through extrafeatures array */}
            {extrafeatures.map((feature, index) => (
              <li
                key={index}
                style={{
                  marginBottom: "10px",
                  gap: "10.69px",
                  display: "flex",
                  padding: " 1.78px 0px 1.78px 0px",
                  fontFamily: "inter",
                  fontWeight: "600",
                  fontSize: "14.25px",
                  lineHeight: "21.38px",
                  color: isPrimary ? "#ffffff" : "#6B7280",
                }}
              >
                {/* Bullet point */}
                <div
                  style={{
                    width: "1.82px",
                    display: "flex",
                    height: "10.82px",
                    alignItems: "center",
                    scale: "2",
                  }}
                >
                  .
                </div>
                {feature}
              </li>
            ))}
          </ul>
        </div>
        
        {/* Button container */}
        <div
          style={{
            width: "100%",
            height: "36.82px",
            padding: " 2.5px 5px 2.5px 5px",
            gap: "2px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "none",
            borderRadius: "7.12px",
            backgroundColor: isPrimary ? "#ffffff" : "#1A56DB",
            cursor: "pointer",
          }}
        >
          {/* Action button */}
          <button
            style={{
              width: "163px",
              height: "19px",
              border: "none",
              gap: "2px",
              fontFamily: "inter",
              fontWeight: "600",
              fontSize: "12.47px",
              lineHeight: "18.71px",
              backgroundColor: isPrimary ? "#ffffff" : "#1A56DB",
              color: isPrimary ? "#1E2A37" : "white",
              cursor: "pointer",
            }}
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;