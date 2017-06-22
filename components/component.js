import randtoken from 'rand-token';

class Component {
    constructor(renderNode, template) {
        this.renderNode = renderNode;
        this.id = this.generateId();
        this.template = template;
    }

    render() {
        this.renderNode.innerHTML = this.runTemplate();
        this.initListeners();
    }

    getHTMLNode() {
        return document.getElementById(this.id);
    }

    runTemplate() {
        return this.template(this);
    }

    generateId() {
        return 'coinwidget--' + randtoken.generate(16);
    }
}

export default Component;
