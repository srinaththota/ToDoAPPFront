import { Component } from '@angular/core';
import {HttpsampleService} from './httpsample.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tasks="id:20, text:'abcde',status:true";
  
  constructor(private httpsample:HttpsampleService){}

  onSave(){
    this.httpsample.putTasks(this.tasks).subscribe(
      (response:Response)=>console.log(response),
      (error)=>console.log(error)
    );
    
  }

  onFetch(){
    this.httpsample.getTasks().subscribe(
      (response: Response)=> {
        const data=response.json();
        console.log(data);
      }
    );
  }
  
}
