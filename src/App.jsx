import React from "react";
import TwitterFollowCard from "./assets/TwitterFollowCard";

function App() {

  return (
    <section className="flex flex-col gap-4">
      <TwitterFollowCard userName="lmvw" initialIsFollowing={false}>
        Luis Velez
      </TwitterFollowCard>
      <TwitterFollowCard initialIsFollowing={false}>
        Pedro Torres
      </TwitterFollowCard>
      <TwitterFollowCard userName="MarGomezH" initialIsFollowing>
        Mar Gómez
      </TwitterFollowCard>
    </section>
  );
}

export default App;
