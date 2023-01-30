//incluce at the page load
$('#includedContent').load('./shihTzu/shihTzuBreed.html');

//include on click
const clickHandler = (e) => {
  $(function () {
    $('#includedContent').load(e);
  });
};
