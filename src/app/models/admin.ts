export class Admin {
    constructor(
        public userId: string, 
        private _jwt: string, 
        private _tokenExpirationDate: Date
    ){}

    get jwt(){
        if(!this._tokenExpirationDate || new Date() > this._tokenExpirationDate){
            return '';
        }
        return this._jwt;
    }
}