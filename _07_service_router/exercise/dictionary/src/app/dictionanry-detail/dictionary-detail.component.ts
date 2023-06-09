import { Component, OnInit } from '@angular/core';
import {IWord} from '../model/iword';
import {DictionaryService} from '../service/dictionary.service';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.css']
})
export class DictionaryDetailComponent implements OnInit {
  word: IWord;
  constructor(private dictionaryService: DictionaryService, private activatedRoute: ActivatedRoute) {
    const index = this.activatedRoute.snapshot.params.index;
    this.word = this.dictionaryService.translate(index);
  }

  ngOnInit(): void {}
}
