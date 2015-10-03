$('#bogota').vectorMap({
    map: 'bogota',
    backgroundColor: '#FFFFFF',
    borderColor: '#FFFFFF',
    borderOpacity: 0.25,
    borderWidth: 1,
    color: '#74B700',
    enableZoom: false,
    hoverColor: '#116B08',
    hoverOpacity: null,
    normalizeFunction: 'linear',
    scaleColors: ['#00FF00', '#0000FF'],
    selectedColor: '#FF00FF',
    selectedRegion: null,
    showTooltip: true,
    scaleWidth: 0.084,
    scaleHeight: 0.085,
    offsetX: -1.25,
    offsetY: 330,
    onRegionOver: function(event, code) {
        if (code == '14' || code == '20') {
            event.preventDefault();
        }
    },
    onRegionClick: function(element, code, region)
    {
      /*
      var url = link_data[code];

      if (code != '14' && code != '20') {
        window.location = url;
      }
      */
      event.preventDefault();
    }
});
