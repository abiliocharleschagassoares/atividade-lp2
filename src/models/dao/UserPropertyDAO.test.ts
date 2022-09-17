import UserProperty from "../entities/UserProperty";
import UserPropertyDAO from "./UserPropertyDAO";

describe('Tests over new property insertion', () => {
  beforeEach(() => {
    const userPropertyDAO = new UserPropertyDAO('user.properties');
    userPropertyDAO.clear();
  });
  
  test('It should contain the new property after add it to the properties file', () => {
    const userProperty: UserProperty = {
      key: 'nome',
      value: 'Abilio'
    };
    
    const userPropertyDAO = new UserPropertyDAO('user.properties');
    userPropertyDAO.add(userProperty);
    expect(userPropertyDAO.read()).toBe('nome=Abilio\n');
  });

  test('It should contain all the new properties after add them to the properties file', () => {
    const userProperties: UserProperty[] = [
      {
        key: 'nome',
        value: 'Abilio'
      },
      {
        key: 'idade',
        value: 31
      },
     
    ];

    const userPropertyDAO = new UserPropertyDAO('user.properties');
    userProperties.forEach((userProperty) => userPropertyDAO.add(userProperty));
    expect(userPropertyDAO.read()).toBe('nome=Abilio\nidade=31\n');
  });
});

describe('Tests over querying properties', () => {
  beforeEach(() => {
    const userPropertyDAO = new UserPropertyDAO('user.properties');
    userPropertyDAO.clear();
  });
  
  test('It should return null when key is not found', () => {
    const userProperties: UserProperty[] = [
      {
        key: 'nome',
        value: 'Abilio'
      },
      {
        key: 'idade',
        value: 31
      },
      
    ];

    const userPropertyDAO = new UserPropertyDAO('user.properties');
    userProperties.forEach((userProperty) => userPropertyDAO.add(userProperty));
    expect(userPropertyDAO.get('alguem')).toBe(null);
  });

  test('It should return correct value when key is found', () => {
    const userProperties: UserProperty[] = [
      {
        key: 'nome',
        value: 'Abilio'
      },
      {
        key: 'idade',
        value: 31
      },
      
    ];

    const userPropertyDAO = new UserPropertyDAO('user.properties');
    userProperties.forEach((userProperty) => userPropertyDAO.add(userProperty));
    expect(userPropertyDAO.get('idade')).toBe('31');
  });
});