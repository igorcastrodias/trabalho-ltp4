export class LocalStorageHelper{
    static addLocalStorage(chave:string, valor:string){
        localStorage.setItem(chave, valor);
    }

    static getLocalStorage(chave:string){
        let items = localStorage.getItem(chave);
        return items;
    }
}