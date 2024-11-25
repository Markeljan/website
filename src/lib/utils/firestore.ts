import { Firestore } from '@google-cloud/firestore';

// TODO(bh2smith) this is not a great approach.
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
