// OOP Basics

/**
 * Walaupun OOP memiliki kesamaan dengan object literal
 * OOP memiliki beberapa keuntungan, seperti:
 * - mengurangi redundansi karena cukup membuat satu
 *   cetakan/blueprint melalui perintah `new`.
 *   contoh: new Student()
 * - memiliki nama untuk membedakan antarobject
 * - lebih fleksibel, karena untuk mengubah method dan
 *   property, cukup mengubah cetakannya saja
 */

class Student{
  constructor(firstName, lastName, batch){
    this.firstName = firstName
    this.lastName = lastName
    this.batch = batch
  }

  greet(){
    console.log(`Hai! Nama saya ${this.firstName}.`)
    console.log(`Nama lengkap saya adalah ${this.firstName} ${this.lastName}.`)
    console.log(`Saya berada di batch ${this.batch}`)
  }
}

























 

// Exercise: Ubah object literal ini menjadi sebuah object!
// Hint: gunakan constructor untuk inisiasi nilai :)

let employee = {
  firstName: "Agus",
  lastName: "Budianto",
  email: "agusb@email.com",
  speak(){
    return `Hai! Nama saya ${this.firstName} ${this.lastName}.`
  }
}