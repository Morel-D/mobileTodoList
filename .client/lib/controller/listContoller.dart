import 'package:get/state_manager.dart';
import '../service/listService.dart';
import '../controller/listContoller.dart';

class ListContoller extends GetxController {
  var isLoading = true.obs;
  var taskList = <ListModel>[].obs;

  @override
  void onInit() {
    fetchList();
    super.onInit()
  }

  void fetchList() async {
    try {
      isLoading(true);
      var list = await ListService.fetchList();
      if(list != null)
      {
        isLoading(false);
        taskList.value = list as List<ListModel>
      } else {
        print("At the controller base .. no data found");
      }
    } catch(error)
    {
      print("Something occurred at the controller base"$error.message);
    }
  }
}
