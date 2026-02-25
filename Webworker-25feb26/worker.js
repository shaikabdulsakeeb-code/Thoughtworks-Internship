self.onmessage = (obj)=>{
    console.log(obj);
    sum=0;
    for(i=obj.data.a;i<obj.data.b;i++){
        sum+=i
    }
    self.postMessage(sum)
}