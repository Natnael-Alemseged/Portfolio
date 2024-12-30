// vite-env.d.ts
declare module "*.jsx" {
    import { ComponentType } from "react";
    const value: ComponentType;  // Specify empty object as props if unknown
    export default value;
}
