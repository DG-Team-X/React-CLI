import BaseComponentGenerator from "./BaseComponentGenerator";
import ComponentGenerator from "./ComponentGenerator";
import PageGenerator from "./PageGenerator";
import StoreGenerator from "./StoreGenerator";

export default {
    page: PageGenerator,
    component: ComponentGenerator,
    store: StoreGenerator,
    baseComponent: BaseComponentGenerator,
}