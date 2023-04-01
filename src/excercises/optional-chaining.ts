interface Passenger {
  name: string;
  children?: string[];
}

const passenger1: Passenger = {
  name: 'John'
};

const passenger2: Passenger = {
  name: 'John',
  children: ['Mary', 'Peter']
};

function printChildren(passenger: Passenger): void {
  const numberOfChildren = passenger.children?.length || 0;
  console.log(numberOfChildren);
}