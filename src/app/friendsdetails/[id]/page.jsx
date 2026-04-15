import FriendDetails from "@/app/Components/FriendsDetails/FriendDetails";
import { use, useContext } from "react";

export const metadata = {
  title: "Friends Details",
};

const FriendDetailsPage = async ({ params }) => {
  const { id } = await params;
  // console.log(id);

  return (
    <div>
      <FriendDetails id={id}></FriendDetails>
    </div>
  );
};

export default FriendDetailsPage;
