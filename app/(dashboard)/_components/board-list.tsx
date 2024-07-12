"use client";

import EmptyBoards from "./empty-boards";
import EmptyPage from "./empty-page";

interface BoardListProps {
  orgId: string;
  query: {
    search?: string;
    favorites?: string;
  };
}

export const BoardList = ({ orgId, query }: BoardListProps) => {
  const data = [];
  if (!data?.length && query.search) {
    return (
      <EmptyPage
        src="/empty-search.svg"
        label="No results found!"
        subLabel="Try seraching for something else"
      />
    );
  }

  if (!data?.length && query.favorites) {
    return (
      <EmptyPage
        src="/empty-favorites.svg"
        label="No favorite boards!"
        subLabel="Try marking a favorite page"
      />
    );
  }

  if (!data?.length) {
    return <EmptyBoards />;
  }

  return <div>{JSON.stringify(query)}</div>;
};
