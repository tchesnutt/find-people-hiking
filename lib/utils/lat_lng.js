exports.validLatLng = function(min, num, max) {
  if(!isNaN(num) && (num >= min) && (num <= max)){
      return true;
    } else {
      return false;
    };
}
// valid lat -90, 90
// valid lng -180, 180
