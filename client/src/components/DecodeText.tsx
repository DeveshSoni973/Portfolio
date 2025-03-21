import { useRef, useEffect, useState, useCallback } from "react";

interface DecodeTextProps {
  text: string;
  className?: string;
  delay?: number;
}

const DecodeText = ({ text, className = "", delay = 1 }: DecodeTextProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldAnimate, setShouldAnimate] = useState(true);
  const [chars, setChars] = useState<string[]>([]);
  const [isDecoding, setIsDecoding] = useState(false);

  const getRandomChar = useCallback((originalChar: string | undefined) => {
    if (!originalChar || originalChar === " ") return " ";
    const chars = originalChar.match(/[A-Z]/)
      ? "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
      : originalChar.match(/[a-z]/)
        ? "abcdefghijklmnopqrstuvwxyz"
        : originalChar.match(/[0-9]/)
          ? "0123456789"
          : "!@#$%^&*";
    return chars.charAt(Math.floor(Math.random() * chars.length));
  }, []);

  useEffect(() => {
    setChars(text.split("").map((char) => getRandomChar(char)));
    setIsDecoding(true);
  }, [text, getRandomChar]);

  useEffect(() => {
    if (!isDecoding || !shouldAnimate) return;

    let positions = Array.from({ length: text.length }, (_, i) => i);
    positions = positions
      .filter((i) => text[i] !== " ")
      .sort(() => Math.random() - 0.5);

    let currentIndex = 0;
    const scrambleCount = 5;

    const mainInterval = setInterval(() => {
      if (currentIndex >= positions.length) {
        clearInterval(mainInterval);
        setIsDecoding(false);
        return;
      }

      const pos = positions[currentIndex];
      let scrambleIteration = 0;

      const scrambleInterval = setInterval(() => {
        if (scrambleIteration >= scrambleCount) {
          clearInterval(scrambleInterval);
          setChars((prev) => {
            const newChars = [...prev];
            newChars[pos] = text[pos];
            return newChars;
          });
          return;
        }

        setChars((prev) => {
          const newChars = [...prev];
          newChars[pos] = getRandomChar(text[pos]);
          return newChars;
        });
        scrambleIteration++;
      }, 50);

      currentIndex++;
    }, 150);

    return () => {
      clearInterval(mainInterval);
    };
  }, [isDecoding, shouldAnimate, text, getRandomChar]);

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !shouldAnimate) {
            setShouldAnimate(true);
            setIsDecoding(true);
          }
        });
      },
      { threshold: 0.2 },
    );

    observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [shouldAnimate]);

  return (
    <div ref={containerRef} className={`${className} relative`}>
      {chars.map((char, index) => {
        const jitterClass = isDecoding
          ? `jitter-${Math.floor(Math.random() * 4) + 1}`
          : "";
        return (
          <span
            key={index}
            className={`inline-block transition-all duration-300 ${jitterClass} ${
              char === " " ? "px-1" : ""
            }`}
            style={{
              color: chars[index] === text[index] ? "inherit" : "#a0a0a0", // Gray for unrevealed
              transform:
                chars[index] === text[index] ? "scale(1)" : "scale(0.9)",
              animation: !isDecoding ? "wave 2s ease-in-out infinite" : "none",
              animationDelay: !isDecoding ? `${index * 0.1}s` : "0s",
            }}
          >
            {char}
          </span>
        );
      })}
    </div>
  );
};

export default DecodeText;
