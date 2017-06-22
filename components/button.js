import Component from './component.js';
import ButtonTemplate from '../templates/button.handlebars';

class Button extends Component {
    constructor({renderNode, type, text, icon, modalId}) {
        super(renderNode, ButtonTemplate);

        this.type = type || '';
        this.text = text || 'Donate bitcoins';
        this.icon = icon || false;
        this.modalId = modalId || '';
    }

    initListeners() {
        const HTMLNode = this.getHTMLNode();
        HTMLNode.addEventListener('click', this.onButtonClick.bind(this));
    }

    onButtonClick(event) {
        $('#' + this.modalId).modal('show');
    }

    setModalId(modalId) {
        this.modalId = modalId || '';
    }
}

export default Button;
