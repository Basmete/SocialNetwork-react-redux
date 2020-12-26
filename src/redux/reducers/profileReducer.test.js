import profileReducer, {
  addPostActionCreator,
  deletePost,
} from "./profileReducer";

const state = {
  posts: [
    {
      id: 1,
      message:
        "Шо по прицелу? Шо по прицелу? Шо по прицелу? Шо по прицелу? Шо по прицелу? Шо по прицелу? Шо по прицелу? Шо по прицелу? Шо по прицелу? Шо по прицелу? Шо по прицелу? Шо по прицелу? ",
      likesCount: 12,
    },
    { id: 2, message: "Шо по прицелу?", likesCount: 12 },
    { id: 3, message: "Шо по прицелу?", likesCount: 12 },
    { id: 4, message: "Шо по прицелу?", likesCount: 12 },
  ],
};

describe(`profile reducer`, () => {
  // 1. test data
  const action = addPostActionCreator("it-kamasutra.com");
  let newState;

  it(`length of posts should be incremented`, () => {
    // 2. action
    newState = profileReducer(state, action);

    // 3. expectation
    expect(newState.posts.length).toBe(5);
  });

  it(`should content correct message`, () => {
    expect(newState.posts[4].message).toBe("it-kamasutra.com");
  });
});

it(`after delete messages length should decrement`, () => {
  const action = deletePost(1);
  const newState = profileReducer(state, action);
  expect(newState.posts).toHaveLength(3);
});

it(`after delete messages length shouldn't decrement if id is incorrect`, () => {
  const action = deletePost(10000);
  const newState = profileReducer(state, action);
  expect(newState.posts).toHaveLength(4);
});
