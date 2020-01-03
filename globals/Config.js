const internal = {};

module.exports = internal.Global =  class {
    constructor() { 
        this.SERVER_URL = 'http://localhost:3001' 

        this.ONESIGNAL_REST_API = "OTMwNjNkZGUtYTIxZi00ZTVlLTg4YTAtN2Q2MTZiOGQ4YWYw" 
        this.ONESIGNAL_APP_ID = "fa3ec5e3-d8ed-4ee3-ab57-93abfc3cd05d" 
    } 
 
     getServerUrl(){
        return this.SERVER_URL
    }
    
    getOneSignalAppID(){
        return this.ONESIGNAL_APP_ID
    }

    getOneSignalRestAPI(){
        return this.ONESIGNAL_REST_API
    }

    getInt2Text(val){
        return ('0000000000000000'+val).slice(-16);
    }
}