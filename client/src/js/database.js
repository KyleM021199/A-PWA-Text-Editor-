import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

//  A method that accepts some content and adds it to the database
export const putDb = async (content) =>{
  console.log('PUT to the database');
  const jateDB = await openDB ('jate', 1);
  const tx = jateDB.transaction('jate', 'readwrite');
  const store = tx.objectStore('jate');
  const request = store.put({id: 1, value: content});
  const result = await request;
  console.log('The data was saved to database', result.value);
};

// A method that gets all the content from the database
export const getDb = async () =>{
console.log('Get all from the database');
const jateDB = await openDB ('jate', 1);
const tx = jateDB.transaction('jate', 'readonly');
const store = tx.objectStore('jate');
const request = store.get(1);
const result = await request;
console.log("result.value", result.value);
if (result){
console.log('Data gotten from the database', result.value)
} else{
  console.log('Data was not found');
}
return result.value;
};

initdb();
