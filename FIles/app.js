//appointment 1
$('#breed').fadeIn('slow');

//include on click
const clickHandlerBreed = () => {
  console.log('object');
  $('#plan').fadeOut('slow');
  $('#summary').fadeOut('slow');
  $('#steps').fadeOut('slow');
  $('#details').fadeOut('slow', function () {
    $('#breed').fadeIn('slow');
  });
};
const clickHandlerDetails = () => {
  console.log('object');
  $('#plan').fadeOut('slow');
  $('#summary').fadeOut('slow');
  $('#steps').fadeOut('slow');
  $('#breed').fadeOut('slow', function () {
    $('#details').fadeIn('slow');
  });
};
const clickHandlerPlan = () => {
  console.log('object');
  $('#details').fadeOut('slow');
  $('#summary').fadeOut('slow');
  $('#steps').fadeOut('slow');
  $('#breed').fadeOut('slow', function () {
    $('#plan').fadeIn('slow');
  });
};
const clickHandlerSteps = () => {
  console.log('object');
  $('#details').fadeOut('slow');
  $('#summary').fadeOut('slow');
  $('#plan').fadeOut('slow');
  $('#breed').fadeOut('slow', function () {
    $('#steps').fadeIn('slow');
  });
};
const clickHandlerSummary = () => {
  console.log('object');
  $('#details').fadeOut('slow');
  $('#plan').fadeOut('slow');
  $('#steps').fadeOut('slow');
  $('#breed').fadeOut('slow', function () {
    $('#summary').fadeIn('slow');
  });
};
