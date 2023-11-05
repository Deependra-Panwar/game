import { FormGroup } from "@angular/forms"

export const confirPasswordValidator =(controlName:string, controlNameToMatch:string)=>{
    return(formGroup: FormGroup)=>{
        let control = formGroup.controls[controlName];
        let controlToMatch =formGroup.controls[controlNameToMatch];
        if(controlToMatch.errors && !controlToMatch.errors['confirPasswordValidator']){
            return;
        }
        if(control.value !== controlToMatch.value){
            controlToMatch.setErrors({confirPasswordValidator:true})
        }else{
            controlToMatch.setErrors(null)
        }
    }
}