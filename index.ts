import UserPropertyDAO from "./src/models/dao/UserPropertyDAO";
import UserProperty from "./src/models/entities/UserProperty";

const userProperties: UserProperty[] = [
  {
    key: 'nome',
    value: 'Abilio'
  },
  {
    key: 'idade',
    value: 31
  }
];

const userPropertyDAO = new UserPropertyDAO('user.properties');
userPropertyDAO.clear();
userProperties.forEach((userProperty) => userPropertyDAO.add(userProperty));
const idade = userPropertyDAO.get('idade');
