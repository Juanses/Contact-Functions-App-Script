function myFunction() {
  var cols = ["email","prenom","nom","spe","email"];
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheets()[0];
  var range = sheet.getActiveRange();
  var values = range.getValues();
  for (var i = 0; i < values.length; i++) {
   
  }
  
} 
