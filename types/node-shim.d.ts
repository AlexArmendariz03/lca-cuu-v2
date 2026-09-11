declare module "fs" {
  export function existsSync(path: string): boolean;
  export function readdirSync(path: string): string[];
}

declare module "path" {
  export function join(...paths: string[]): string;
  export function extname(path: string): string;
  export function basename(path: string, ext?: string): string;
}

declare const process: {
  cwd(): string;
  env: Record<string, string | undefined>;
};
