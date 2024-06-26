import HandleStatus from './HandleStatus';

describe('HandleStatus', () => {
  const setIsLoadingMock = jest.fn();

  it('should set loading to true when status is pending', () => {
    HandleStatus('pending', setIsLoadingMock);

    expect(setIsLoadingMock).toHaveBeenCalledWith(true);
  });

  it('should set loading to false when status is not pending', () => {
    HandleStatus('success', setIsLoadingMock);

    expect(setIsLoadingMock).toHaveBeenCalledWith(false);
  });

  it('should set loading to false if status is empty string', () => {
    HandleStatus('', setIsLoadingMock);

    expect(setIsLoadingMock).toHaveBeenCalledWith(false);
  });

  it('should set loading to false if status is null', () => {
    HandleStatus(null as unknown as string, setIsLoadingMock);

    expect(setIsLoadingMock).toHaveBeenCalledWith(false);
  });
});
