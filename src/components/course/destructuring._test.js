import expect from 'expect';

const addressData1 = {
  streetAddress1: '1001 Main Street',
  //streetAddress2: '1001 Main Street',
  city: 'Anytown',
  state: 'NY',
  zip: '10001-1234',
  country: 'USA'
};

describe('Understanding Object Destructuring', () => {
  const {streetAddress1, streetAddress2 = 'Tobby', city, state, zip, country} = addressData1;

  const employee = {
    workAddress: addressData1,
    position: {
      department: {
        name: "Development"
      }
    }
  };

  it('Show Tobby as Address 2', () => {
    expect(streetAddress2).toBe('Tobby');
  });

  it('Get City and Department', () => {
    {
      const {workAddress: {city}, position: {department: {name: departmentName}}} = employee;
      expect(city).toBe('Anytown');
    }
  });

  it('Should be Anytown City', () => {
    function categorizeEmployee({workAddress: {city}, position: {department: {name: departmentName}}}){
      return {
        city, //city: city,
        departmentName //departmentName: departmentName
      };
    }

    const category = categorizeEmployee(employee);

    const {workAddress: {city}, position: {department: {name: departmentName}}} = employee;
    expect(category.city).toBe('Anytown');

  });


});


const names = ['Alice', 'Bob', 'Charlie', 'Elvis'];

describe('Understanding Array Destructuring', () => {
  it('First array item should be Alice', () => {
    const [firstDestructure] = names;
    expect(firstDestructure).toBe('Alice');
  });

  it('Assigning undefined should be Steve', () => {
    const undefinedArr = [];
    const [firstDestr = 'Steve', secondDestruct] = undefinedArr;
    expect(firstDestr).toBe('Steve');
  });

  it('More should be a new array of 2 characters', () => {
    const [firstDestr, secondDestruct, ...more] = names;
    // console.log(more); //[ 'Charlie', 'Elvis' ]
    expect(more.length).toBe(2);
  });

  it('Array length should be 4', () => {
    function multiGreet(...items){
      //console.log(items); //[ 'Alice', 'Bob', 'Charlie', 'Elvis', 'Kyle', 'Isaac', 'James' ]
      //items.forEach(item => console.log(`Hello, ${item}.`));
      return items.length;
    }
    const names2 = ['Isaac', 'James'];
    const names3 = [...names, 'Kyle', ...names2];
    expect(multiGreet(...names3)).toBe(7);
  });
});
