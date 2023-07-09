import { useState } from "react";
import React from 'react';

function TwitterFollowCard({ children, userName = 'Unknown', initialIsFollowing }) {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);
  const [isHovered, setIsHovered] = useState(false);

  const buttonText = isFollowing ? 'Following' : 'Follow';
  const buttonClassName = isFollowing
    ? 'w-32 ml-4 border border-lime-600 rounded-3xl py-1.5 px-4 font-bold text-white bg-lime-600/60 border-white bg duration-200 hover:bg-red-500/30 hover:text-rose-600 hover:border hover:border-rose-600'
    : 'w-32 ml-4 border rounded-3xl py-1.5 px-4 font-bold bg-white bg duration-200 hover:bg-lime-600/20 hover:text-lime-600 hover:border hover:border-lime-600';

  const handleClick = () => {
    setIsFollowing(!isFollowing);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <article className="flex items-center bg-gray-800 rounded-xl py-2 px-4 place-content-between">
      <header className="flex items-center gap-4">
        <img
          className="w-12 h-12 rounded-full"
          src={`https://unavatar.io/${userName}`}
          alt="twitter image"
        />
        <div className="flex-col">
          <strong className="text-2xl text-white">{children}</strong>
          <span className="block opacity-60 text-white">@{userName}</span>
        </div>
      </header>
      <aside>
        <button
          onClick={handleClick}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={buttonClassName}
        >
          {isFollowing && isHovered ? (
            <span className="hidden">{buttonText}</span>
          ) : (
            <span>{buttonText}</span>
          )}
          {isFollowing && (
            <span className={`${isHovered ? 'inline-block' : 'hidden'}`}>
              Unfollow
            </span>
          )}
        </button>
      </aside>
    </article>
  );
}

export default TwitterFollowCard;
