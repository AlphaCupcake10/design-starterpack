const useScrollPercentage = (elementRef: React.RefObject<HTMLElement>) => {  
    if (!elementRef.current) return;
    const { scrollTop, scrollHeight, clientHeight } = elementRef.current;
    const scrollableHeight = scrollHeight - clientHeight;
    const currentScrollPercentage = (scrollTop / scrollableHeight) * 100;
    return currentScrollPercentage;
};