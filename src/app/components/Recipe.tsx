import Image from "next/image";
import recipeImg from "@/assets/images/image-omelette.jpeg";
export default function Recipe() {
    return (
        <ul className="bg-white relative container
        desktop:max-w-desktop
        tablet:max-w-tablet tablet:py-10
        mobile:max-w-mobile  mobile:pb-10
        min-w-[375px]
        grid grid-col-1 gap-8 rounded-xl shadow-lg text-recipe-stone-600">
            <li className="tablet:px-10 px-0">
                <Image
                    src={recipeImg}
                    alt={"recipe"}
                    width={1000}
                    height={1000}
                    className=" tablet:rounded-xl"
                />
            </li>
            <li>
                <ul className="tablet:px-10 px-8 grid grid-col-1 gap-8" >
                    <li className="font-outfit grid grid-cols-1 gap-6">
                        <h1 className="tablet:text-[40px] text-[36px] leading-none font-youngSerif text-recipe-stone-900">Simple Omelette Recipe</h1>
                        <p className="text-base">
                            An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.
                        </p>
                    </li>
                    <li className="bg-recipe-rose p-6 font-outfit grid grid-cols-1 gap-4 rounded-lg">
                        <h3 className="font-bold text-xl leading-none text-recipe-rose-800">Preparation time</h3>
                        <ul className="text-base list-disc pl-6 grid grid-cols-1 gap-2">
                            <li className="pl-4">
                                <p className="inline-block align-middle"><span className="font-bold">Total: </span>Approximately 10 minutes</p>
                            </li>
                            <li className="pl-4">
                                <p className="inline-block align-middle"><span className="font-bold">Preparation: </span>5 minutes</p></li>
                            <li className="pl-4">
                                <p className="inline-block align-middle"><span className="font-bold">Cooking: </span>5 minutes</p>
                            </li>
                        </ul>
                    </li>
                    <li className="grid grid-cols-1 gap-6">
                        <h2 className="text-recipe-brown font-youngSerif text-[28px] leading-none">Ingredients</h2>
                        <ul className="font-outfit text-base list-disc pl-6 grid grid-cols-1 gap-2">
                            <li className="pl-4"><p className="inline-block align-middle">2-3 large eggs</p></li>
                            <li className="pl-4"><p className="inline-block align-middle">Salt,to taste</p></li>
                            <li className="pl-4"><p className="inline-block align-middle">Pepper, to taste</p></li>
                            <li className="pl-4"><p className="inline-block align-middle">1 tablespoon of butter or oil</p></li>
                            <li className="pl-4"><p className="inline-block align-middle">Optional fillings:cheese, diced, vegetables, cooked meats, herbs</p></li>
                        </ul>
                    </li>
                    <li>
                        <hr />
                    </li>
                    <li className="grid grid-cols-1 gap-6">
                        <h2 className="text-recipe-brown font-youngSerif text-[28px] leading-none">Instructions</h2>
                        <ul className="font-outfit text-base list-decimal marker:text-recipe-brown marker:font-bold pl-6 grid grid-cols-1 gap-2">
                            <li className="pl-4">
                                <p><span className="font-bold">Beat the eggs:</span>In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.</p>
                            </li>
                            <li className="pl-4">
                                <p><span className="font-bold">Heat the pan:</span>Place a non-stick frying pan over medium heat and add butter of oil.</p>
                            </li>
                            <li className="pl-4">
                                <p><span className="font-bold">Cook the omelette:</span>Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.</p>
                            </li>
                            <li className="pl-4">
                                <p><span className="font-bold">Add fillings (optional):</span>When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.</p>
                            </li>
                            <li className="pl-4">
                                <p><span className="font-bold">Fold and serve:</span>As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minutes, then slide it onto a plate.</p>
                            </li>
                            <li className="pl-4">
                                <p><span className="font-bold">Enjoy:</span>Serve hot, with additional salt and pepper if needed.</p>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <hr />
                    </li>
                    <li className="grid grid-cols-1 gap-6">
                        <h2 className="text-recipe-brown font-youngSerif text-[28px] leading-none">Nutrition</h2>
                        <p className="font-outfit text-base">The table below shows nutritional values per serving without the additional fillings.</p>
                        <ul className="font-outfit text-base grid grid-cols-1 gap-6 divide-y">
                            <li className="flex px-8 gap-4">
                                <p className="basis-1/2">Calories</p>
                                <p className="basis-1/2 text-recipe-brown font-bold">277kcal</p>
                            </li>
                            <li className="flex px-8 gap-4">
                                <p className="basis-1/2">Carbs</p>
                                <p className="basis-1/2 text-recipe-brown font-bold">0g</p>
                            </li>
                            <li className="flex px-8 gap-4">
                                <p className="basis-1/2">Protein</p>
                                <p className="basis-1/2 text-recipe-brown font-bold">20g</p>
                            </li>
                            <li className="flex px-8 gap-4">
                                <p className="basis-1/2">Fat</p>
                                <p className="basis-1/2 text-recipe-brown font-bold">22g</p>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
        </ul>
    );
}