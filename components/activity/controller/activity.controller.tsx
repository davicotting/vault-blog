"use client";

import { useState } from "react";
import { ActivityProps } from "../types";
import { ActivityView } from "../view/activity.view";

export function ActivityController({ type, label, title, description, albumName, userName, imageUrl, userAvatarSrc }: ActivityProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ActivityView
      type={type}
      label={label}
      title={title}
      description={description}
      albumName={albumName}
      userName={userName}
      imageUrl={imageUrl}
      userAvatarSrc={userAvatarSrc}
      isOpen={isOpen}
      onOpenChange={setIsOpen}
    />
  );
}
