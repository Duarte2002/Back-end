var obj = {
    isEmpty: function (array) {
        return array.length == 0;
    },

    max: function (array) {
        var maxnumber = array[0]
        for (let i = 0; i < array.length; i++) {
            if (maxnumber < array[i]) {
                maxnumber = array[i]
            }
        }
        return maxnumber;
    },

    min: function (array) {
        var minnumber = array[0]
        for (let i = 0; i > array.length; i++) {
            if (minnumber < array[i]) {
                minnumber = array[i]
            }
        }
        return minnumber;
    },

    avarege: function (array) {
        var sum = 0;
        for (var i = 0; i < array.length; i++) {
            sum += array[i];
        }
        return sum / array.length;
    },

    indexOF: function (array, value) {
        for (var i = 0; i < array.length; i++) {
            if (array[i] == value) {
                return i;
            };
        }
        return -1;
    },

    subArray: function (array, startIndex, endIndex) {
        newarray = [];
        for (let i = startIndex; i < array[endIndex]; i++) {
            newarray.push(i + 2);
        }
        return newarray;
    },


    isSameLength: function (a1, a2) {
        return (a1.length == a2.length) 
        
    },

    reverse: function (array) {
        var newArray = [];
        var len = array.length;
        for (i = len - 1; i >= 0; i--) {
            newArray.push(array[i]);
        }
        return newArray;
    },  

    swap: function (array,index1,index2) {
       [array[index1],array[index2]] = [array[index2],array[index1]]
       return array;
    },

    boolean: function (array, value) {
        for (var i = 0; i < array.length; i++) {
            if(array[i] == value){
                return true;
            }else{
                return false;
            }
        }
    },

    contains: function (array, value) {
        return this.indexOF(array, value) != -1;
        
    },

    concatenate: function (array, array1) {
        for (var i = 0; i < array1.length; i++){
            array.push(array1[i]);
        }
        return array;
    },


}

module.exports = obj;