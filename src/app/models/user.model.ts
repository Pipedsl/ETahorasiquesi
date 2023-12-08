export interface User {
  id: string,
  nombre: string,
  email: string,
  password: string,
  rol: 'profesor' | 'alumno',
  createdAt?: Date,
  updatedAt?:Date
}
