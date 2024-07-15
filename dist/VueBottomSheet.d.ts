declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    overlay: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    overlayColor: {
        type: import("vue").PropType<string>;
        default: string;
    };
    maxWidth: {
        type: import("vue").PropType<number>;
        default: number;
    };
    maxHeight: {
        type: import("vue").PropType<number>;
    };
    transitionDuration: {
        type: import("vue").PropType<number>;
        default: number;
    };
    overlayClickClose: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    canSwipe: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    hideDragHandle: {
        type: import("vue").PropType<boolean>;
        required: true;
        default: boolean;
    };
    roundness: {
        type: import("vue").PropType<string>;
        required: true;
        default: string;
    };
}, {
    open: () => void;
    close: () => Promise<void>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("opened" | "closed" | "dragging-up" | "dragging-down")[], "opened" | "closed" | "dragging-up" | "dragging-down", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    overlay: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    overlayColor: {
        type: import("vue").PropType<string>;
        default: string;
    };
    maxWidth: {
        type: import("vue").PropType<number>;
        default: number;
    };
    maxHeight: {
        type: import("vue").PropType<number>;
    };
    transitionDuration: {
        type: import("vue").PropType<number>;
        default: number;
    };
    overlayClickClose: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    canSwipe: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    hideDragHandle: {
        type: import("vue").PropType<boolean>;
        required: true;
        default: boolean;
    };
    roundness: {
        type: import("vue").PropType<string>;
        required: true;
        default: string;
    };
}>> & {
    onOpened?: ((...args: any[]) => any) | undefined;
    onClosed?: ((...args: any[]) => any) | undefined;
    "onDragging-up"?: ((...args: any[]) => any) | undefined;
    "onDragging-down"?: ((...args: any[]) => any) | undefined;
}, {
    overlay: boolean;
    overlayColor: string;
    maxWidth: number;
    transitionDuration: number;
    overlayClickClose: boolean;
    canSwipe: boolean;
    hideDragHandle: boolean;
    roundness: string;
}, {}>, {
    "drag-handle"?(_: {}): any;
    header?(_: {}): any;
    default?(_: {}): any;
    footer?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
