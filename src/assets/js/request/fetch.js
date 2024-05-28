export default class FetchRequest {
    constructor(method, url, data = {}, isFormData = false){
        this.baseUrl = "http://localhost:3000/";

        this.method  = method;
        this.url     = this.baseUrl + url;
        this.data    = data;
        this.isFormData = isFormData;

        this.options = this.makeOptions();
    }

    makeOptions(){
        const options = {
            method: this.method,
            url: this.url,
        };

        if(this.method!="GET"){
            options.body = this.isFormData ? this.data : JSON.stringify(this.data);
        }
        if(!this.isFormData){
            options.headers = {
                'Content-Type': 'application/json',
            }
        }
        // else {
            // options.headers = {
            //     'Content-Type': this.isFormData ? 'multipart/form-data' : 'application/json',
            // }
        // }
    
        return options;
    }

    async send(successFn = () => {}, failureFn = () => {}) {
        try{
            await fetch(this.url, this.options)
                .then(response => response.json())
                .then(response => {
                    if(response.success){
                        successFn(response.data);
                    }
                    else{
                        failureFn(response.data);
                    }
                })
                .catch(err => {
                    const error = err.error!=undefined ? err.error : "";
                    failureFn({message: "Something went wrong!", error});
                });
        } catch(err) {
            const error = err.error!=undefined ? err.error : "";
            failureFn({message: "Something went wrong!", error});
        }
    }
}