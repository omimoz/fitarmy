import { getService } from "@/data/data";
import { message } from "antd";
import { useEffect } from "react";
import { useQuery } from "react-query";

const useService = (id) => {
  const { data, isLoading, isError } = useQuery("services", getService, {
    keepPreviousData: true,
    refetchOnWindowFocus: false,
  });
  console.log(data);
  useEffect(() => {
    if (isError) {
      message.error("there is problem");
    }
  }, [isError]);
  function checkPath() {
    if (data && data.length > 0) {
      const result = data?.filter((item) => item.id === id);
      return result?.length > 0 ? result[0] : [];
    }
  }
  const result = checkPath();
  return { result, isLoading };
};

export default useService;
