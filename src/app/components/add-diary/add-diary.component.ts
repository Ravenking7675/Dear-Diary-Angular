import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Diary } from 'src/app/models/diary';
import { DiaryService } from 'src/app/services/diary.service';

@Component({
  selector: 'app-add-diary',
  templateUrl: './add-diary.component.html',
  styleUrls: ['./add-diary.component.css']
})
export class AddDiaryComponent implements OnInit {

  diary : Diary = new Diary();

  ngOnInit(): void {
      const isIdPresent: boolean = this._activatedRoute.snapshot.paramMap.has('id');
      if(isIdPresent){
        const id = +this._activatedRoute.snapshot.paramMap.get('id')!;
        this._diaryServicec.getDiaryById(id).subscribe(
          data => this.diary = data
        );
      }
  }

  constructor(private _diaryServicec: DiaryService, private _router: Router, private _activatedRoute: ActivatedRoute) {}

  saveDiary(){
      this._diaryServicec.saveDiary(this.diary).subscribe(
        data => {
          console.log('Diary Added', data);
          this._router.navigateByUrl("/diary");
        }
      )
  }
  
  deleteDiary(id: number){

    this._diaryServicec.deleteDiary(id).subscribe(
      data => {
        console.log('Diary Deleted', data)
        this._router.navigateByUrl("/diary");
      }
    )

  }

}
