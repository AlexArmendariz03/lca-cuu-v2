declare module "aos" {
  export interface AOSOptions {
    offset?: number;
    delay?: number;
    duration?: number;
    easing?: string;
    once?: boolean;
    mirror?: boolean;
    anchorPlacement?:
      | "top-bottom"
      | "top-center"
      | "top-top"
      | "center-bottom"
      | "center-center"
      | "center-top"
      | "bottom-bottom"
      | "bottom-center"
      | "bottom-top";
    [key: string]: unknown;
  }

  interface AOS {
    init: (options?: AOSOptions) => void;
    refresh: () => void;
    refreshHard: () => void;
  }

  const aos: AOS;
  export default aos;
}
