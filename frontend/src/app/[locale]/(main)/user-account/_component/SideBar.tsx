'use client'
import { useGetMeQuery } from "@/app/services/auth";
import { Avatar, Text } from "@mantine/core";
import Link from "next/link";
import React from "react";

const SideBar = () => {
  const {
    data: profileData,
  } = useGetMeQuery();
  return (
    <div className="bg-[#606C38] text-white w-1/4 p-4 flex flex-col items-center justify-start h-screen mr-10">
      <Avatar className="text-xl text-white" size="xl" src={profileData?.profile_picture} />
      <Text className="font-bold text-2xl">User</Text>
      <ul className="mt-4 space-y-2 text-gray-300">
        <li>
          <Link href="/user-account/profile-summary" className="text-white">
            Profile Summary
          </Link>
        </li>
        <li> 
          <Link href="/orders" className="text-white">
            Messages
          </Link>
        </li>
        <li>
          <Link href="/settings" className="text-white">
            Favorites
          </Link>
        </li>
        <li>
          <Link href="/logout" className="text-white">
            Orders
          </Link>
        </li>
        <li>
          <Link href="/logout" className="text-white">
            Artists you follow
          </Link>
        </li>
        <li>
          
          <Link href="/user-account/deactivate" className="text-white">
            Deactivate Account
          </Link>
        </li>
        <li>
          <Link href="/logout" className="text-white">
            Log out
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
