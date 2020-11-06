const request = indexedDB.open("budgetdb", 1);

request.onsuccess = event => {
    console.log(request.result);
};