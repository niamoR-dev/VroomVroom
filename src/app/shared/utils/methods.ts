import {Router} from "@angular/router";
import {FormGroup} from "@angular/forms";


export function redirectTo (uri:string, router: Router){
  router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    router.navigate([uri]));
}

export function getFormValue(fb: FormGroup, controlName: string){
  // @ts-ignore
  return fb.get(controlName).value;
}
