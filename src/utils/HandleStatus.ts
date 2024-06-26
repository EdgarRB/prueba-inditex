const HandleStatus = (
  status: string,
  setIsLoading: (loading: boolean) => void
) => {
  if (status === 'pending') {
    setIsLoading && setIsLoading(true);
  } else {
    setIsLoading && setIsLoading(false);
  }
};

export default HandleStatus;
