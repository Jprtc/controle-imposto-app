import AsyncStorage from "@react-native-async-storage/async-storage";
import { SALES_COLLECTION } from "../storageConfig";
import { storageSalesDTO } from "../storageSalesDTO";

export async function salesGetAll() {
  try {
    const storage = await AsyncStorage.getItem(SALES_COLLECTION)
    console.log(storage)

    const spending: storageSalesDTO[] =
      storage ? JSON.parse(storage) : []

    return spending

  } catch (error) {
    console.log('Error fetching data',error)
    throw error;
  }
}