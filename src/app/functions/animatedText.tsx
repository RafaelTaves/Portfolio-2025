"use client"
import { useTranslations } from "next-intl";
import React, { useState, useEffect } from "react";

export default function AnimatedText () {
  const t = useTranslations("animation"); 

  const wordKeys = [
    "fullStackDeveloper",
    "reactSpecialist",
    "softwareDeveloper",
    "webProgrammer",
  ];

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 150; // Velocidade de digitação (ms)
  const deletingSpeed = 50; // Velocidade ao apagar (ms)
  const delayBetweenWords = 2000; // Pausa entre palavras (ms)

  useEffect(() => {
    const currentWordKey = wordKeys[currentWordIndex]; // Pega a chave atual
    const translatedWord = t(currentWordKey); // Traduz a palavra atual
    let typingTimeout: NodeJS.Timeout;

    if (!isDeleting) {
      // Adiciona caracteres
      if (displayedText.length < translatedWord.length) {
        typingTimeout = setTimeout(() => {
          setDisplayedText(
            translatedWord.slice(0, displayedText.length + 1)
          );
        }, typingSpeed);
      } else {
        // Quando termina de escrever, pausa antes de apagar
        typingTimeout = setTimeout(() => setIsDeleting(true), delayBetweenWords);
      }
    } else {
      // Apaga caracteres
      if (displayedText.length > 0) {
        typingTimeout = setTimeout(() => {
          setDisplayedText(
            translatedWord.slice(0, displayedText.length - 1)
          );
        }, deletingSpeed);
      } else {
        // Quando termina de apagar, passa para a próxima palavra
        setIsDeleting(false);
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % wordKeys.length);
      }
    }

    return () => clearTimeout(typingTimeout);
  }, [displayedText, isDeleting, currentWordIndex, t]);

  return (
    <p
      className="font-inter text-2xl lg:text-4xl text-light-blue"
      style={{
        minHeight: "1.35em", // Altura mínima com base no tamanho da fonte
        display: "flex", // Garante que ocupe espaço mesmo vazio
        alignItems: "center", // Centraliza verticalmente o texto
      }}
    >
      {displayedText}
    </p>
  );
}