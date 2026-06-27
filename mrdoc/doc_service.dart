import 'package:cloud_firestore/cloud_firestore.dart';
import 'doc_model.dart';

class MRDocService {
  final FirebaseFirestore _db = FirebaseFirestore.instance;

  Future<void> salvar(MRDocumento doc) async {
    await _db.collection("documentos").add(doc.toMap());
  }

  Stream<List<MRDocumento>> listarPorUsuario(String usuarioId) {
    return _db
        .collection("documentos")
        .where("autorId", isEqualTo: usuarioId)
        .orderBy("dataCriacao", descending: true)
        .snapshots()
        .map((snap) => snap.docs.map((d) => MRDocumento.fromMap(d.id, d.data())).toList());
  }
}