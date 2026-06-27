class MRCore {
  static const String versao = "1.1.0";
  static const String nomeSistema = "METAR DOC";
  static const String tagSistema = "MRC";

  static void inicializar() {
    debugPrint("✅ $tagSistema Core v$versao iniciado | $nomeSistema");
  }
}