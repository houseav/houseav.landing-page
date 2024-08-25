declare module "canvas-confetti" {
  export interface Options {
    angle?: number;
    spread?: number;
    startVelocity?: number;
    decay?: number;
    gravity?: number;
    drift?: number;
    ticks?: number;
    x?: number;
    y?: number;
    zIndex?: number;
    colors?: string[];
    shapes?: string[];
    scalar?: number;
    origin?: { x: number; y: number };
    particleCount?: number;
  }

  export interface GlobalOptions {
    resize?: boolean;
    useWorker?: boolean;
  }

  export interface CreateTypes {
    reset: () => void;
  }

  function confetti(options?: Options): Promise<null>;

  namespace confetti {
    function create(
      canvas: HTMLCanvasElement,
      options?: GlobalOptions
    ): CreateTypes;
  }

  export default confetti;
}
