$(function() {
    if ($('#bogota').length) {
        $('#bogota').vectorMap({
            map: 'bogota',
            onRegionOver: function(event, code) {
                if (code == '14' || code == '20') {
                    event.preventDefault();
                }
            },
            onRegionClick: function(element, code, region)
            {
              var url = link_data[code];

              if (code != '14' && code != '20') {
                window.location = url;
              }
            }
        });
    } else if ($('#colombia').length) {
        $('#colombia').vectorMap({
            map: 'colombia',
            borderOpacity: 0.95,
            borderWidth: 10,
            onRegionOver: function(event, code) {
                if (code != "02" && code != "04" && code != "05" && code != "06" && code != "07" && code != "09" && code != "18" && code != "21" && code != "22" && code != "23") {
                    event.preventDefault();
                }
            },
            onRegionClick: function(element, code, region)
            {
              var url = link_data[code];

              if (!(code != "02" && code != "04" && code != "05" && code != "06" && code != "07" && code != "09" && code != "18" && code != "21" && code != "22" && code != "23")) {
                window.location = url;
              }
            }
        });
    }
});
