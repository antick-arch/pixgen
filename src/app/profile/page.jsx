"use client";
import { authClient } from "@/lib/auth-client";
import { Avatar, Card } from "@heroui/react";
import React from "react";

const ProfilePage = () => {
  const userData = authClient.useSession();
  const user = userData?.data?.user;
  return (
    <Card className="container max-w-140 mx-auto flex flex-col items-center justify-center my-10 ">
      <Avatar className="h-20 w-20">
        <Avatar.Image alt="John Doe" src={user?.imageUrl} />
        <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
      </Avatar>
      <h2 className="font-semibold text-xl">{user?.name}</h2>
      <p className="text-muted">{user?.email}</p>
    </Card>
  );
};

export default ProfilePage;
