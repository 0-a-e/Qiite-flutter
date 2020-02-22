import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  spn: any;
  SN: any;
  err: any;
  Kebid: any;
  timerId: any;
  def: any;
  emp: any;
  si = {
  }
  pi = {
    'color':'pink'
  }
  kiji: Object;
  constructor(private http:HttpClient,private router:Router) {}
  ionB(ivl) { 
    this.Kebid = false;
    console.log("ionb");
    if (ivl) {
      this.NDE(ivl);
    }
  }
  click(jsons) {
    console.log(jsons);
   // console.log(MD);
   let navJ: NavigationExtras = {
    state: {
      inner: jsons
     }
   };
   console.log(navJ);
   this.router.navigate(['view'],navJ);
  }
  NDE(TX) { 
    try {
      this.RE(TX);
        } catch (err) {
      this.spn = '<h2 [ngStyle]="pi">エラーが発生しました。しばらく時間をおいて再度お試しください。</h2><p>' + err["status"] + err["error"]["message"] + '.</p>';
      console.log("大変申し訳ございませんが、エラーが発生しました。アプリを閉じて再度お試しください。");
      console.log(err);
    }
  }
  async RE(TX) {
    try {
      this.def = " ";
      console.log(this.def);
      this.spn = '読み込み中...';

      setTimeout(() => this.spn='<ion-icon style="font-size: 80px;" name="search"></ion-icon><p>ネットワークに接続されていないか、検索結果が見つかりません。</p>', 10000);
      const res = await this.http.get("https://qiita.com/api/v2/items?per_page=100&query=" + TX)
        .toPromise();
      this.Kebid = true;
        if (Object.keys(res).length == 0) {
          console.log("emp");
          this.emp = "emp";
      }
      this.SN = TX;
      console.log(res);
      //    NE = res["0"]["title"];
    //  if (res["length"] = 0) { 
    //    this.spn = '<p>検索結果はありません。</p>';
    //  }
      this.kiji = res;
    }catch (err) {
      this.spn = 'ERR!';
      this.err = "f";
      console.log("大変申し訳ございませんが、エラーが発生しました。アプリを閉じて再度お試しください。");
      console.log(err);
    }
}
  }
