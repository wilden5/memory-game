import './style.css'
import {createHeader} from "./components/header/header.js";

const initApp = () => {
    const headerElement = createHeader();

    document.body.appendChild(headerElement);
}

initApp();