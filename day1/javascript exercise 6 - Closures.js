



let myclosure = (function() {
    let age = 0;
    let name = "";


    function setAge(number) {
        age = number;
    }
    function setName(text) {
        name = text;
    }

    function getInfo() {
        console.log("Name: " + name + " and age: " + age);
    }



    return {
        setAge : setAge,
        setName : setName,
        getInfo : getInfo
    };



})();



myclosure.setAge(28);
myclosure.setName("Mark")
myclosure.getInfo();

