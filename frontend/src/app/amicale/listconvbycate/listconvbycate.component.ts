import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JarwisService } from 'src/app/Services/jarwis.service';
import { Convention } from '../convention';


@Component({
  selector: 'app-listconvbycate',
  templateUrl: './listconvbycate.component.html',
  styleUrls: ['./listconvbycate.component.css']
})
export class ListconvbycateComponent implements OnInit {
  public convention: Convention[];
  idCompte: number;
  constructor(activatedRoute: ActivatedRoute, public JarwisService: JarwisService ) { this.idCompte = activatedRoute.snapshot.params['id']; }

  ngOnInit(): void {
    this.Getformation();
  }
  public Getformation(): void {
    this.JarwisService.getconvByCate(this.idCompte).subscribe(
      (response: Convention[]) => {
        this.convention = response;
        console.log(this.convention);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
}
