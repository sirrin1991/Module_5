import { Injectable } from '@angular/core';
import {IWord} from '../model/iword';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  words: IWord[] = [
    {word: 'Hello', mean: 'Xin chào'},
    {word: 'Class', mean: 'Lớp'},
    {word: 'Phone', mean: 'Điện thoại'},
    {word: 'Sorry', mean: 'Xin lỗi'},
  ];
  constructor() { }
  findAll(){
    return this.words;
  }
  translate(index) {
    return this.words[index];
  }
}
