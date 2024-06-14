import { useEffect, useState } from 'react';
import Styles from './Search.module.css';

interface SearchTextFieldProps {
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  numOfElements: number;
}

const Search = ({ setSearchQuery, numOfElements }: SearchTextFieldProps) => {
  const [tempValue, setTempValue] = useState<string>('');

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSearchQuery(tempValue);
    }, 500);
    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tempValue]);

  return (
    <div className={Styles.container}>
      <div className={Styles.counter}>
        <span className={Styles.backGround}>{numOfElements}</span>
      </div>
      <input
        type="search"
        id="search-podcast"
        value={tempValue}
        placeholder="Filter podcasts..."
        onChange={(e) => setTempValue(e.target.value)}
      />
    </div>
  );
};

export default Search;
