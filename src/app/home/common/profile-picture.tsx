import { FunctionComponent } from "react";
import Image from "next/image";

const ProfilePicutre: FunctionComponent = () => {
  return (
    <Image
      src="/avatar.jpg"
      alt="profile-picture"
      width={3024}
      height={4032}
      className="w-1/5 rounded-lg object-cover shadow-lg"
    />
  );
};

export { ProfilePicutre };
