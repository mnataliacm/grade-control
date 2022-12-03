import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { lastValueFrom } from 'rxjs';
import { StudentService } from 'src/app/core/services';

@Component({
  selector: 'app-students',
  templateUrl: './students.page.html',
  styleUrls: ['./students.page.scss'],
})
export class StudentsPage {

  _students: any;

  constructor(
    private studentSvc: StudentService,
    private alert: AlertController,
    private translate: TranslateService,
  ) {
  }

  ionViewWillEnter() {
    this.getAllStudent();
  }

  getAllStudent() {
    this.studentSvc.getListStudent().subscribe(response => {
      console.log(response);
      this._students = response;
    })
  }

  async delete(item: { id: string; }) {
    const alert = await this.alert.create({
      header: await lastValueFrom(this.translate.get('people.alert')),
      buttons: [
        {
          text: await lastValueFrom(this.translate.get('button.cancel')),
          role: 'cancel',
          handler: () => {
            console.log("Operacion cancelada");
          },
        },
        {
          text: await lastValueFrom(this.translate.get('button.delete')),
          role: 'confirm',
          handler: () => {
            this.studentSvc.deleteStudent(item.id).subscribe(response => {
              this.getAllStudent();
            })
          },
        }
      ],
    });
    await alert.present();
    const { role } = await alert.onDidDismiss();
  }

}
