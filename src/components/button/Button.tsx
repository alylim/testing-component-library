import React from "react";

export interface ButtonProps {
  children: React.ReactNode;
  shape: "circle" | "rectangle" | "cat";
  onClick: () => void;
}

export const Button = ({ children, onClick, shape }: ButtonProps) => {
  const getStyle = () => {
    switch (shape) {
      case "circle":
        return styles.circle;
      case "rectangle":
        return styles.rectangle;
      case "cat":
        return styles.cat;
      default:
        return styles.rectangle;
    }
  };
  return (
    <button onClick={onClick} style={getStyle()}>
      <div style={{ position: "relative" }}>
        {shape === "cat" && <CatFeatures />}
        {children}
      </div>
    </button>
  );
};

const styles: Record<string, React.CSSProperties> = {
  circle: {
    borderRadius: "50%",
  },
  rectangle: {
    borderRadius: "5%",
  },
  cat: {
    marginTop: "20px",
    width: "100px",
    height: "80px",
    backgroundColor: "grey",
    borderRadius: "50%",
    position: "relative",
  },
  ear: {
    width: "0px",
    height: "0px",
    borderLeft: "15px solid transparent",
    borderRight: "15px solid transparent",
    borderBottom: "30px solid grey",
    position: "absolute",
  },
};

const CatFeatures = () => (
  <>
    <div style={{ ...styles.ear, left: "3px", top: "-43px" }}></div>
    <div style={{ ...styles.ear, right: "3px", top: "-43px" }}></div>
  </>
);
