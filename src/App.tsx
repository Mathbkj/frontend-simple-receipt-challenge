import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
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
  const constraintRef = useRef<HTMLDivElement>(null);
  const constraints = {
    width: "50%",
    borderRadius: 10,
  };
  const offScreen = {
    x: -10,
    opacity: 0,
  };
  const onScreen = {
    x: 20,
    y:10,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  };
  const { scrollY } = useScroll();
  const rotate = useTransform(scrollY, [0, 1000], [0, -30]);

  return (
    <main className="flex justify-center items-center text-center ">
      <div className="flex flex-col gap-2 justify-center items-center w-1/2 mt-4 py-4 rounded-md bg-white">
        <motion.img
          width={500}
          height={500}
          style={{ objectFit: "cover", borderRadius: 10,rotate:rotate }}
          src={Image}
        />
        <motion.h1
          initial={{ opacity: 0, x: 0 }}
          whileInView={{ opacity: 1, x: 1, transition: { duration: 0.8 } }}
          className="text-2xl font-young-serif"
        >
          Simple Omelette Recipe
        </motion.h1>
        <br />
        <motion.p
          initial={{ opacity: 0, x: 0 }}
          whileInView={{ opacity: 1, x: 1, transition: { duration: 0.8 } }}
          className="text-xl font-outfit-light "
        >
          An easy and quick dish, perfect for any meal. This classic omelette
          combines beaten eggs cooked to perfection, optionally filled with your
          choice of cheese, vegetables, or meats.
        </motion.p>
        <br />
        <motion.div ref={constraintRef} style={constraints}>
          <motion.div
            initial={{ outlineWidth: 0 }}
            whileHover={{ scale: 1.2 }}
            drag
            dragConstraints={constraintRef}
            dragElastic={0.8}
            className="time-div"
          >
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
          </motion.div>
        </motion.div>

        <motion.div
          initial={offScreen}
          whileInView={onScreen}
          className="ing-div"
        >
          <h1 className="font-young-serif ms-4 mt-5 text-3xl">Ingredients</h1>
          <ol className="list-disc list-inside">
            {ingItems.map((item) => (
              <li className="text-left m-4">{item.value}</li>
            ))}
          </ol>
        </motion.div>
        <hr className="w-[70%]" />
        <motion.div initial={offScreen} whileInView={onScreen} className="instr-div">
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
        </motion.div>
        <hr className="w-[70%]" />
        <motion.div initial={offScreen} whileInView={onScreen} className="nutr-div p-2">
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
        </motion.div>
      </div>
    </main>
  );
}

export default App;
