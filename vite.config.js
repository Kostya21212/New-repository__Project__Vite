import { defineConfig} from "vite";
import { resolve } from 'path';

export default defineConfig({
    base: "/New-repository__Project__Vite/",
    build:{
        rollupOptions:{
            input:{
                main: resolve(__dirname, 'index.html'),
                about: resolve(__dirname, 'pages/about.html')
            },
        },
    },
})