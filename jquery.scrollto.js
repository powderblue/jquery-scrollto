/*globals jQuery, window*/
/**
 * @author Dan Bettles <dan@powder-blue.com>
 * @copyright Powder Blue Ltd 2014
 */

jQuery.fn.extend({

    /**
     * @param {Object} [oOptions]
     * @returns {jQuery}
     */
    scrollTo: function (oOptions) {
        var oFinalOptions = jQuery.extend({
                duration: 500,
                verticalOffset: 0,
                complete: undefined
            }, oOptions || {}),
            oTargetEl,
            offsetTop,
            scrollerSelector = /\bSafari\b/.test(window.navigator.userAgent) ? 'body' : 'html';

        if (!this.size()) {
            return this;
        }

        oTargetEl = this.first();
        offsetTop = oTargetEl.offset().top + oFinalOptions.verticalOffset;

        jQuery(scrollerSelector).animate({scrollTop: offsetTop}, {
            duration: oFinalOptions.duration,
            complete: oFinalOptions.complete
        });

        return this;
    }
});