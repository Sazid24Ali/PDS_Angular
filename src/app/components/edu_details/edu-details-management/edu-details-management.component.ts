import { Component } from '@angular/core';

// interface Record {
//   studied: string;
//   school: string;
//   grade: string;
//   graduationYear: string;
//   certificate: string;
// }

@Component({
  selector: 'app-edu-details-management',
  templateUrl: './edu-details-management.component.html',
  styleUrl: './edu-details-management.component.css'
})
export class EduDetailsManagementComponent {


    edu_cert:string = "../../assets/images/No-picture.jpeg";  

//   editable: boolean[] = Array(this.records.length).fill(false);

//   editedRecords: Record[] = [...this.records];

//   onFileSelected(event: any) {
//     const file = event.target.files[0];
//     // Handle file upload logic
//   }

//   editRecord(index: number) {
//     this.editable[index] = true;
//   }

//   deleteRecord(index: number) {
//     // Implement delete logic, show checkboxes, and handle changes
//   }

//   saveChanges() {
//     // Implement save changes logic
//     this.records = [...this.editedRecords];
//     this.editable = Array(this.records.length).fill(false);
//   }

//   undoChanges() {
//     this.editable = Array(this.records.length).fill(false);
//   }

//   openCertificate(url: string) {
//     // Implement logic to open certificate image in a new tab
//     window.open(url, '_blank');
//   }

// // ...
// handleInput(event: any, index: number, field: keyof Record) {
//   if (event && event.target) {
//     this.editedRecords[index][field] = event.target.textContent;
//   }
// }
// // ...



}
