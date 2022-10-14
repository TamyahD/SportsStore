import { Directive, Input, TemplateRef,
    ViewContainerRef, SimpleChanges, Attribute } from "@angular/core";

@Directive({
    selector: "[counterOf]"
})
export class CounterDirective {
    constructor(
        private container :ViewContainerRef,
        private template :TemplateRef<Object>) {
    }
    
    @Input("counterOf")
    counter :number;

    ngOnChanges(changes :SimpleChanges) {
        this.container.clear();
        for (let idx=0; idx<this.counter; idx++) {
            this.container.createEmbeddedView(this.template,
                new CounterDirectiveContext(idx +1));
        }
    }
}
class CounterDirectiveContext {
    constructor(public $implicit :any) {}
}

