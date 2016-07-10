
import _foo = Main.Foo;

namespace Main {

    class Main {

        private _d = document;
        
        private template =  `<div>
                                Hallo Welt!
                            </div>
                            `;

        public renderView(){
            let c:any = document.getElementById('container');
                c.innerHTML = this.template ;
        }

        constructor(){
            console.log('constructor called');
        }
    }

    document.addEventListener("DOMContentLoaded", (e) => {
        console.log("dom ready");
        let m = new _foo;
            m.doit();
        let main = new Main();
            main.renderView();
    });
}