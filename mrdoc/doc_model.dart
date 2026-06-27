class MRDocumento {
  final String id;
  final String titulo;
  final String conteudo;
  final DateTime dataCriacao;
  final String? autorId;

  MRDocumento({
    required this.id,
    required this.titulo,
    required this.conteudo,
    required this.dataCriacao,
    this.autorId,
  });

  Map<String, dynamic> toMap() => {
    "titulo": titulo,
    "conteudo": conteudo,
    "dataCriacao": dataCriacao.toIso8601String(),
    "autorId": autorId,
  };

  static MRDocumento fromMap(String id, Map<String, dynamic> map) => MRDocumento(
    id: id,
    titulo: map["titulo"] ?? "Sem título",
    conteudo: map["conteudo"] ?? "",
    dataCriacao: DateTime.tryParse(map["dataCriacao"] ?? "") ?? DateTime.now(),
    autorId: map["autorId"],
  );
}