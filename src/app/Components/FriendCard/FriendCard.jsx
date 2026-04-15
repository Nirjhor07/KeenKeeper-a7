import Image from "next/image";

const FriendCard = ({ f }) => {
  // console.log(f);
  const { name, status, days_since_contact, picture, tags, priority } = f;
  return (
    <div className="container mx-auto bg-gray-100 ">
      <div className="bg-white  rounded-xl shadow-md p-6 text-center space-y-3 ">
        {/* Profile Image */}
        <div className="flex justify-center ">
          <div className="w-24 h-24 rounded-full overflow-hidden">
            <Image
              className="w-full h-full object-cover"
              src={picture + "?w=200&q=80"} // eta korar uddessho hoilo : image  size reduce & quality for faster loading
              alt={name}
              width={100}
              height={100}
              loading={priority ? "eager" : "lazy"} // eta korsi cz some image was loading slow so i load the image before
            ></Image>
          </div>
        </div>

        {/* Name */}
        <h2 className="text-lg font-semibold text-gray-800">{name}</h2>

        {/* Time */}
        <p className="text-sm text-gray-400">{days_since_contact}d ago</p>

        {/* Tag */}
        <div className="flex gap-2 justify-center items-center">
          {tags.map((tag, index) => (
            <span
              key={index}
              tag={tag}
              className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Status */}
        <div>
          <span
            className={`py-1 px-3 rounded-2xl text-sm
                 ${
                   status === "on track"
                     ? "bg-green-700 text-white "
                     : status === "overdue"
                       ? "bg-red-600"
                       : "bg-yellow-300"
                 }`}
          >
            {status}
          </span>
        </div>
      </div>
    </div>
  );
};

export default FriendCard;
