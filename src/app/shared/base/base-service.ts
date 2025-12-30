import { Thing } from "./base-thing";

export class BaseCRUDService<T extends Thing> {
    
      protected data:T[]=[];
       add(item:T) {
            this.data.push(item);
    }
      list(){
        return[...this.data];
      }
      update(item:T){
        const index=this.data.findIndex(m=>m.id==item.id);
        if(index!=-1){
            this.edit(this.data[index],item)
        }
      }
      edit(destination:T,source:T){

      }

      remove(item:T){
        this.data=this.data.filter(m=>m.id!=item.id);
      }
    }

         //     this.data[index].fristname=member.fristname;
      //    this.data[index].lastname=member.lastname;
     //     this.data[index].nationalcode=member.nationalcode;
     //     this.data[index].phonenumber=member.phonenumber;