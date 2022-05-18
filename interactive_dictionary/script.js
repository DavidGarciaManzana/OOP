//-----------------------------------INSTRUCTIONS
// Your job is to create a class Dictionary which you can add words to and their entries. Example:
// >>> let d = new Dictionary();
//
// >>> d.newEntry("Apple", "A fruit that grows on trees");
//
// >>> console.log(d.look("Apple"));
// A fruit that grows on trees
//
// >>> console.log(d.look("Banana"));
// Can't find entry for Banana




// -----------------------------------FIRST TRY

// class Dictionary {
//     // JS Destructuring
//     constructor({key, value} = {key: 'default option a', value: 'default option b'}) {
//         this.key = key;
//         this.value = value;
//     }
//
//     newEntry(key, value) {
//         console.log(key, value)
//         this.key = key;
//         this.value = value;
//         return {key, value}
//     }
//
//     look(toFind) {
//         if (toFind === this.key) {
//             console.log(this.value)
//             return this.value
//         } else {
//             console.log(`Can\\'t find entry for ${toFind}`)
//             return `Can\\'t find entry for ${toFind}`
//         }
//     }
// }
//
// let word = new Dictionary()
// word.newEntry("apple","fruit")
// word.newEntry("banana","better fruit")
// word.look("apple")

// -------------------------------------SECOND TRY
class Dictionary {
    constructor(array = []) {
        this.array = array;
    }

    newEntry(key, value) {
        this.array.push(key, value)
        console.log(this.array)
    }

    look(toFind) {
        let wordPosition = this.array.indexOf(toFind)
        if (wordPosition >= 0) {
            console.log(this.array[wordPosition + 1])
            return this.array[wordPosition + 1]
        } else {
            console.log(`Can\'t find entry for ${toFind}`)
            return `Can\'t find entry for ${toFind}`
        }
    }
}

let word = new Dictionary()
word.newEntry("apple", "fruit")
word.newEntry("banana", "better fruit")
word.look("apple")
