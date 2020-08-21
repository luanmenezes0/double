import React from "react";
import styles from './PriorityBadge.module.css'

const PriorityBadge = ({ type }) => {
  let badge;

  switch (type) {
    case (type = "low"):
      return (badge = (
        <span className={`${styles.Priority} ${styles.Low}`}>Baixa</span>
      ));
    case (type = "middle"):
      return (badge = (
        <span className={`${styles.Priority} ${styles.Middle}`}>
          <span>Média</span>
        </span>
      ));
    case (type = "high"):
      return (badge = (
        <span className={`${styles.Priority} ${styles.High}`}>
          <span>Alta</span>
        </span>
      ));
    default:
      break;
  }
  return badge;
};

export default PriorityBadge;
