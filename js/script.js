Vue.config.devtools = true;
console.log(Vue);
const app = new Vue ({
    el: '#app',
    data: {
        emailList: []
    },
    computed:{
        sortedMails(){                                                                                      
            //Funzione per ordinare l'array dalla A alla Z
            return this.emailList.sort()
        }
    },
    method: {

    },
    created() {                                                                                             
        //Giro 10 volte per creare 10 mail da pushare nell'array
        for(let i = 0; i < 10; i++){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((res) => {
                this.emailList.push(res.data.response)
          });
        } 
      },
})