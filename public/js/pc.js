// 用來產生類似 GUID 的字串
            function S4() {
               return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
            }
 
            function NewGuid() {
               return (S4()+S4());
            }
 
           