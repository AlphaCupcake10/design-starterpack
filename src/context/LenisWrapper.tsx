import { useRef, useEffect, ReactNode } from 'react';
import gsap from 'gsap';
import ReactLenis from '@studio-freight/react-lenis';

function LenisWrapper(props: { children: ReactNode }) {
    const lenisRef = useRef<any>(null);
    //TODO : Fix the type of lenisRef

    useEffect(() => {
        function update(time: number) {
            lenisRef.current?.lenis?.raf(time * 1000);
        }

        gsap.ticker.add(update);

        return () => {
            gsap.ticker.remove(update);
        };
    }, []);

    return (
        <ReactLenis root ref={lenisRef} autoRaf={false}>
            {props.children}
        </ReactLenis>
    );
}

export default LenisWrapper;
