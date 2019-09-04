$(document).ready(function(){
  let students = [];

  $("form").submit(function(evt){
    evt.preventDefault();

    let newLanguage = $("#language").children("option:selected").val();
    let newFirstName = $("#firstName").val();
    let newLastName = $("#lastName").val();

    let newStudent =
      {
        language: newLanguage,
        firstName: newFirstName,
        lastName: newLastName
      };

      $("#language").children("option:selected").prop("selected", false);
      $("#firstName").val("");
      $("#lastName").val("");

    students.unshift(newStudent);
    printTable(students);
  });

  // Functions that prints the table.
  function printTable(students) {
    let table = "<tbody id='table_content'>";
    jQuery.each( students, function( i, val ) {
      table += "<tr><td>"+students[i].language+"</td><td>"+students[i].firstName+"</td><td>"+students[i].lastName+"</td></tr>";
    });
    table += "</tbody>";
    $("#table_content").replaceWith(table);
  };
});
