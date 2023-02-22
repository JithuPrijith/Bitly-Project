import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Link } from "./search.model";



@Injectable({providedIn:'root'})
export class SearchService {
  private links: Link[]=[];
// private postsUpdated= new Subject< {posts: Post[],postCount:number}>();


constructor(private http:HttpClient, private router: Router){}

getLinks(){
    this.http.get<{message:string,links:Link[]}>('http://localhost:3000/')
    .subscribe((linkData)=>{
     this.links= linkData.links
    });
}

addContent(long:string,short:any) {
const link:Link={
  long: long,
  short:short,
  id: ""
}
this.links.push(link)
// console.log(link);

this.http.post<{message:string,post:Link}>('http://localhost:3000/api/posts',link)
.subscribe((res)=>{
  console.log(res.message);
})


}




}
