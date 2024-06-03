import { type SchemaTypeDefinition } from 'sanity'
import { userType } from './schema/user'
import { NavbarType } from './schema/navbar'
import hotelRoom from './schema/hotelroom'
import review from './schema/review'
import verificationToken from './schema/verificationToken'
import account from './schema/account'
import booking from './schema/booking'
import { bannerType } from './schema/banner'
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [userType,NavbarType,hotelRoom,review,verificationToken,account,booking,bannerType],
}
