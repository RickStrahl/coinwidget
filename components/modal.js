import Component from './component.js';
import ModalTemplate from '../templates/modal.handlebars';

class Modal extends Component {
    constructor({renderNode, wallet}) {
        super(renderNode, ModalTemplate);
        this.wallet = wallet;
    }

    initListeners() {}
}

export default Modal;
