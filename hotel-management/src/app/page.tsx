import { getUser } from "../../sanity/sanity.utils";
import Footer from "./Component/Footer";
import Header from "./Component/Header";
import Hero from "./Component/Hero";
import RoomListing from "./Component/RoomListing";
import SearchBar from "./Component/SearchBar";
export default async function Home() {
  const user = await getUser()
  return (
    <main>
      {/* <div className="text-center py-10 text-xl font-bold">
          { user.map((user:any)=>(
          <div className="flex items-center justify-center py-5 border-b border-gray-500"><img src={user.poster} alt="" className="w-10 align-middle h-10 rounded-full inline-block mr-2"/>
          <div className="inline-block align-middle">{user.name}</div></div>
        ))}
      </div> */}
      <Hero/>
      <SearchBar/>
      <RoomListing/>
    </main>
  );
}
