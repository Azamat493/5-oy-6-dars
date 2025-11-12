// #1
class Book {
  constructor(title, author, genre, available = true) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.available = available;
  }

  getDetails() {
    const status = this.available ? "Mavjud" : "Olingan";
    return `Kitob: ${this.title}\nMuallif: ${this.author}\nJanr: ${this.genre}\nHolat: ${status}`;
  }

  markAsBorrowed() {
    if (this.available) {
      this.available = false;
      console.log(`'${this.title}' kitobi endi o'qishga olib ketildi.`);
    } else {
      console.log(`'${this.title}' kitobi allaqachon olingan.`);
    }
  }

  markAsReturned() {
    if (!this.available) {
      this.available = true;
      console.log(`'${this.title}' kitobi qaytarildi.`);
    } else {
      console.log(`'${this.title}' kitobi allaqachon mavjud.`);
    }
  }
}

class Library {
  constructor() {
    this.books = [];
  }

  addBook(book) {
    const exists = this.books.find(b => b.title === book.title);
    if (exists) {
      console.log(`'${book.title}' kitobi katalogda allaqachon mavjud.`);
    } else {
      this.books.push(book);
      console.log(`'${book.title}' kitobi katalogga qo'shildi.`);
    }
  }

  removeBook(title) {
    this.books = this.books.filter(b => b.title !== title);
    console.log(`'${title}' kitobi katalogdan o'chirildi.`);
  }

  searchByGenre(genre) {
    return this.books.filter(b => b.genre === genre);
  }

  listAvailableBooks() {
    return this.books.filter(b => b.available);
  }
}

const library = new Library();
const book1 = new Book("Harry Potter", "J.K. Rowling", "Fantastika");
const book2 = new Book("Ilm-fan asoslari", "Aliyev", "Ilmiy");

library.addBook(book1);
library.addBook(book2);
library.listAvailableBooks().forEach(b => console.log(b.getDetails()));



// #2
class Bus {
  constructor(id, route, seats) {
    this.id = id;
    this.route = route;
    this.seats = seats;
    this.reservedSeats = 0;
  }

  getDetails() {
    return `Avtobus ID: ${this.id}\nYo'nalish: ${this.route}\nO'rinlar: ${this.seats}\nBand qilingan: ${this.reservedSeats}`;
  }

  reserveSeat() {
    if (this.reservedSeats < this.seats) {
      this.reservedSeats++;
      console.log(`Avtobus ${this.id} da 1 o'rin band qilindi.`);
    } else {
      console.log(`Avtobus ${this.id} to'liq band.`);
    }
  }

  cancelReservation() {
    if (this.reservedSeats > 0) {
      this.reservedSeats--;
      console.log(`Avtobus ${this.id} da 1 o'rin bekor qilindi.`);
    } else {
      console.log(`Avtobus ${this.id} da hech qanday band o'rin yo'q.`);
    }
  }
}

class BusSystem {
  constructor() {
    this.buses = [];
  }

  addBus(bus) {
    this.buses.push(bus);
    console.log(`Avtobus ${bus.id} tizimga qo'shildi.`);
  }

  listBuses() {
    this.buses.forEach(bus => console.log(bus.getDetails()));
  }

  searchByRoute(route) {
    return this.buses.filter(bus => bus.route === route);
  }

  reserveSeat(busId) {
    const bus = this.buses.find(b => b.id === busId);
    if (bus) bus.reserveSeat();
    else console.log("Avtobus topilmadi.");
  }

  cancelReservation(busId) {
    const bus = this.buses.find(b => b.id === busId);
    if (bus) bus.cancelReservation();
    else console.log("Avtobus topilmadi.");
  }
}

const system = new BusSystem();
const bus1 = new Bus(1, "Toshkent - Samarqand", 40);
system.addBus(bus1);
system.reserveSeat(1);
system.listBuses();



// #3
class Product {
  constructor(id, name, price, stock) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.stock = stock;
  }

  getDetails() {
    return `ID: ${this.id}\nNomi: ${this.name}\nNarxi: ${this.price}\nMavjud: ${this.stock}`;
  }

  updateStock(quantity) {
    this.stock += quantity;
    console.log(`${this.name} omborda ${this.stock} ta qoldi.`);
  }
}

class OrderItem {
  constructor(product, quantity) {
    this.product = product;
    this.quantity = quantity;
  }

  calculatePrice() {
    return this.product.price * this.quantity;
  }
}

class Order {
  constructor(id) {
    this.id = id;
    this.items = [];
  }

  addItem(orderItem) {
    if (orderItem.product.stock >= orderItem.quantity) {
      this.items.push(orderItem);
      orderItem.product.updateStock(-orderItem.quantity);
      console.log(`${orderItem.quantity} ta ${orderItem.product.name} buyurtmaga qo'shildi.`);
    } else {
      console.log(`${orderItem.product.name} yetarli miqdorda mavjud emas.`);
    }
  }

  calculateTotal() {
    return this.items.reduce((sum, item) => sum + item.calculatePrice(), 0);
  }
}

class Shop {
  constructor() {
    this.products = [];
    this.orders = [];
  }

  addProduct(product) {
    this.products.push(product);
    console.log(`${product.name} do'konga qo'shildi.`);
  }

  listProducts() {
    this.products.forEach(p => console.log(p.getDetails()));
  }

  createOrder() {
    const order = new Order(this.orders.length + 1);
    this.orders.push(order);
    return order;
  }
}

const shop = new Shop();
const prod1 = new Product(1, "Kompyuter", 1000, 10);
const prod2 = new Product(2, "Telefon", 500, 20);

shop.addProduct(prod1);
shop.addProduct(prod2);

const order1 = shop.createOrder();
order1.addItem(new OrderItem(prod1, 2));
order1.addItem(new OrderItem(prod2, 3));

console.log("Buyurtma summasi:", order1.calculateTotal());
