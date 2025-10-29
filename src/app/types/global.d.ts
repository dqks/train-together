declare module "*.module.scss" {
    interface IClassNames {
        [className: string]: string
    }
    const classNames: IClassNames;
    export = classNames;
}

declare module "*.svg" {
    import React, { SVGProps } from "react"
    const SVG: React.FC<React.SVGProps<SVGProps<SVGElement>>>
    export default SVG
}

declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";