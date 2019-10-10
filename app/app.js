import Vue from "nativescript-vue";
import FTNS from "@friendly-tnsvue/vue-plugin";
import Home from "./components/Home";

Vue.use(FTNS);

new Vue({

    template: `
        <Frame>
            <Home />
        </Frame>`,

    components: {
        Home
    }
}).$start();
