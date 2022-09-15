export type Props = {
  currentPage: number;
  total: number;
  paginateBack: () => void;
  paginateFront: () => void;
};

export const Pagination = (props: Props): JSX.Element => {
  const { currentPage, total, paginateFront, paginateBack } = props;

  return (
    <div>
      <div className="py-2">
        <p className="text-sm text-gray-700">
          Showing
          <span className="font-medium">{currentPage * 20 - 10}</span>
          to
          <span className="font-medium"> {currentPage * 20} </span>
          of
          <span className="font-medium"> {total} </span>
          results
        </p>
      </div>
      <nav aria-label="Page navigation example">
        <ul className="inline-flex -space-x-px">
          {currentPage !== 1 && (
            <li>
              <a
                onClick={() => {
                  paginateBack();
                }}
                className="py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              >
                Previous
              </a>
            </li>
          )}
          <li>
            <a
              onClick={() => {
                paginateFront();
              }}
              href="#"
              className="py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
