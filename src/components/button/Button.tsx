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
      {children}
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
    width: "100px",
    height: "100px",
    backgroundColor: "gray",
    borderRadius: "50%",
    position: "relative",
  },
  ear: {
    width: "20px",
    height: "30px",
    backgroundColor: "gray",
    borderRadius: "50%",
    position: "absolute",
  },
};

const catFeatures = () => (
  <>
    <div style={{ ...styles.ear, left: "0", top: "0" }}></div>
    <div style={{ ...styles.ear, right: "0", top: "0" }}></div>
  </>
);
