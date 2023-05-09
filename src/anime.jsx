const people = [
  {
    name: "Calvin Hawkins",
    email: "calvin.hawkins@example.com",
    image:
      "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Kristen Ramos",
    email: "kristen.ramos@example.com",
    image:
      "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Ted Fox",
    email: "ted.fox@example.com",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];

export default function Example() {
  return (

<>

<div className="bg-gray-100 p-4 rounded-lg shadow-md ">
      <h2 className="text-3xl font-bold mb-4 text-center">Quiz Title</h2>

      <form >
        <div className="my-8">
          <p className="text-xl font-medium mb-4">What is the capital of France?</p>

          <div class="flex items-center justify-center ">
  <div class="relative">
    <input type="text" id="username" class="border-b py-1 focus:outline-none focus:border-purple-600 focus:border-b-2 transition-colors peer" autocomplete="off"/>
    <label for="username" class="absolute left-0 top-1 text-gray-600 cursor-text peer-focus:text-xs peer-focus:-top-4 peer-focus:text-purple-600 transition-all">Username</label>
  </div>
</div>        </div>

        <button type="submit" className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 transition duration-1000 ease-in-out">Submit</button>
      </form>
    </div>


















</>

    );
}
