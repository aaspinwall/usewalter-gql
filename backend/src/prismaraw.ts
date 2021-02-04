import { PrismaClient } from '@prisma/client'
import rand from 'lodash/random'
import lowerCase from 'lodash/toLower'
import faker from 'faker'

const makeTime = () => {
  const randomTime = new Date(faker.time.recent()).toTimeString().split(':')
  const [hours, minutes] = randomTime
  const formatted = hours + ':' + minutes
  return formatted
}

const fakeEmail = lowerCase(faker.internet.email())
const fakePassword = faker.internet.password()
const fakeName = `${faker.name.firstName()} ${faker.name.lastName()}`
const fakeUnit = Number(faker.random.number(999))
const fakeTelephone = faker.phone.phoneNumber()
const fakeTime = makeTime()

const prisma = new PrismaClient()

export async function makeUser(isAdmin = false) {
  try {
    const user = await prisma.user.create({
      data: {
        email: fakeEmail,
        password: fakePassword,
        superuser: isAdmin,
        resident: {
          create: {
            name: fakeName,
            unit: fakeUnit,
            telephone: fakeTelephone,
            timeForNotif: fakeTime,
          },
        },
      },
    })
    console.log(user)
    return user
  } catch (error) {
    console.log('Something went wrong when trying to create a new user', error)
  }
}
