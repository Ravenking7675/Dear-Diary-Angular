import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Diary } from '../models/diary';

@Injectable({
  providedIn: 'root'
})
export class DiaryService {

  private getUrl: string = "http://localhost:8081/api/v1/diary";

  constructor(private _httpClient: HttpClient) { }

   getDiary(): Observable<Diary[]>{
      return this._httpClient.get<Diary[]>(this.getUrl).pipe(
        map((response: any) => response)
      )
   }

   saveDiary(diary: Diary): Observable<Diary>{
      return this._httpClient.post<Diary>(this.getUrl, diary)
   }

   getDiaryById(id: number): Observable<Diary>{
      return this._httpClient.get<Diary>(`${this.getUrl}/${id}`).pipe(
        map(response => response)
      )
   }

   deleteDiary(id: number): Observable<any>{
        return this._httpClient.delete(`${this.getUrl}/${id}`, {responseType: 'text'})
   }
}
