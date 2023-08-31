import { Component, OnInit } from '@angular/core';
import { Diary } from 'src/app/models/diary';
import { DiaryService } from 'src/app/services/diary.service';

@Component({
  selector: 'app-list-diary',
  templateUrl: './list-diary.component.html',
  styleUrls: ['./list-diary.component.css']
})
export class ListDiaryComponent implements OnInit {

  diaries: Diary[] = [];

  filter = {
    keyword: ''
  }

  constructor(private _diaryService: DiaryService){

  }

  ngOnInit(): void {
    this._diaryService.getDiary().subscribe(
      data => this.diaries = this.filterDiary(data)
    )
  }

  listDiary(){
    this._diaryService.getDiary().subscribe(
      data => this.diaries = this.filterDiary(data)
    )
  }

  filterDiary(diaries: Diary[]): Diary[]{
    return diaries.filter((e) => {
        return e.title?.toLowerCase().includes(this.filter.keyword.toLowerCase())
    })
  }

}
