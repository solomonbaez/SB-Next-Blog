import React from "react";

export default function PostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className=" flex items-center justify-center h-screen ">
      {children}
    </div>
  );
}