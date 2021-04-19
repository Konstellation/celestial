export default class Message {
    type: string;
    builder: (input: Record<string, any>) => any;

    constructor({ type, builder }: { type: string; builder(input: Record<string, any>): any }) {
        this.type = type;
        this.builder = builder;
    }

    build(input: Record<string, any>): any {
        return this.builder(input);
    }
}
