//Q.1 Create 2 objects - parent and child. Attach methods to parent and use those methods in child object using parents prototype
const parent ={
    details(){
        console.log(`My name is ${this.name} and I am from ${this.location}`)
    }
    }
    const firstchild = Object.create(parent);
    firstchild.name ="dipak";
    firstchild.location="pune";
    
    firstchild.details();
    
    const secondChild= Object.create(parent)
    secondChild.name="ram"
    secondChild.location="Pune"
    
    secondChild.details()

//Q.4

function DisplayData(name,age,college){
    this.name = name,
    this.age = age,
    this.college=college
}
DisplayData.prototype.passyrear ="2023"
 const data = new DisplayData("abc", 23 , "Prepbytes")
 console.log(data)
 console.log("The name is ",data.name);//output-abc
 console.log("The passyrear is ",data.passyrear)//output -2023
 console.log("The age is ",data.age)
 console.log("The college is ",data.college)

 //Q.3

 let arr = new Array(1,2,3,4,5)
            arr.__proto__.sum=function(givenArray){
                let count = 0;
                for(let i =0;i<arr.length;i++){
                    count +=arr[i];
                }
                return count;
            }
            let result =arr.sum(arr)
            console.log(result);


//Q.2
const grandFather={
    name:"ramrao",
    age:80
   }
const father=Object.create(grandFather)
console.log(father.name)//it will gives result as ramrao as name property is not to fater hence it will look for it in parent chain
const son = Object.create(grandFather)
son.name="shamrao"
console.log(son.name)//as we declase value of son.name hence it shows resullt as shamrao