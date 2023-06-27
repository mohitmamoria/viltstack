import { h, render } from 'vue';

class Overlay {
    constructor(component, props = {}) {
        this.component = component;
        this.props = props;
        return this.show();
    }

    show() {
        let mountEl = document.createElement('div');
        document.body.appendChild(mountEl);

        const destroy = () => {
            mountEl.remove();
        };

        return new Promise((resolve, reject) => {
            this.props.onResolve = (response) => {
                destroy();
                resolve(response);
            };

            this.props.onReject = (error) => {
                destroy();
                reject(error);
            };

            let overlay = h(this.component, this.props);

            render(overlay, mountEl);
        });
    }
}

export function useOverlay(component, props = {}) {
    return new Overlay(component, props);
}
