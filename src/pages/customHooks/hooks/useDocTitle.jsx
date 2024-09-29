import { useEffect } from "react";

function useDocTitle(count) {
  useEffect(() => {
    document.title = `count -${count}`;
  }, [count]);
  return {};
}

export default useDocTitle;
