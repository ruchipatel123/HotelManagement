import Hero from "./Component/Hero";
import RoomListing from "./Component/RoomListing";
import SearchBar from "./Component/SearchBar";
export default async function Home() {
  return (
    <main>
     
      <Hero/>
      <SearchBar/>
      <RoomListing/>
    </main>
  );
}
