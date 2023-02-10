import {View} from "Frontend/views/view";
import {customElement, state} from "lit/decorators.js";
import Student from "Frontend/generated/com/example/application/Student";
import {Binder, field} from "@hilla/form";
import StudentModel from "Frontend/generated/com/example/application/StudentModel";
import {html} from "lit";
import {getStudents, saveStudent} from "Frontend/generated/StudentEndpoint";
import '@vaadin/button';
import '@vaadin/text-field';
import '@vaadin/number-field';
import '@vaadin/grid/vaadin-grid';

@customElement('student-view')
export class StudentView extends View {
    @state()
    private students: Student[] = [];
    private binder = new Binder(this, StudentModel);

    async addStudent() {
        const students = await this.binder.submitTo(saveStudent);
        if(students) {
            this.students = [...this.students, students];
            this.binder.clear();
        }
    }

    async firstUpdated() {
        const students = await getStudents();
        this.students = students;
    }

    render() {
        return html`
            <div class="padding: 25px m-xl">
                <h1>Add a Student</h1>
                <div>
                    <vaadin-text-field
                            ${field(this.binder.model.name)}
                            label="Name"
                    ></vaadin-text-field>
                    
                    <vaadin-text-field
                            ${field(this.binder.model.surname)}
                            label="Surname"
                    ></vaadin-text-field>

                    <vaadin-text-field
                            ${field(this.binder.model.age)}
                            label="Age"
                    ></vaadin-text-field>
                    
                    <vaadin-button
                            theme="primary"
                            @click=${this.addStudent}
                            ?disabled=${this.binder.invalid}
                    >
                        Add
                    </vaadin-button>
                </div>
                
                <h3>Student List</h3>
                <vaadin-grid .items="${this.students}" theme="row-stripes" style="max-width: 400px">
                    <vaadin-grid-column path="name"></vaadin-grid-column>
                    <vaadin-grid-column path="surname"></vaadin-grid-column>
                    <vaadin-grid-column path="age"></vaadin-grid-column>
                </vaadin-grid>
            </div>
        `;
    }

}
