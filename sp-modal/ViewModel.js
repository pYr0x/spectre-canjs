import DefineMap from 'can-define/map/map';

/**
 * @class ViewModel
 * @memberof sp-modal
 *
 * @description A `<sp-modal />` component's ViewModel
 */
export default DefineMap.extend('ModalDialog', {
    /** @lends sp-modal.ViewModel.prototype */
    /**
     * Whether or not this modal is currently active. The default is `false`
     * @type {HTMLBoolean}
     * @memberof sp-modal.ViewModel.prototype
     */
    active: {default: false, type: 'htmlbool'},
    /**
     * Whether or not to use a custom body content for the modal. The default is `false`.
     * This overrides the title property and modal-body divs displayed by displaying
     * only the content passed to the `<sp-modal></sp-modal>` component
     * @type {HTMLBoolean}
     * @memberof sp-modal.ViewModel.prototype
     */
    custom: {default: false, type: 'htmlbool'},
    /**
     * Flag to make this modal a small (`modal-sm`) modal. The default is `false`
     * @type {HTMLBoolean}
     * @memberof sp-modal.ViewModel.prototype
     */
    small: {default: false, type: 'htmlbool'},
    /**
     * The title displayed in the modal header
     * @type {String}
     * @memberof sp-modal.ViewModel.prototype
     */
    title: {type: 'string'},
    /**
     * Whether or not to display this modals backdrop. The default is `true`.
     * @type {Boolean}
     * @memberof sp-modal.ViewModel.prototype
     */
    backdrop: {default: true, type: 'boolean'},
    /**
     * Shows this modal
     */
    show () {
        this.active = true;
        this.dispatch('show');
    },
    /**
     * Hides this modal
     */
    hide () {
        this.active = false;
        this.dispatch('hide');
    },
    /**
     * Toggles the state of this modal visibility
     * @param {Boolean} visible An optional property to set the visible state to
     */
    toggle (visible) {
        if (typeof visible !== 'undefined') {
            this.active = Boolean(visible);
        } else {
            this.active = !this.active;
        }
    }
});