import {
  DocumentData,
  Firestore,
  WithFieldValue,
} from '@google-cloud/firestore';

export type FirestoreOperationResult = {
  success: boolean;
  error?: unknown;
};

const firestoreCredentials = process.env.GCP_SERVICE_ACCOUNT_KEY;
if (!firestoreCredentials) {
  console.warn('Missing GCP_SERVICE_ACCOUNT_KEY in env: using {}');
}

const db = new Firestore({
  projectId: process.env.GCP_PROJECT,
  credentials: JSON.parse(firestoreCredentials || '{}'),
  databaseId: 'mainnet',
});

export const read = async <T>(
  collection: string,
  ref: string
): Promise<T | null> => {
  const doc = await db.collection(collection).doc(ref).get();
  if (!doc.exists) {
    return null;
  }
  return doc.data() as T;
};

export const readAll = async <T>(collection: string): Promise<T[]> =>
  (await db.collection(collection).get()).docs.map((d) => ({
    id: d.id,
    ...d.data(),
  })) as T[];

export const write = async <T extends WithFieldValue<DocumentData>>(
  collection: string,
  ref: string,
  data: T
): Promise<FirestoreOperationResult> => {
  try {
    await db.collection(collection).doc(ref).set(data);
    return { success: true };
  } catch (error) {
    console.error(`Error writing to ${collection}/${ref}`, error);
    return { success: false, error };
  }
};

export const writeBatch = async (
  writes: {
    collection: string;
    ref: string;
    data: WithFieldValue<DocumentData>;
  }[]
): Promise<FirestoreOperationResult> => {
  try {
    const batch = db.batch();
    for (const write of writes) {
      batch.set(db.collection(write.collection).doc(write.ref), write.data);
    }
    await batch.commit();

    return { success: true };
  } catch (error) {
    console.error(`Error writing batch`, error);
    return { success: false, error };
  }
};

export const update = async (
  collection: string,
  ref: string,
  data: WithFieldValue<DocumentData>
): Promise<FirestoreOperationResult> => {
  try {
    await db.collection(collection).doc(ref).update(data);
    return { success: true };
  } catch (error) {
    console.error(`Error updating ${collection}/${ref}`, error);
    return { success: false, error };
  }
};

export const destroy = async (
  collection: string,
  ref: string
): Promise<FirestoreOperationResult> => {
  try {
    await db.collection(collection).doc(ref).delete();
    return { success: true };
  } catch (error) {
    console.error(`Error deleting ${collection}/${ref}`, error);
    return { success: false, error };
  }
};

export const destroyBatch = async (
  destroys: { collection: string; ref: string }[]
): Promise<FirestoreOperationResult> => {
  try {
    const batch = db.batch();
    for (const destroy of destroys) {
      batch.delete(db.collection(destroy.collection).doc(destroy.ref));
    }
    await batch.commit();

    return { success: true };
  } catch (error) {
    console.error(`Error deleting batch`, error);
    return { success: false, error };
  }
};

export const isDocumentNotFoundError = (err: Error): boolean =>
  err.message.startsWith('Doc at ref ') && err.message.endsWith(' not found');

export const catchDocumentNotFound = (err: Error): null => {
  if (isDocumentNotFoundError(err)) return null;
  throw err;
};
