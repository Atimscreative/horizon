import UserImg from "@/assets/user-avatar.png";
import { Camera } from "lucide-react";
import { useState } from "react";

export default function UserProfile() {
  const [imgUrl, setImgUrl] = useState<string | null>(null);

  const handleProfileChange = (e: any) => {
    if (e.target.files && e.target.files[0]) {
      const files = e.target.files[0];
      const url = URL.createObjectURL(files);
      setImgUrl(url);
      console.log(files, url);
    }
  };

  return (
    <>
      <div className="relative w-max">
        <img
          src={imgUrl ? imgUrl : UserImg}
          alt="user avatar"
          className="-mt-10 h-24 w-24 rounded-full border-4 border-white bg-white object-contain object-center shadow-lg"
        />
        <input
          type="file"
          id="profile"
          className="hidden"
          aria-label="profile"
          name="profile"
          onChange={handleProfileChange}
        />
        <label
          htmlFor="profile"
          className="text-body-light absolute right-0 bottom-0 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-white"
        >
          <Camera size={18} />
        </label>
      </div>
      <div className="">
        <p className="text-label text-2xl font-semibold">Adrian Hajdin</p>
        <p className="text-body-light text-sm">adrian@jsmastery.pro</p>
      </div>
    </>
  );
}
