import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder, Validators } from '@angular/forms';
import { JarwisService } from 'src/app/Services/jarwis.service';
import { TokenService } from 'src/app/Services/token.service';
import Swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';
import { Sondage } from '../sondage';


@Component({
  selector: 'app-sondage',
  templateUrl: './sondage.component.html',
  styleUrls: ['./sondage.component.css']
})
export class SondageComponent implements OnInit {
  sondageCal:Sondage;
  sondage = new Sondage();
  sondages: any;
  id: string;
  constructor(private _fb: FormBuilder, private Jarwis: JarwisService, private token: TokenService) { }
  public addmore: FormGroup;
  choixForm = new FormGroup({
    reponce: new FormControl(''),
  });
  ngOnInit() {
    this.getsondages();
    this.id = this.token.getId();
    this.addmore = this._fb.group({

      message: [''],
      itemRows: this._fb.array([this.initItemRows()])
    });
  }
public occurence(sondage:Sondage,choix):number{
  let occ:number=0;
  sondage.reponce.forEach(x => {
    if (x.reponce===choix) {
      occ++;
    }
  });
  return occ;
}

  initItemRows() {
    return this._fb.group({
      choix: [''],
    });
  }
  addNewRow() {
    this.formArr.push(this.initItemRows());
  }

  deleteRow(index: number) {
    this.formArr.removeAt(index);
  }
  getsondages() {

    this.Jarwis.getsondages().subscribe(res => {
      this.sondages = res;
      console.log(this.sondages);

    });

  }

  onSubmit(idsandage) {
    console.log(this.choixForm.value.reponce);
    this.Jarwis.addreponse(this.id, idsandage, this.choixForm.value).subscribe(x => {
      console.log(x);
      this.getsondages();
    }, err => {
      console.log(err);
    });
  }
  insertData() {
    console.log(this.addmore.value);
    this.sondage.choix = this.formArr.value;
    console.log(this.sondage);

    this.Jarwis.addsondages(this.id, this.sondage).subscribe(res => {
      this.getsondages();
      Swal.fire(
        'Good job!',
        'votre insertion a été effectué',
        'success'
      )

      //window.location.reload();


    });
  }
  get formArr() {
    return this.addmore.get('itemRows') as FormArray;
  }
}


