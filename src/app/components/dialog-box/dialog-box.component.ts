import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpService } from 'src/app/services/http.service';
@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.scss'],
})
export class DialogBoxComponent implements OnInit {

  public inputControl: FormControl = new FormControl();
  public shortUrl: string | null = '';

  constructor(
    private httpService: HttpService
  ) { }

  ngOnInit(): void { 
  
  }

  onSubmit(inputValue: string) {
    this.shortUrl = inputValue;
    this.httpService.postShortUrl(inputValue)
                .subscribe(
                    (data: any) => {
                      console.log(data);
                      this.shortUrl = data.shortUrl;},
                );
  }
}
