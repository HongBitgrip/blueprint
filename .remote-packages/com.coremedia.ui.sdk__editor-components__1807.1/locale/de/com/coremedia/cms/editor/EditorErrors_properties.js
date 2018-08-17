/**
 * Properties class for ResourceBundle "EditorErrors" and Locale "de".
 */
Ext.define("com.coremedia.cms.editor.EditorErrors_properties_de", {
  override: "com.coremedia.cms.editor.EditorErrors_properties",
  "editorStart_tooManyDocuments_title": "Wiederherstellung der Sitzung fehlgeschlagen",
  "editorStart_tooManyDocuments_message": "Ihre letzte Sitzung konnte nicht vollständig wiederhergestellt werden. Grund hierfür ist, dass Sie eine sehr große Anzahl von Inhalten in Bearbeitung hatten.",
  "checkedOutByOther_title": "In Bearbeitung durch '{0}'",
  "checkedOutByOther_message": "Dieser Inhalt wird bereits von '{0}' bearbeitet. Erst wenn '{0}' den Vorgang beendet hat, können Sie Ihrerseits Änderungen vornehmen.",
  "duplicateName_title": "Namenskonflikt",
  "duplicateName_message": "Es befindet sich bereits eine Datei desselben Namens an diesem Ort. Bitte wählen Sie einen neuen Namen und versuchen Sie es erneut.",
  "invalidName_title": "Ungültiger Name",
  "invalidName_message": "Der eingegebene Name ist ungültig. Der Name darf nicht leer sein, darf nicht '.' oder '..' lauten und darf keine '/'-Zeichen enthalten. Möglicherweise ist er auch zu lang. Leerzeichen am Anfang und am Ende des Namens werden entfernt. Bitte wählen Sie einen anderen Namen.",
  "invalidName_generic_message": "Der Name '{0}' ist ungültig. Der Name darf nicht leer sein, darf nicht '.' oder '..' lauten und darf keine '/'-Zeichen enthalten.",
  "publish_title": "Publikation nicht erfolgreich",
  "publish_message": "Die Publikation von '{0}' ist leider gescheitert. Bitte korrigieren Sie alle Unstimmigkeiten und versuchen Sie es erneut.",
  "notAuthorized_title": "Nicht genügend Rechte",
  "notAuthorized_message": "Sie haben nicht die nötige Berechtigung, um die gewünschte Aktion durchzuführen.",
  "invalidXmlPropertyValue_title": "Fehler beim Speichern",
  "invalidXmlPropertyValue_message": "Es ist ein Fehler beim Speichern aufgetreten. Daher wird Ihre Eingabe zurückgesetzt.\nMöglicherweise haben Sie einen Text aus der Zwischenablage eingefügt. Versuchen Sie es in diesem Fall mit der Funktion „Text unformatiert einfügen“.",
  "stringTooLong_title": "Fehler beim Speichern",
  "stringTooLong_message": "Es ist ein Fehler beim Speichern aufgetreten. Der eingegebene Text war zu lang. Daher wird Ihre Eingabe zurückgesetzt.",
  "maxCardinalityValue_title": "Hinzufügen nicht möglich",
  "maxCardinalityValue_message": "Die Liste enthält bereits die maximale Anzahl von Inhalten. Wenn Sie noch Inhalte hinzufügen möchten, löschen Sie einen Eintrag und versuchen Sie es erneut.",
  "delete_failedMessage_title": "Fehler beim Löschen",
  "delete_failedMessage_text": "Das Löschen von '{0}' ist gescheitert.",
  "delete_failedMessage_folderNotEmpty_sg_text": "Der Ordner '{0}' enthält Inhalte, die nicht gelöscht werden können.",
  "delete_failedMessage_documentNoRights_sg_text": "Sie haben nicht die nötige Berechtigung um den Inhalt '{0}' zu löschen.",
  "delete_failedMessage_folderNoRights_sg_text": "Sie haben nicht die nötige Berechtigung um den Ordner '{0}' zu löschen.",
  "delete_failedMessage_documentStillPublished_sg_text": "Der Inhalt '{0}' ist noch publiziert. Bitte ziehen Sie den Inhalt zurück und versuchen Sie es erneut.",
  "delete_failedMessage_folderStillPublished_sg_text": "Der Ordner '{0}' ist noch publiziert. Bitte ziehen Sie den Ordner zurück und versuchen Sie es erneut.",
  "delete_failedMessage_documentCheckedOutByOther_sg_text": "Der Inhalt '{0}' ist noch von Benutzer '{1}' in Bearbeitung und kann daher nicht gelöscht werden.",
  "generalError_title": "Fehler",
  "generalError_message": "Es ist ein Fehler aufgetreten. Bitte kontaktieren Sie Ihren Systemadministrator, wenn dieses Problem fortlaufend auftritt.",
  "sessionClosed_title": "Sitzung abgelaufen",
  "sessionClosed_message": "Sie sind mittlerweile nicht mehr beim CoreMedia Studio angemeldet. Diese Sperre setzt nach einer bestimmten Zeit ohne Aktivität ein und dient Ihrer Sicherheit.",
  "sessionClosed_button": "Erneut anmelden",
  "invalidationsRetrievalFailed_title": "Fehler",
  "invalidationsRetrievalFailed_text": "Der Server kann zur Zeit nicht erreicht werden. Die Änderungen der letzten Minute wurden möglicherweise nicht gesichert. Bitte kontaktieren Sie Ihren Systemadministrator, wenn dieses Problem fortlaufend auftritt.<br>Neuer Verbindungsversuch läuft ...",
  "copy_failedMessage_title": "Fehler beim Kopieren",
  "copy_failedMessage_text": "Das Kopieren ist leider gescheitert.",
  "startWorkflow_failedMessage_title": "Fehler beim Starten eines Workflows",
  "startWorkflow_failedMessage_text": "Beim Starten eines Workflows ist ein Fehler aufgetreten. Bitte setzen Sie sich mit Ihrem Administrator in Verbindung.",
  "startWorkflow_failedMessage_WORKFLOW_REPOSITORY_UNAVAILABLE_text": "Beim Starten eines Workflows ist ein Fehler aufgetreten. Der Workflow Server kann nicht angesprochen werden. Bitte setzen Sie sich mit Ihrem Administrator in Verbindung.",
  "startWorkflow_failedMessage_DOCUMENT_CHECKED_OUT_BY_OTHER_USER_text": "Der zu publizierende Inhalt ist noch von einem anderen Benutzer in Bearbeitung.",
  "startWorkflow_failedMessage_LINKED_DOCUMENT_CHECKED_OUT_BY_OTHER_USER_text": "Ein verlinkter Inhalt ist noch von einem anderen Benutzer in Bearbeitung, aber er müsste mit dem aktuellen Inhalt zusammen publiziert werden.",
  "startWorkflow_noopMessage_title": "Workflow unnötig",
  "startWorkflow_noopMessage_text": "Es war nicht notwendig, einen Workflow zu starten. Der Inhalt ist zwischenzeitlich in der aktuellen Version publiziert worden.",
  "dataTooOld_title": "Inhalt wurde geändert",
  "dataTooOld_message": "Der Inhalt ist von einem anderen Benutzer geändert worden und wird daher neu geladen. Ihre letzten Änderungen gehen leider verloren.",
  "markedForDeletion_title": "Inhalt wurde zum Löschen markiert",
  "markedForDeletion_message": "Der Inhalt wurde zum Löschen markiert und kann daher nicht geändert werden. Ihre letzten Änderungen gehen leider verloren.",
  "changePassword_invalidPassword_text": "Das Passwort ist ungültig.",
  "changePassword_passwordsDontMatch_text": "Neue Passwörter stimmen nicht überein.",
  "changePassword_generalError_text": "Ein interner Fehler ist aufgetreten.",
  "checkBefore_validationErrorWindowTitle": "Der Inhalt enthält Fehler",
  "checkBefore_validationErrorWindowTextSimple": "Der Inhalt enthält Fehler, sodass die letzte Operation im Augenblick nicht möglich ist. Korrigieren Sie die Fehler und versuchen Sie es erneut.",
  "checkBefore_validationErrorWindowText": "Der Inhalt enthält Fehler, sodass die letzte Operation im Augenblick nicht möglich ist. Wollen Sie den Inhalt öffnen und die Fehler korrigieren?",
  "checkBefore_validationErrorWindow_btn_OK": "OK",
  "checkBefore_validationErrorWindow_btn_openContent": "Ja",
  "checkBefore_validationErrorWindow_btn_dontOpenContent": "Nein",
  "saveSearch_noSaveOptionSelected_tooltiptext": "Es wurde keine Speicheroption angegeben.",
  "saveSearch_noSearchNameEntered_tooltiptext": "Es wurde kein Name angegeben.",
  "saveSearch_noSearchNameandOptionEntered_tooltiptext": "Name und Speicheroption sind nicht angegeben.",
  "saveSearch_searchFolderExists": "Ein Suchordner mit diesem Namen existiert schon.",
  "saveSearch_widgetExists": "Ein Widget mit diesem Namen existiert schon.",
  "saveSearch_searchFolderAndWidgetExist": "Ein Suchordner und ein Widget mit diesem Namen existieren schon.",
  "Workflow_content_locked_warning_title": "Gesperrt durch Workflow",
  "Workflow_content_locked_warning_message": "Der Inhalt ist momentan durch einen Workflow gesperrt. Ihre letzten Änderungen wurden zurückgesetzt."
}, function() {
});