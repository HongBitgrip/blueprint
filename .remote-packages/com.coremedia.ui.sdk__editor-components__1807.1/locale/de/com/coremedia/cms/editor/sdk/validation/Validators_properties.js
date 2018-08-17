/**
 * Properties class for ResourceBundle "Validators" and Locale "de".
 */
Ext.define("com.coremedia.cms.editor.sdk.validation.Validators_properties_de", {
  override: "com.coremedia.cms.editor.sdk.validation.Validators_properties",
  "Validator_internalError_text": "Bei der Validierung kam es zu einem internen Fehler: {0}",
  "Validator_EmailValidator_text": "Dieses Feld muss eine gültige E-Mail-Adresse enthalten.",
  "Validator_ListMaxLengthValidator_text": "Die Liste darf maximal {0} Einträge enthalten.",
  "Validator_ListMinLengthValidator_text": "Die Liste muss mindestens {0} Einträge enthalten.",
  "Validator_MaxIntegerValidator_text": "Der Wert darf höchstens {0} sein.",
  "Validator_MaxLengthValidator_text": "Der Text darf nicht länger als {0} Zeichen sein.",
  "Validator_MinIntegerValidator_text": "Der Wert muss mindestens {0} sein.",
  "Validator_MinLengthValidator_text": "Der Text darf nicht kürzer als {0} Zeichen sein.",
  "Validator_NotEmptyValidator_text": "Dieses Feld darf nicht leer sein.",
  "Validator_RegExpValidator_text": "Der Text muss dem Muster '{0}' entsprechen.",
  "Validator_UniqueListEntriesValidator_text": "Die Einträge in der Liste müssen eindeutig sein.",
  "Validator_UriValidator_text": "Dieses Feld muss eine gültige URI enthalten.",
  "Validator_UrlValidator_text": "Dieses Feld muss eine gültige URL enthalten.",
  "Validator_LinkListMaxLengthValidator_text": "Die Liste darf maximal {0} Inhalte enthalten.",
  "Validator_LinkListMinLengthValidator_text": "Die Liste muss mindestens {0} Inhalte enthalten.",
  "Validator_MaxBlobSizeValidator_text": "Der Blob nach darf höchstens {0} Bytes groß sein.",
  "Validator_DeadLinkValidator_text": "Ein Feld darf keine Verweise auf gelöschten Inhalt '{0}' enthalten.",
  "Validator_CropSizeValidator_text": "Die Auflösung für den Ausschnitt {0} ist kleiner als {1}x{2}.",
  "Validator_NoImageDimensions_text": "Die Größe des Bildes konnte nicht ermittelt werden.",
  "Validator_MissingTransformDefinition_text": "Die Definition des Ausschnitts muss für {0} gesetzt sein.",
  "Validator_StructLinkListNotEmptyValidator_text": "Dieses Feld darf nicht leer sein.",
  "Validator_StructLinkListMaxLengthValidator_text": "Die Liste darf maximal {0} Inhalte enthalten.",
  "Validator_StructLinkListMinLengthValidator_text": "Die Liste muss mindestens {0} Inhalte enthalten.",
  "Validator_struct_list_index_exceeded_text": "Dieses Feld muss einen Positionswert zwischen 1 und {0} für den Inhalt '{1}' enthalten.",
  "Validator_struct_list_index_missing_text": "Dieses Feld muss einen Positionswert für den Inhalt '{0}' enthalten.",
  "Validator_struct_list_index_duplicate_text": "Dieses Feld enthält den Positionswert {0} doppelt für die Inhalte '{1}' und '{2}'.",
  "Validator_SiteManagerGroupValidator_text": "Manager-Gruppe existiert nicht.",
  "Validator_ImageWriteInterceptor.unreadableImage_text": "Das Bild konnte nicht geladen werden.",
  "Validator_ImageWriteInterceptor.noDimensions_text": "Die Größe des Bildes konnte nicht ermittelt werden.",
  "Validator_AvailableLocalesConfiguration.DUPLICATE_LOCALE_text": "Mehrfache Definition der selben Locale: '{0}' in Zeile {1}",
  "Validator_AvailableLocalesConfiguration.DUPLICATE_LOCALE_DISPLAY_NAME_text": "Locale '{0}' (Zeile {1}) wird gleich angezeigt wie Locale '{2}' (Zeile {3}): {4}",
  "Validator_AvailableLocalesConfiguration.INVALID_LOCALE_text": "Ungültige Locale: '{0}' in Zeile {1} (Meinten Sie: '{2}'?)",
  "Validator_master_version_property_invalid_text": "Die Master-Version muss größer Null und kleiner oder gleich der eingecheckten Version des Masters sein.",
  "Validator_not_localized_text": "Content wurde noch nicht lokalisiert und enthält noch den ursprünglichen Text aus dem Master.",
  "Validator_undetermined_localization_state_text": "Status der Lokalisierung des Contents konnte nicht ermittelt werden. Vollständige Überprüfung ist erforderlich.",
  "Validator_cross_locale_link_text": "Dieses Feld verweist auf den Content '{0}', der in einer Site mit einem anderen Locale liegt: '{2}'",
  "Validator_cross_site_link_text": "Dieses Feld verweist auf den Content '{0}', der in einer anderen Site liegt: '{1}'",
  "Validator_cross_site_locale_link_text": "Dieses Feld verweist auf den Content '{0}', der in einer anderen Site liegt: '{1} - {2}'",
  "Validator_image_map_image_missing_text": "Dieses Feld darf nicht leer sein.",
  "Validator_image_map_area_link_missing_text": "Für alle Bereiche müssen Linkziele gesetzt sein.",
  "Validator_image_map_overlay_configuration_insufficient_text": "Bitte aktivieren Sie mindestens eine Overlay Konfiguration.",
  "Validator_siteName_missing_text": "Eine Site-Definition muss einen Site-Namen definieren.",
  "Validator_siteName_different_from_master_text": "Eine Site-Definition muss den gleichen Site-Namen haben wie ihr Master: '{0}'.",
  "Validator_archive_not_archive_file_text": "Die hochgeladene Datei ist kein Zip- oder Jar-Archiv.",
  "Validator_validFrom_is_after_validTo_text": "Der Gültigkeitsbeginn liegt nach dem Gültigkeitsende.",
  "Validator_upload-limit-exceeded_text": "Die Bildgröße ({0} Pixel) überschreitet das erlaubte Maximum von {1} Pixel.",
  "Validator_insufficient-memory_text": "Das erforderliche Speichervolumen von {0} Bytes überschreitet das verfügbare freie Speichervolumen mit {1} Bytes. Versuchen Sie es noch einmal oder benachrichtigen Sie Ihren Systemadministrator.",
  "Validator_unsupported-mime-type_text": "Der MIME-Typ {0} wird nicht unterstützt.",
  "Validator_cannot-transform-blob_text": "Die Bildbearbeitung ist fehlgeschlagen (siehe Logdatei für Details)."
}, function() {
});