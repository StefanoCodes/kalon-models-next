// "use client";

// import { useState, useEffect, useCallback } from "react";

// export function useImageLoad(src: string, options?: IntersectionObserverInit) {
//   const [isLoaded, setIsLoaded] = useState(false);
//   const [isInView, setIsInView] = useState(false);

//   const onIntersection = useCallback((entries: IntersectionObserverEntry[]) => {
//     const [entry] = entries;
//     if (entry.isIntersecting) {
//       setIsInView(true);
//     }
//   }, []);

//   useEffect(() => {
//     if (!src || !window.IntersectionObserver) return;

//     const observer = new IntersectionObserver(onIntersection, options);
//     const element = document.querySelector(`img[src="${src}"]`);

//     if (element) observer.observe(element);

//     return () => {
//       if (element) observer.unobserve(element);
//     };
//   }, [src, options, onIntersection]);

//   useEffect(() => {
//     if (!isInView) return;

//     const img = new Image();
//     img.src = src;
//     img.onload = () => setIsLoaded(true);
//   }, [src, isInView]);

//   return { isLoaded, isInView };
// }
