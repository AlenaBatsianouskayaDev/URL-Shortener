import { Component, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.scss'],
})
export class DialogBoxComponent implements OnInit {

  public inputControl: FormControl = new FormControl();
  public shortUrl: string | null = '';

  constructor() { }

  ngOnInit(): void { 
  
  }

  onSubmit(inputValue: string) {
    this.shortUrl = inputValue;
  }
}
