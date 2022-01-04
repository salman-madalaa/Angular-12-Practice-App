import { HttpClient } from '@angular/common/http';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'USDINR'
})
export class USDINRPipe implements PipeTransform {
  obj:any;
  constructor(private http:HttpClient) { }

  transform(value: number, ...args: number[]): unknown {
    // const firstParameter = args[0];  // here we can get the list of parameters which we passed like (slice:2:6)...
    // const secondParameter = args[1];
    // const thirdParameter = args[2];
    // console.log(firstParameter);
    // console.log(secondParameter);
    // console.log(thirdParameter);

    //  this.http.get("https://api.fastforex.io/fetch-multi?from=USD&to=INR&api_key=demo").subscribe((data)=>{
    //   console.log(data);
    //   this.obj = JSON.stringify(data);
    // });


    return value * 75;  // here we can get the value of the pipe.
  }

}
