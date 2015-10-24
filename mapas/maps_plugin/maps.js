$(function() {
    if ($('#bogota').length) {
        $('#bogota').vectorMap({
            map: 'bogota',
            onLabelShow: function(event, a, code) {
                if(/[0-9]/.test(code)) {
                } else {
                    event.preventDefault();
                }
            },
            onRegionOver: function(event, code) {
                if(/[0-9]/.test(code)) {
                    if (code == '14' || code == '20') {
                        event.preventDefault();
                    }
                } else {
                    event.preventDefault();
                }
            },
            onRegionSelect: function(element, code, region) {
                if(/[0-9]/.test(code)) {
                    if (code == '14' || code == '20') {
                        event.preventDefault();
                    }
                } else {
                    event.preventDefault();
                }
            },
            onRegionClick: function(element, code, region)
            {
                if(/[0-9]/.test(code)) {
                    var url = link_data_bogota[code];

                    if (code != '14' && code != '20') {
                        window.location = url;
                    } else {
                        event.preventDefault();
                    }
                } else {
                    event.preventDefault();
                }
            }
        });
    }
    if ($('#colombia').length) {
        $('#colombia').vectorMap({
            map: 'colombia',
            borderOpacity: 0.95,
            borderWidth: 10,
            onRegionOver: function(event, code) {
                if (code == "01" || code == "33") {
                    console.log(code);
                    event.preventDefault();
                }
            },
            onRegionSelect: function(element, code, region) {
                if (code == "01" || code == "33") {
                    console.log(code);
                    event.preventDefault();
                }
            },
            onRegionClick: function(element, code, region)
            {
              var url = link_data_colombia[code];

              if (!(code == "01" || code == "33")) {
                console.log(code);
                window.location = url;
              } else {
                event.preventDefault();
              }
            }
        });
    }
});
