import { h, render } from 'vue';

class Overlayer {
    static show(component, props = {}) {
        let mountEl = document.createElement('div');
        document.body.appendChild(mountEl);

        const destroy = () => {
            mountEl.remove();
        };

        return new Promise((resolve, reject) => {
            props.onResolve = (response) => {
                destroy();
                resolve(response);
            };

            props.onReject = (error) => {
                destroy();
                reject(error);
            };

            let overlay = h(component, props);

            render(overlay, mountEl);
        });
    }
}

export default Overlayer;
