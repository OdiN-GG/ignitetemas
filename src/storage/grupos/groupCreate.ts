import AsyncStorage from '@react-native-async-storage/async-storage';

import { groupsGetAll } from './groupGetAll';
import { GROUP_COLLECTION } from "../storageConfig";
import { AppError } from '@/src/utils/AppError';

export async function groupCreate(newGroup: string) {
  try {
    const storedGroups = await groupsGetAll();

    const VerificarSeJaExiste = storedGroups.includes(newGroup)

    if (VerificarSeJaExiste) {
      throw new AppError("O grupa digitado já existe")
    }

    const storage = JSON.stringify([...storedGroups, newGroup])
    
    await AsyncStorage.setItem(GROUP_COLLECTION, storage);
    
  } catch (error) {
    throw error;
  }
}