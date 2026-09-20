import { useEffect, useState, useRef, RefObject } from 'react';

export function useIntersectionObserver(options = {}): [RefObject<HTMLDivElement | null>, boolean] {
    const elementRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                // Uma vez visível, desconecta o observer
                observer.disconnect();
            }
        }, {
            threshold: 0.1,
            ...options
        });

        const currentElement = elementRef.current;
        if (currentElement) {
            observer.observe(currentElement);
        }

        return () => {
            if (currentElement) {
                observer.unobserve(currentElement);
            }
        };
    }, []);

    return [elementRef, isVisible];
} 