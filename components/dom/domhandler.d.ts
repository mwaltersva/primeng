export declare class DomHandler {
    static zindex: number;
    addClass(element: any, className: string): void;
    addMultipleClasses(element: any, className: string): void;
    removeClass(element: any, className: string): void;
    hasClass(element: any, className: string): boolean;
    siblings(element: any): any;
    find(element: any, selector: string): any[];
    findSingle(element: any, selector: string): any;
    index(element: any): number;
    relativePosition(element: any, target: any): void;
    absolutePosition(element: any, target: any): void;
    getHiddenElementOuterHeight(element: any): number;
    getHiddenElementOuterWidth(element: any): number;
    getHiddenElementDimensions(element: any): any;
    scrollInView(container: any, item: any): void;
    fadeIn(element: any, duration: number): void;
    fadeOut(element: any, ms: any): void;
    getWindowScrollTop(): number;
    getWindowScrollLeft(): number;
    matches(element: any, selector: string): boolean;
    getOuterWidth(el: any, margin?: any): any;
    getHorizontalPadding(el: any): number;
    getHorizontalMargin(el: any): number;
    innerWidth(el: any): any;
    width(el: any): any;
    getOuterHeight(el: any, margin?: any): any;
    getHeight(el: any): number;
    getWidth(el: any): number;
    getViewport(): any;
    getOffset(el: any): {
        left: any;
        top: any;
    };
    equals(obj1: any, obj2: any): boolean;
    getUserAgent(): string;
    isIE(): boolean;
}
