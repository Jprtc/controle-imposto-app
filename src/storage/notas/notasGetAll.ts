import AsyncStorage from "@react-native-async-storage/async-storage";
import { NOTAS_COLLECTION } from "../storageConfig";
import { storageNotasDTO } from "../storageNotasDTO";

export async function notasGetAll() {
  try {
    const storage = await AsyncStorage.getItem(NOTAS_COLLECTION);
    console.log(storage);

    const spending: storageNotasDTO[] = storage ? JSON.parse(storage) : [];

    return spending;
  } catch (error) {
    console.log("Error fetching data", error);
    throw error;
  }
}
