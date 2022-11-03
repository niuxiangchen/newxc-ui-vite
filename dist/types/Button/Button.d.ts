import { PropType } from "vue";
export declare type ISize = "small" | "medium" | "large";
export declare type IColor = "black" | "gray" | "red" | "yellow" | "green" | "blue" | "indigo" | "purple" | "pink";
export declare const props: {
    readonly size: {
        readonly type: PropType<ISize>;
        readonly default: "medium";
    };
    readonly color: {
        readonly type: PropType<IColor>;
        readonly default: "blue";
    };
    readonly round: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly plain: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly icon: {
        readonly type: StringConstructor;
        readonly default: "";
    };
};
declare const _default: import("vue").DefineComponent<{
    readonly size: {
        readonly type: PropType<ISize>;
        readonly default: "medium";
    };
    readonly color: {
        readonly type: PropType<IColor>;
        readonly default: "blue";
    };
    readonly round: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly plain: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly icon: {
        readonly type: StringConstructor;
        readonly default: "";
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    readonly size: {
        readonly type: PropType<ISize>;
        readonly default: "medium";
    };
    readonly color: {
        readonly type: PropType<IColor>;
        readonly default: "blue";
    };
    readonly round: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly plain: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly icon: {
        readonly type: StringConstructor;
        readonly default: "";
    };
}>>, {
    readonly size: ISize;
    readonly color: IColor;
    readonly round: boolean;
    readonly plain: boolean;
    readonly icon: string;
}>;
export default _default;
