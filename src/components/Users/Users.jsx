import React from "react";
import Pagination from "../common/Pagination/Pagination";
import User from "./User";

function Users({
  onPageChanged,
  currentPage,
  users,
  unfollow,
  follow,
  totalUsersCount,
  pageSize,
  followingInProgress,
}) {
  return (
    <div>
      <Pagination
        totalItemsCount={totalUsersCount}
        pageSize={pageSize}
        onPageChanged={onPageChanged}
        currentPage={currentPage}
      />
      {users.map((user) => (
        <User
          {...user}
          follow={follow}
          unfollow={unfollow}
          followingInProgress={followingInProgress}
          key={user.id}
        />
      ))}
    </div>
  );
}

export default Users;
