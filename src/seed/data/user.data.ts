import { CreateUser } from '../../auth/interfaces';
import { uuidRef } from './roles.data';

export const userData: CreateUser[] = [
  {
    rut: '19784212-1',
    email: 'camilojtg.devep@protonmail.com',
    names: 'Camilo Eduardo',
    paternalSurname: 'Montupil',
    maternalSurname: 'Zamorano',
    password: '123DSAcamilo123',
    isActive: true,
    roles: [uuidRef.development, uuidRef.administrator],
  },
  {
    rut: '19782890-0',
    email: 'jonask8@gmail.com',
    names: 'Jonatan Levi',
    paternalSurname: 'Perez',
    maternalSurname: 'Jerez',
    password: 'dfshjkDSADSAfdsh435hkj',
    isActive: true,
    roles: [uuidRef.assistant, uuidRef.administrator],
  },
  {
    rut: '6481357-9',
    email: 'magdalena.fuente@gmail.com',
    names: 'Magdalena Javiera',
    paternalSurname: 'Bernales',
    maternalSurname: 'Fuente',
    password: 'dsa12kj321klASADSA;sda23',
    isActive: true,
    roles: [uuidRef.assistant],
  },
  {
    rut: '7127905-7',
    email: 'pedro@gmail.com',
    names: 'Pedro',
    paternalSurname: 'Laferte',
    maternalSurname: 'Rodriquez',
    password: '23823sdkDSADSAkllo123',
    isActive: true,
    roles: [uuidRef.executive],
  },
  {
    rut: '22227087-1',
    email: 'monica.silvia@gmail.com',
    names: 'Monica',
    paternalSurname: 'Silvia',
    maternalSurname: 'Paz',
    password: 'd123ASSAsadsa234432',
    isActive: true,
    roles: [uuidRef.assistant, uuidRef.administrator],
  },
  {
    rut: '21388457-3',
    email: 'oscar.flores@gmail.com',
    names: 'Oscar',
    paternalSurname: 'Acebedo',
    maternalSurname: 'Flores',
    password: 'dsada;dsTPTRkad',
    isActive: true,
    roles: [uuidRef.executive, uuidRef.administrator],
  },
];