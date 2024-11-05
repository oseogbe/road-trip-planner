import '../css/app.css';
import './bootstrap';

import { createInertiaApp } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createApp, h } from 'vue';
import { ZiggyVue } from '../../vendor/tightenco/ziggy';
import VueGoogleMaps from '@fawmi/vue-google-maps';
import Toast from "vue-toastification";

import "vue-toastification/dist/index.css";

const appName = import.meta.env.VITE_APP_NAME || 'Road Trip Planner';

createInertiaApp({
    title: (title) => {
        return title ? `${title} - ${appName}` : appName
    },
    resolve: (name) =>
        resolvePageComponent(
            `./pages/${name}.vue`,
            import.meta.glob('./pages/**/*.vue'),
        ),
    setup({ el, App, props, plugin }) {
        return createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(ZiggyVue)
            .use(VueGoogleMaps, {
                load: {
                    key: import.meta.env.VITE_APP_GOOGLE_API_KEY,
                    libraries: "places"
                }
            })
            .use(Toast)
            .mount(el);
    },
    progress: {
        color: '#6C761A',
    },
});
