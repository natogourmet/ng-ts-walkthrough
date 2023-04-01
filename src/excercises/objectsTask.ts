interface Address {
  street: string;
  number: number;
  country: string;
  city: string;
}

interface SuperHeroe {
  name: string;
  age: number;
  address: Address;
  showAddress: () => void;
}

const superHeroe: SuperHeroe = {
  name: 'Spiderman',
  age: 30,
  address: {
    street: 'Main Street',
    number: 20,
    country: 'USA',
    city: 'New York'
  },
  showAddress() {
    console.log(this.address.street, this.address.number, this.address.city, this.address.country);
  }
}

superHeroe.showAddress();