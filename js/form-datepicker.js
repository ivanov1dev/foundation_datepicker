(function ($) {

    Drupal.datePickerSettings = {
        default: {
            language: "ru",
            autoclose: true,
            todayHighlight: true,
            orientation: "common bottom"
        }
    };

    Drupal.behaviors.bootstrapDatepicker = {
        attach: function (context, settings) {

            $(".date-picker").once(function() {
                var pickers = $(this);

                pickers.each(function() {
                    var picker = $(this);
                    var type = picker.data('picker-type');

                    if (!(type in Drupal.datePickerSettings)) {
                        type = 'default';
                    }

                    picker
                        .datepicker(Drupal.datePickerSettings[type])
                        .on("show", function(e) {
                            $(".datepicker").css({ "margin-top": "38px" })
                        });
                });
            });
        }
    };

}(jQuery));
