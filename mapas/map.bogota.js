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
