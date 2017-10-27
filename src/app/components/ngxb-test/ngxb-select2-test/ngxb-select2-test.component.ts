import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Component({
  selector: 'app-ngxb-select2-test',
  templateUrl: 'ngxb-select2-test.component.html',
  styleUrls: ['ngxb-select2-test.component.css']
})
export class NgxbSelect2TestComponent implements OnInit {

  testModels: Array<TestModel> = [
    new TestModel(1, 'A1', 'ABCD', 'PTest12'),
    new TestModel(2, 'B2', 'DEFG', 'PTest22'),
    new TestModel(3, 'C3', 'GHIJ', 'PTest32'),
    new TestModel(4, 'D4', 'JKLM', 'PTest42'),
  ];

  dataSource: Observable<any[]>;

  testForm = new FormGroup({
    testId: new FormControl('', Validators.required)
  });

  constructor() {
    this.dataSource = Observable
      .create((observer: any) => {
        // Runs on every search
        observer.next(this.testForm.get('testId').value);
      })
      .mergeMap((token: string) => this.getDataAsObservable(token));
  }

  public getDataAsObservable(token: string): Observable<any> {
    const query = new RegExp(token, 'i');

    return Observable.of(
      this.testModels.filter((tm: TestModel) => {
        return query.test(tm.description) || query.test(tm.presentation1) || query.test(tm.presentation2);
      })
    );
  }

  ngOnInit() {
  }

  alertAbout(msg: string) {
    alert(msg);
  }

}

export class TestModel {
  id: number;
  description: string;
  presentation1: string;
  presentation2: string;


  constructor(id: number, description: string, presentation1: string, presentation2: string) {
    this.id = id;
    this.description = description;
    this.presentation1 = presentation1;
    this.presentation2 = presentation2;
  }
}
