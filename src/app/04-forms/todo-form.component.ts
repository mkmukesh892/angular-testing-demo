import {FormGroup, FormBuilder, Validators} from '@angular/forms';
export class TodoFormComponent {
    form: FormGroup;
    constructor(private fb: FormBuilder){
        this.form = this.fb.group({
            name: ['',Validators.required],
            email:['']
        });

    }
}