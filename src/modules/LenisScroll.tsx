import { ReactLenis, useLenis } from "lenis/react";
import { PropsWithChildren } from "react";

export const LenisScroll = ({ children }: PropsWithChildren) => {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  });

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.05,
        duration: 0.5,
      }}
    >
      {children}
    </ReactLenis>
  );
};
