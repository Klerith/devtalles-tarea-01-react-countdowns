export {};


declare module "react" {
  // augment CSSProperties here
  interface CSSProperties {
    "--value"?: string | number;
    "--size"?: string | number;
    "--thickness"?: string | number;
  }
}
