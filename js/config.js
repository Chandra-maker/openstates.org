export default {
  MAPBOX_ACCESS_TOKEN:
    "pk.eyJ1Ijoib3BlbnN0YXRlcyIsImEiOiJjamU2NmJ2dmsxdTFzMzRycTNhejNjdTUzIn0.QHziTq0NGFutvZzo9Wmc0w",
  MAP_BASE_STYLE: "mapbox://styles/mapbox/light-v9",
  MAP_SLD_SOURCE: "mapbox://openstates.sld",

  MAP_DISTRICTS_FILL: {
    id: "district-fill",
    type: "fill",
    paint: {
      // This color is borrowed from the OS.org stylesheets
      "fill-color": "#002f5a",
      "fill-opacity": 0.12,
    },
  },
  MAP_DISTRICTS_STROKE: {
    id: "district-stroke",
    type: "line",
    paint: {
      "line-color": "black",
      "line-opacity": 0.12,
      "line-width": 1.0,
    },
  },

  UPPER_CHAMBER_COLOR: "#ffd035",
  LOWER_CHAMBER_COLOR: "#2cceb0",
};
