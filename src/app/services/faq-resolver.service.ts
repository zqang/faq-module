import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Category } from "../models/category";
import { FaqService } from "./faq.service";

@Injectable({providedIn: 'root'})
export class FaqResolverService implements Resolve<Category[]>{
    constructor(
        private faqService: FaqService){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        const categories = this.faqService.getCategories();
        console.log(categories);
        console.log('resolver have called')
        if(categories === [] || categories === undefined){
            return this.faqService.setCategories();
        } else {
            return categories;
        }
    }
}