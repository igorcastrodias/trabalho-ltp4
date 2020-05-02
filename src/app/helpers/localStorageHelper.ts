export class LocalStorageHelper{
    static addLocalStorage(chave:string, valor:string){
        let existing = localStorage.getItem(chave);
        let existingArray = existing ? existing.split(',') : [];
        existingArray.push(valor);
        localStorage.setItem(chave, existingArray.toString());
    }

    static getLocalStorage(chave:string){
        let existing = localStorage.getItem(chave);
        let existingArray = existing ? existing.split(',') : [];
        return existingArray;
    }
}