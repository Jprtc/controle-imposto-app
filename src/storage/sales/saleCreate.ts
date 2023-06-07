import AsyncStorage from '@react-native-async-storage/async-storage'
import { storageSalesDTO } from '../storageSalesDTO';
import { SALES_COLLECTION } from '../storageConfig';
import { salesGetAll } from './salesGetAll';

export async function saleCreate(newSale: storageSalesDTO ) {
  try {
    const storageSale = await salesGetAll()

    const storage = [...storageSale,newSale]
    console.log("Info found in storage when creating data: ",storageSale)
    console.log('entering new data: ',newSale)

    await AsyncStorage.setItem(SALES_COLLECTION,
      JSON.stringify(storage))
  } catch (error) {
    console.log('Error Creating data')
    throw error;
  }

}