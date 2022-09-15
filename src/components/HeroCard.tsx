import { Character } from "../interfaces/character";
import ApiProvider from "../services/api-provider";

type Props = {
  character: Character;
};
export const HeroCard = (props: Props): JSX.Element => {
  const hero = props.character;
  return (
    <div className="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
      <a
        href=""
        className="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden"
      >
        <div className="relative pb-48 overflow-hidden">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
            alt={`${hero.name}`}
          />
        </div>
        <div className="p-4">
          <span className="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">
            Details
          </span>
          <h2 className="mt-2 mb-2  font-bold">{hero.name}</h2>
          <p className="text-sm">{hero.description}</p>
        </div>
        <div className="p-4 flex items-center text-sm text-gray-600">
          <span className="ml-2">
            <div className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
              Add To super Hero
            </div>
          </span>
        </div>
      </a>
    </div>
  );
};
