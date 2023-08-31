// To parse this JSON data, do
//
//     final listModel = listModelFromJson(jsonString);

import 'dart:convert';

List<ListModel> listModelFromJson(String str) =>
    List<ListModel>.from(json.decode(str).map((x) => ListModel.fromJson(x)));

String listModelToJson(List<ListModel> data) =>
    json.encode(List<dynamic>.from(data.map((x) => x.toJson())));

class ListModel {
  String id;
  String content;
  DateTime createdAt;
  DateTime updatedAt;
  int v;

  ListModel({
    required this.id,
    required this.content,
    required this.createdAt,
    required this.updatedAt,
    required this.v,
  });

  factory ListModel.fromJson(Map<String, dynamic> json) => ListModel(
        id: json["_id"],
        content: json["content"],
        createdAt: DateTime.parse(json["createdAt"]),
        updatedAt: DateTime.parse(json["updatedAt"]),
        v: json["__v"],
      );

  Map<String, dynamic> toJson() => {
        "_id": id,
        "content": content,
        "createdAt": createdAt.toIso8601String(),
        "updatedAt": updatedAt.toIso8601String(),
        "__v": v,
      };
}
