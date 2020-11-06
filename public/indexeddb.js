const request = indexedDB.open("budgetdb", 1);

request.onupgradeneeded = ({target}) => {
    const db = target.result;
    const objectStore = db.createObjectstore("transactions");
};

request.onsuccess = event => {
    console.log(request.result);
};