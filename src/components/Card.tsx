// components/Card.tsx

import React from "react";

export default function Card({
  children,
  title,
  fullWidth = false,
}: {
  children: React.ReactNode;
  title?: string;
  fullWidth?: boolean;
}) {
  return (
    <div
      className={`bg-white rounded-2xl shadow-md p-6 ${
        fullWidth ? "w-full" : "max-w-3xl w-full"
      }`}
    >
      {title && <h2 className="text-2xl font-bold mb-4">{title}</h2>}
      {children}
    </div>
  );
}