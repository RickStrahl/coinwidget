import Component from './component.js';
import ModalTemplate from '../templates/modal.handlebars';
import bitcoinImg from '../bitcoin_small.png';

class Modal extends Component {
    constructor({renderNode, wallet}) {
        super(renderNode, ModalTemplate);
        this.wallet = wallet;
        this.bitcoinImg = bitcoinImg;
    }

    initListeners() {}
}

export default Modal;
