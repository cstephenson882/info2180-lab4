document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('searchButton').addEventListener('click', function () {
      // Make AJAX request
      var ajax_request_1 = new XMLHttpRequest();
      ajax_request_1.onreadystatechange = function () {
        if (ajax_request_1.readyState == 4 && ajax_request_1.status == 200) {
          // Parse JSON response
          var superheroes = JSON.parse(ajax_request_1.responseText);
  
          // Build the list for the alert
          var alertText = '<ul>';
          superheroes.forEach(function (superhero) {
            alertText += '<li>' + superhero['alias'] + '</li>';
          });
          alertText += '</ul>';
  
          // Show the list in an alert
          alert(alertText);
        }
      };
  
      ajax_request_1.open('GET', 'superheroes.php', true);
      ajax_request_1.send();
    });
  });
  