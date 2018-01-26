function myFunction() {
  var cols = ["email","prenom","nom","spe","tel"];
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheets()[0];
  var range = sheet.getRange("A1:E12");
  var values = range.getValues();
  for (var i = 0; i < values.length; i++) {
    var contacts = ContactsApp.getContactsByName(values[i][1]+" "+values[i][2]);
    if (contacts.length == 0){
      var contact = ContactsApp.createContact(values[i][1],values[i][2],values[i][0]);
      contact.addPhone(ContactsApp.Field.WORK_PHONE,values[i][4]);
    }else {
      var phone = contacts[0].addPhone(ContactsApp.Field.WORK_PHONE,values[i][4]);
     }
  }
}

