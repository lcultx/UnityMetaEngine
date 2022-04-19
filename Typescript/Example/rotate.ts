import { UnityEngine } from 'csharp'
const speed = 10;

class Rotate {
    bindTo: any;
    constructor(bindTo:any) {
        this.bindTo = bindTo;
        this.bindTo.JsUpdate = () => this.onUpdate();
        this.bindTo.JsOnDestroy = () => this.onDestroy();
    }
    
    onUpdate() {
        //js不支持操作符重载所以Vector3的乘这么用
        let r = UnityEngine.Vector3.op_Multiply(UnityEngine.Vector3.up, 0.016 * speed);
        this.bindTo.transform.Rotate(r);
    }
    
    onDestroy() {
    }
}

var init = function(bindTo:any) {
    new Rotate(bindTo);
};

export { init };
