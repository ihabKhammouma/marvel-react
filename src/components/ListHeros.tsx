import { HeroCard } from "./HeroCard";
import ApiProvider from "../services/api-provider";
import { Character } from "../interfaces/character";
import { useEffect, useState } from "react";
import { Pagination } from "./Pagination";
import { Spinner } from "./Spinner";
export const ListHeros = () => {
  const [characters, setCharacters] = useState<Character[]>([]);

  const [totalCharacters, setTotalCharacters] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    getCharacters(1);
  }, []);
  const getCharacters = async (page: number): Promise<void> => {
    try {
      const res = await ApiProvider().getCharacters(page);

      const list: Character[] = res
        ? (res.data.data.results as Character[])
        : [];
      const total: number = res ? res.data.data.total : 0;
      console.log(list);
      setCharacters(list);
      setTotalCharacters(total);
      setCurrentPage(page);
      setLoading(false);
    } catch (e) {
      console.error(`error: ${e}`);
    }
  };
  const onChangePage = (page: number): void => {
    setLoading(true);
    getCharacters(page);
  };
  const renderList = (): JSX.Element => {
    return (
      <div className="flex flex-wrap -mx-4">
        {characters.map((c: Character) => {
          return <HeroCard character={c} key={c.id} />;
        })}
      </div>
    );
  };
  // Change page
  const paginateFront = (): void => {
    setCurrentPage(currentPage + 1);
    onChangePage(currentPage + 1);
  };
  const paginateBack = (): void => {
    setCurrentPage(currentPage - 1);
    onChangePage(currentPage - 1);
  };
  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        <>
          {totalCharacters === 0 ? (
            <div> No character</div>
          ) : (
            <>
              {renderList()}
              <Pagination
                currentPage={currentPage}
                total={totalCharacters}
                paginateBack={paginateBack}
                paginateFront={paginateFront}
              />
            </>
          )}
        </>
      )}
    </div>
  );
};
