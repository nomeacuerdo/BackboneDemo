$(function() {
    if ($('#bogota').length) {
        $('#bogota').vectorMap({
            map: 'bogota',
            onRegionOver: function(event, code) {
                if (code == '14' || code == '20') {
                    event.preventDefault();
                }
            },
            onRegionSelect: function(element, code, region) {
                if (code == '14' || code == '20') {
                    event.preventDefault();
                }
            },
            onRegionClick: function(element, code, region)
            {
              var url = link_data_bogota[code];

              if (code != '14' && code != '20') {
                window.location = url;
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
                if (code == "01" || code == "13" || code == "15" || code == "16" || code == "24" || code == "31" || code == "32" || code == "33") {
                    event.preventDefault();
                }
            },
            onRegionSelect: function(element, code, region) {
                if (code == "01" || code == "13" || code == "15" || code == "16" || code == "24" || code == "31" || code == "32" || code == "33") {
                    event.preventDefault();
                }
            },
            onRegionClick: function(element, code, region)
            {
              var url = link_data_colombia[code];

              if (!(code == "01" || code == "13" || code == "15" || code == "16" || code == "24" || code == "31" || code == "32" || code == "33")) {
                window.location = url;
              } else {
                event.preventDefault();
              }
            }
        });
    }
});
