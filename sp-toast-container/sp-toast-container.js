import Component from 'can-component';
import ViewModel from './ViewModel';
import template from './sp-toast-container.stache';

/**
 * A controller that adds and removes toasts from the dom
 * <iframe src="../sp-toast-container/demo/index.html" style="border: 1px solid #ccc; width:100%; height:300px;"></iframe>
 * @see sp-toast
 * @module sp-toast-container
 * @example
 * <sp-toast-container />
 */
Component.extend({
    tag: 'sp-toast-container',
    ViewModel: ViewModel,
    view: template
});
