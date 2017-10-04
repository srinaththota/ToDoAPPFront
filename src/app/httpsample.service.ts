import { Injectable } from '@angular/core';
import { Http ,Response} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class HttpsampleService {

  constructor(private http:Http) {    
   }

   putTasks(task:any){
    return this.http.post("http://localhost:8080/task",task);
       }

       getTasks(){
        return  this.http.get("http://localhost:8080/all");
         
       }
}
