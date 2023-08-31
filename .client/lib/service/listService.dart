import '../model/listModel.dart';
import 'package:http/http.dart' as http;

class ListService {
  final String base_url = "http://localhost:5000/List";
  static var client = http.Client();

  static Future<List?> fetchList() async {
    var response = await client.get(Uri.parse(base_url));
    if (response.statusCode == 200) {
      return listModelFromJson(response.body);
    }
  }
}
