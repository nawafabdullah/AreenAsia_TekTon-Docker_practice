GamepadButton.onclick = function init() {
    UiNotifcation.init(
        'Title',
        'Notification Message Here',
        {
            afterRender: function (_this, template) {
                setTimeout(() => {
                    template.classList.add('is-active');
                }, 10)
            },
            beforeDestroy: function (_this, template) {
                if (!template.classList.contains('is-active')) {
                    return;
                }

                _this.options.shouldDestroy = false;
                template.classList.remove('is-active');
                template.addEventListener('transitionend', () => {
                    _this.options.shouldDestroy = true;
                    _this.destroy();
                });
            }
        }
    );
}