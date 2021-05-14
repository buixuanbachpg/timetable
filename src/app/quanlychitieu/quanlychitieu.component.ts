import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {QuanlychitieuService} from 'src/app/service/quanlychitieu.service'
@Component({
  selector: 'app-quanlychitieu',
  templateUrl: './quanlychitieu.component.html',
  styleUrls: ['./quanlychitieu.component.css']
})
export class QuanlychitieuComponent implements OnInit {

  constructor(private fb: FormBuilder,private service:QuanlychitieuService) { }

  ngOnInit(): void {
  }
  profileForm = this.fb.group({
    ngay: [''],
    sotien: [''],
    loai: [''],
    note: ['']
  });
  add()
  {
    this.service.taoQuanLiChiTieu(this.profileForm.value).subscribe(data=>
      console.log(data));
  }
}
