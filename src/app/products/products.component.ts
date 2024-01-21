import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ProductService} from "../services/product.service";
import {Product} from "../model/product.model";
import {Observable} from "rxjs";
import {Router} from "@angular/router";
import {AppStateService} from "../services/app-state.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
  //products:Array<Product>=[];
  public products:Array<Product>=[];
  public keyword:string="";
  totalPages:number=0;
  pageSize:number=2;
  currentPage:number=1;

  constructor(private productService:ProductService,
              private router:Router,
              public appState : AppStateService) {
  }
  ngOnInit() {
    this.searchProducts()
  }
  searchProducts(){
    this.productService.searchProducts(this.keyword,this.currentPage,this.pageSize).subscribe({
      next:(resp)=>{
        this.products=resp.body as Product[];
        let totalProduct:number=parseInt(resp.headers.get('x-total-count')!);
        this.totalPages=Math.floor(totalProduct/this.pageSize);
        if(totalProduct%this.pageSize!=0){
          this.totalPages=this.totalPages+1;
        }
        },
      error:err => {
        console.log(err);
      }
    })
    //this.products$=this.productService.getProduct();
  }
  handleCheckProduct(product: Product) {
    this.productService.checkProduct(product).subscribe(
      {
        next:updatedProduct=>{
          product.checked =! product.checked;
          //this.getProducts();
        }
      }
    )

  }

  handleDelete(product: Product) {
    if(confirm("Etes vous sure?")) //pour afficher une alerte de suppression
    this.productService.deleteProduct(product).subscribe({
      next:value => {
        //this.getProducts();
        this.products.filter(p=>p.id!=product.id);//pour filtrer lors de laffichage apres suppression que ceux qui n'on pas le meme id que celui supprimer qui safficheront
      }
    });

  }


  handleGotoPage(page: number) {
    this.currentPage=page;
    this.searchProducts();
  }

  handleEdit(product: Product) {
    this.router.navigateByUrl(`/admin/editProduct/${product.id}`)//lorsqu'on click sur edit il navige vers un autre component
  }
}
