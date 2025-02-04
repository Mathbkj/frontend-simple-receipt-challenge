import Image from "./assets/recipe-page-main/assets/images/image-omelette.jpeg";
type PreparationType = {
  name?: string;
  value: string;
};
function App() {
  const timeItems: Array<PreparationType> = [
    { name: "Total", value: "Approximately 10 minutes" },
    { name: "Preparation", value: "5 minutes" },
    { name: "Cooking", value: "5 minutes" },
  ];
  const ingItems: Array<PreparationType> = [
    { value: "2-3 large eggs" },
    { value: "Salt, to taste" },
    { value: "Pepper, to taste" },
    { value: "1 tablespoon of butter or oil" },
    {
      value: "Optional fillings: cheese, diced vegetables, cooked meats, herbs",
    },
  ];
  const instrItems: Array<PreparationType> = [
    {
      name: "Beat the eggs",
      value:
        "In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture",
    },
    {
      name: "Heat the pan",
      value:
        "Place a non-stick frying pan over medium heat and add butter or oil.",
    },
    {
      name: "Cook the omelette",
      value:
        "Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.",
    },
    {
      name: "Add fillings (optional)",
      value:
        "When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.",
    },
    {
      name: "Fold and serve",
      value:
        "As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.",
    },
    {
      name: "Enjoy",
      value: "Serve hot, with additional salt and pepper if needed.",
    },
  ];
  return (
    <main className="flex justify-center items-center text-center bg-white">
      <div className="flex flex-col gap-2 justify-center items-center mt-4">
        <img
          width={500}
          height={500}
          style={{ objectFit: "cover" }}
          src={Image}
        />
        <h1 className="text-2xl font-young-serif">Simple Omelette Recipe</h1>
        <br />
        <p className="text-xl font-outfit-light ">
          An easy and quick dish, perfect for any meal. This classic omelette
          combines beaten eggs cooked to perfection, optionally filled with your
          choice of cheese, vegetables, or meats.
        </p>
        <br />
        <div className="time-div">
          <h1 className="font-outfit-bold ms-4 mt-5 text-xl">
            Preparation Time
          </h1>
          <ol className="list-disc list-inside">
            {timeItems.map((item) => (
              <li className="text-left m-4">
                <span className="font-outfit-medium text-left">
                  {item.name}:{" "}
                </span>
                <span className="font-outfit-light text-left">
                  {item.value}
                </span>
                <br />
              </li>
            ))}
          </ol>
        </div>
        <div className="ing-div">
          <h1 className="font-young-serif ms-4 mt-5 text-3xl">Ingredients</h1>
          <ol className="list-disc list-inside">
            {ingItems.map((item) => (
              <li className="text-left m-4">{item.value}</li>
            ))}
          </ol>
        </div>
        <hr className="w-[70%]" />
        <div className="instr-div">
          <h1 className="font-young-serif ms-4 mt-5 text-3xl">Instructions</h1>
          <ol className="list-decimal list-inside">
            {instrItems.map((item) => (
              <li className="text-left m-4">
                <span className="font-outfit-medium text-left">
                  {item.name}:{" "}
                </span>
                <span className="font-outfit-light text-left">
                  {item.value}
                </span>
                <br />
              </li>
            ))}
          </ol>
        </div>
        <hr className="w-[70%]" />
        <div className="nutr-div p-2">
          <h1 className="font-young-serif ms-4 mt-5 text-3xl">Nutrition</h1>
          <p className="font-outfit-light">
            The table below shows nutritional values per serving without the
            additional fillings.
          </p>
          <table className="table-auto text-xl m-auto">
            <thead>
              <tr>
                <th>Calories</th>
                <th>Carbs</th>
                <th>Protein</th>
                <th>Fat</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>277kcal</td>
                <td>0g</td>
                <td>20g</td>
                <td>22g</td>
              </tr>
            </tbody>
          </table>
          <hr className="w-[90%] mx-auto" />
        </div>
      </div>
    </main>
  );
}

export default App;
