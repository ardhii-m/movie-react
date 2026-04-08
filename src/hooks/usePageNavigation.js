import { useSearchParams } from "react-router-dom";

function usePageNavigation() {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;

  function handlePageChange(newPage) {
    setSearchParams({ page: newPage });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return { page, handlePageChange };
}

export default usePageNavigation;
