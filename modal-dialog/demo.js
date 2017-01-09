import 'font-awesome/css/font-awesome.css';
import 'spectre.css/dist/spectre.css';
import 'modal-dialog/';
import 'modal-dialog/confirm-dialog';

import stache from 'can-stache';
import DefineMap from 'can-define/map/map';

var render = stache(document.getElementById('demo-html').innerHTML);

var viewModel = new DefineMap({
    modal1: false,
    modal2: false,
    modal3: false,
    confirm1: false,
    onAccept () {
        console.log(arguments);
    },
    onReject () {
        console.log(arguments);
    },
    showModal (name) {
        this[name] = true;
    },
    hideModal (name) {
        this[name] = false;
    }
});

document.body.appendChild(render(viewModel));
