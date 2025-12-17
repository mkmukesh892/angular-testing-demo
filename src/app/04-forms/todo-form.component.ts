import {UntypedFormGroup, UntypedFormBuilder, Validators} from '@angular/forms';
export class TodoFormComponent {
    form: UntypedFormGroup;
    constructor(private fb: UntypedFormBuilder){
        this.form = this.fb.group({
            name: ['',Validators.required],
            email:['']
        });

    }
}