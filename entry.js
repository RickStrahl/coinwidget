import './style.css';
import './semantic/dist/semantic.min.css';
import './semantic/dist/semantic.min.js';

import Button from './components/button.js';
import Modal from './components/modal.js';
const RootDocument = document.getElementById('coinwidget');

let buttonNode = document.createElement('div');
let modalNode = document.createElement('div');
RootDocument.appendChild(buttonNode);
RootDocument.appendChild(modalNode);

let buttonConfig = {
    renderNode: buttonNode,
    type: RootDocument.getAttribute('data-type'),
    icon: RootDocument.getAttribute('data-icon') == 'true',
    text: RootDocument.getAttribute('data-text')
};

let modalConfig = {
    renderNode: modalNode,
    wallet: RootDocument.getAttribute('data-wallet')
};

let button = new Button(buttonConfig);
let modal = new Modal(modalConfig);

button.setModalId(modal.id);
button.render();
modal.render();
