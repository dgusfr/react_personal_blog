import React, { useEffect, useRef } from "react";
import styles from "./PostModelo.module.css";

const processLinks = (node) => {
  if (!node) return;
  const links = node.querySelectorAll("a");
  links.forEach((link) => {
    link.setAttribute("target", "_blank");
    link.setAttribute("rel", "noopener noreferrer");
  });
};

export default function PostModelo({ children, fotoCapa, titulo }) {
  const contentRef = useRef(null);

  useEffect(() => {
    processLinks(contentRef.current);
  }, [children]);

  return (
    <article className={styles.postModeloContainer}>
      <div
        className={styles.fotoCapa}
        style={{ backgroundImage: `url(${fotoCapa})` }}
      ></div>

      <h2 className={styles.titulo}>{titulo}</h2>

      <div className={styles.postConteudoContainer} ref={contentRef}>
        {children}
      </div>
    </article>
  );
}
