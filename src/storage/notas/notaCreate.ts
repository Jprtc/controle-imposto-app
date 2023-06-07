import AsyncStorage from "@react-native-async-storage/async-storage";
import { storageNotasDTO } from "../storageNotasDTO";
import { NOTAS_COLLECTION } from "../storageConfig";
import { notasGetAll } from "./notasGetAll";

export async function notaCreate(newNota: storageNotasDTO) {
  try {
    const storageNota = await notasGetAll();

    const storage = [...storageNota, newNota];
    console.log("Info found in storage when creating data: ", storageNota);
    console.log("entering new data: ", newNota);

    await AsyncStorage.setItem(NOTAS_COLLECTION, JSON.stringify(storage));
  } catch (error) {
    console.log("Error Creating data");
    throw error;
  }
}
