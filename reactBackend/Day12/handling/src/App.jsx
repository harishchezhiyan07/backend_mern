
import React, { useState } from "react";

const App = () => {
  // Task 1: Toggle True / False
  const [isOn, setIsOn] = useState(false);

  // Task 2: Like Button
  const [isLiked, setIsLiked] = useState(false);

  // Task 3: Update an Object
  const [user, setUser] = useState({
    name: "Rahul",
    age: 22,
    city: "Chennai",
  });

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="mb-8 text-center text-3xl font-bold text-blue-700">
        React useState Tasks
      </h1>

      {/* Task 1: Toggle True / False */}
      <div className="mx-auto mb-6 max-w-md rounded-xl bg-white p-6 shadow-lg">
        <h2 className="mb-4 text-xl font-bold">Task 1: Toggle</h2>

        <p className="mb-4 text-lg">
          Status:{" "}
          <span className={isOn ? "text-green-600" : "text-red-600"}>
            {isOn ? "ON" : "OFF"}
          </span>
        </p>

        <button
          onClick={() => setIsOn(!isOn)}
          className="rounded-lg bg-blue-600 px-5 py-2 text-white hover:bg-blue-700"
        >
          {isOn ? "Turn OFF" : "Turn ON"}
        </button>
      </div>

      {/* Task 2: Like Button */}
      <div className="mx-auto mb-6 max-w-md rounded-xl bg-white p-6 shadow-lg">
        <h2 className="mb-3 text-xl font-bold">Task 2: Like Button</h2>

        <h3 className="text-lg font-semibold">My Post</h3>
        <p className="mb-4 text-gray-600">Click the Like button!</p>

        <button
          onClick={() => setIsLiked(!isLiked)}
          className={`rounded-lg px-5 py-2 text-white ${
            isLiked
              ? "bg-pink-600 hover:bg-pink-700"
              : "bg-gray-600 hover:bg-gray-700"
          }`}
        >
          {isLiked ? "Liked " : "Like"}
        </button>

        {isLiked && (
          <p className="mt-4 font-semibold text-pink-600">
            You liked this post!
          </p>
        )}
      </div>

      {/* Task 3: Update an Object */}
      <div className="mx-auto max-w-md rounded-xl bg-white p-6 shadow-lg">
        <h2 className="mb-4 text-xl font-bold">Task 3: Update Object</h2>

        <div className="mb-5 space-y-2 text-gray-700">
          <p>
            Name: <span className="font-semibold">{user.name}</span>
          </p>
          <p>
            Age: <span className="font-semibold">{user.age}</span>
          </p>
          <p>
            City: <span className="font-semibold">{user.city}</span>
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => setUser({ ...user, name: "Arjun" })}
            className="rounded-lg bg-green-600 px-4 py-2 text-white hover:bg-green-700"
          >
            Change Name
          </button>

          <button
            onClick={() =>
              setUser({ ...user, age: user.age + 1 })
            }
            className="rounded-lg bg-purple-600 px-4 py-2 text-white hover:bg-purple-700"
          >
            Increase Age
          </button>

          <button
            onClick={() => setUser({ ...user, city: "Bangalore" })}
            className="rounded-lg bg-orange-500 px-4 py-2 text-white hover:bg-orange-600"
          >
            Change City
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;