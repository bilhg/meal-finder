import Logo from "../Logo";
import SearchForm from "./SearchForm";

export default function SearchPanel() {
    return (
        <div className="py-4 md:py-8 px-2 md:px-4">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 h-[95vh] md:h-[85vh] flex">
            <div className="flex flex-col flex-grow justify-evenly">
              <div className="text-center">
                  <Logo />
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-1 text-center">
                    Your Meal Finder
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-6 text-center">
                      Find your next meal in Tokyo!
                  </p>
              </div>
              <SearchForm />
            </div>
          </div>
      </div>
    )
}