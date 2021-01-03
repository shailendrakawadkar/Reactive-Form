import { AbstractControl } from "@angular/forms";

export function matchPass(control:AbstractControl){
    if(control && (control.value!=null || control.value!=undefined)){
        const cnfpassValue= control.value;
        const passControl= control.root.get('pass');
        if(passControl){
            const passValue=passControl.value;
            if(passValue != cnfpassValue){
                return {
                    isError:true
                };
            }
        }
    }
    return null;
}