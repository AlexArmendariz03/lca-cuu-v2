declare module "react" {
  export type ReactNode = unknown;
  export type ComponentType<P = Record<string, unknown>> = (props: P) => JSX.Element | null;
  export type SVGProps<T> = Record<string, unknown> & { ref?: unknown };

  export function useState<S>(initialState: S | (() => S)): [S, (value: S | ((previous: S) => S)) => void];
  export function useEffect(effect: () => void | (() => void), deps?: unknown[]): void;
  export function useRef<T>(initialValue: T): { current: T };

  const React: {
    useState: typeof useState;
    useEffect: typeof useEffect;
    useRef: typeof useRef;
  };

  export default React;
}

declare namespace JSX {
  type Element = unknown;
  interface IntrinsicElements {
    [elementName: string]: Record<string, unknown>;
  }
}

declare namespace JSX {
  interface ElementChildrenAttribute {
    children: Record<string, unknown>;
  }
}

declare namespace React {
  type ReactNode = unknown;
}
